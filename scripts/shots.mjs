/**
 * Percorre a página em quadros do tamanho da tela e captura cada um.
 * É o que a pessoa realmente vê, sem artefato de screenshot de elemento alto.
 *
 * Uso: OUT=/caminho node scripts/shots.mjs
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const base = process.env.BASE || "http://localhost:3000";
const out = resolve(process.env.OUT || "shots");
const width = Number(process.env.W || 390);
const height = Number(process.env.H || 844);
const path = process.env.PATHNAME || "/";
const prefix = process.env.PREFIX || "f";

await mkdir(out, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width, height },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});

await page.goto(base + path, { waitUntil: "networkidle" });

// Acorda reveals e medições dependentes de scroll.
await page.evaluate(async () => {
  const step = window.innerHeight;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(700);

const total = await page.evaluate(() => document.documentElement.scrollHeight);
const quadros = Math.ceil(total / height);
console.log(`altura total: ${total}px | ${quadros} telas de ${height}px`);

for (let i = 0; i < quadros; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * height);
  await page.waitForTimeout(450);
  await page.screenshot({ path: `${out}/${prefix}${String(i).padStart(2, "0")}.png` });
}

// Marcos: onde cada seção começa, em telas
const marcos = await page.evaluate(() =>
  ["top", "operacao", "casos", "experiencia", "stack", "contato"].map((id) => {
    const el = document.getElementById(id);
    return {
      id,
      topo: el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : null,
      altura: el ? Math.round(el.getBoundingClientRect().height) : null,
    };
  }),
);
console.log(JSON.stringify(marcos, null, 2));

await browser.close();
