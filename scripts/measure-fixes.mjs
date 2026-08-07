import { chromium } from "playwright";

const base = process.argv[2] || process.env.BASE_URL || "http://127.0.0.1:3000";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(base, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1200);
// garantir reveals aplicados
await page.evaluate(() => {
  document.documentElement.classList.add("js-reveal");
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
});
await page.waitForTimeout(100);

// Badge may be md+ only — force desktop
const badge = await page.evaluate(() => {
  const path = document.querySelector("#availability-arc");
  const text = document.querySelector('textPath[href="#availability-arc"]')
    || document.querySelector("textPath");
  if (!path || !text) return { error: "missing", path: !!path, text: !!text };
  const pathEl = path;
  const textEl = text;
  return {
    pathLen: Math.round(pathEl.getTotalLength()),
    textLen: Math.round(textEl.getComputedTextLength()),
    content: (textEl.textContent || "").trim(),
  };
});

await page.evaluate(() => {
  document.getElementById("operacao")?.scrollIntoView({ block: "center" });
});
await page.waitForTimeout(400);

const metrics = await page.evaluate(() => {
  const cards = [...document.querySelectorAll("#operacao article")];
  return cards.map((card) => {
    const m = card.querySelector(".pillar-metric");
    const r = m?.getBoundingClientRect();
    const cs = m ? getComputedStyle(m) : null;
    return {
      value: (m?.textContent || "").trim(),
      top: r ? Math.round(r.top * 10) / 10 : null,
      fontSize: cs?.fontSize || null,
      whiteSpace: cs?.whiteSpace || null,
      width: r ? Math.round(r.width) : null,
      scrollWidth: m ? m.scrollWidth : null,
    };
  });
});

const tops = metrics.map((m) => m.top).filter((t) => t != null);
const topSpread = tops.length ? Math.max(...tops) - Math.min(...tops) : null;

console.log(
  JSON.stringify(
    {
      badge,
      metrics,
      topSpread: topSpread != null ? Math.round(topSpread * 10) / 10 : null,
    },
    null,
    2,
  ),
);

await browser.close();
