import { chromium } from "playwright";

/**
 * Simula JS “travado” no gate do reveal: a classe js-reveal nunca fica ativa.
 * React/rAF continuam (página hidrata); só o mecanismo de esconder falha →
 * conteúdo permanece no estado padrão visível (CSS-first).
 */
async function measureStuck(url) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.addInitScript(`(() => {
    const proto = DOMTokenList.prototype;
    const orig = proto.add;
    proto.add = function (...args) {
      if (args.includes("js-reveal")) return;
      return orig.apply(this, args);
    };
  })();`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  // Rede de segurança: se algo forçou a classe, remove
  await page.evaluate(() => {
    document.documentElement.classList.remove("js-reveal");
  });
  await page.waitForTimeout(8000);
  const result = await page.evaluate(() => {
    const opacity0 = [...document.querySelectorAll("*")].filter(
      (e) => getComputedStyle(e).opacity === "0",
    );
    const sizes = new Set();
    [...document.querySelectorAll("body *")].forEach((el) => {
      const fs = getComputedStyle(el).fontSize;
      if (parseFloat(fs) > 0) sizes.add(fs);
    });
    return {
      opacity0: opacity0.length,
      samples: opacity0.slice(0, 12).map((e) => ({
        tag: e.tagName,
        text: (e.textContent || "").trim().slice(0, 50),
        cls: (e.className || "").toString().slice(0, 80),
      })),
      jsReveal: document.documentElement.classList.contains("js-reveal"),
      title: document.title,
      titleLen: document.title.length,
      fontSizeCount: sizes.size,
      fontSizes: [...sizes].sort((a, b) => parseFloat(a) - parseFloat(b)),
      twitterImage:
        document.querySelector('meta[name="twitter:image"]')?.content || null,
      twitterAlt:
        document.querySelector('meta[name="twitter:image:alt"]')?.content ||
        null,
      css: [...document.querySelectorAll('link[rel="stylesheet"]')].map((l) =>
        l.href.split("/").pop(),
      ),
      contatoVisible: [...document.querySelectorAll("#contato a")].every(
        (a) => getComputedStyle(a).opacity !== "0",
      ),
    };
  });
  await browser.close();
  return result;
}

async function measureScrimTouchGrids() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:4322/", {
    waitUntil: "networkidle",
    timeout: 60000,
  });

  await page.locator('button[aria-label="Abrir menu"]').click({ timeout: 10000 });
  await page.waitForTimeout(500);

  const scrim = await page.evaluate(() => {
    const scrimEl = [...document.querySelectorAll("button")].find(
      (b) =>
        b.getAttribute("aria-label") === "Fechar menu" &&
        getComputedStyle(b).position === "fixed" &&
        b.className.includes("inset-0"),
    );
    const r = scrimEl?.getBoundingClientRect();
    return {
      scrim: r ? { w: Math.round(r.width), h: Math.round(r.height) } : null,
      innerHeight: window.innerHeight,
      inHeader: !!scrimEl?.closest("header"),
    };
  });

  await page.locator("button.fixed.inset-0").click();
  await page.waitForTimeout(300);

  const touch = await page.evaluate(() => {
    const small = [...document.querySelectorAll("a,button")]
      .filter((e) => {
        const r = e.getBoundingClientRect();
        return r.height > 0 && r.height < 44;
      })
      .map((e) => ({
        text: (e.textContent || "").trim().slice(0, 40),
        h: Math.round(e.getBoundingClientRect().height * 10) / 10,
      }));
    return { smallCount: small.length, samples: small };
  });

  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto("http://127.0.0.1:4322/casos/growth-ops-iam", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  // Preferência (a): desafio 2 cols + último col-span-2, não é órfão visual
  const grids = await page.evaluate(() => {
    const challenge = document.querySelector("#desafio .grid");
    const results = document.querySelector("#resultados .grid.items-start, #resultados .grid");
    const read = (g) => {
      if (!g) return null;
      const kids = [...g.children];
      const cols = getComputedStyle(g)
        .gridTemplateColumns.split(" ")
        .filter(Boolean).length;
      const lastSpan = kids.length
        ? getComputedStyle(kids[kids.length - 1]).gridColumn
        : null;
      return { cols, kids: kids.length, lastSpan, className: g.className };
    };
    return { challenge: read(challenge), results: read(results) };
  });

  await browser.close();
  return { scrim, touch, grids };
}

const home = await measureStuck("http://127.0.0.1:4322/");
console.log("HOME", JSON.stringify(home, null, 2));
const casePage = await measureStuck(
  "http://127.0.0.1:4322/casos/growth-ops-iam",
);
console.log("CASE", JSON.stringify(casePage, null, 2));
const rest = await measureScrimTouchGrids();
console.log("REST", JSON.stringify(rest, null, 2));
