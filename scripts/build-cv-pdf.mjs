/**
 * Gera public/Curriculo_David_Pinho.pdf a partir da rota /cv.
 *
 * A rota é alimentada por src/lib/content.ts, então o PDF nunca diverge do
 * site: mudou a experiência lá, roda este script e o arquivo acompanha.
 *
 * Uso:
 *   npm run dev          (em outro terminal)
 *   npm run cv:pdf
 *
 * Outra origem: CV_URL=http://localhost:3001/cv npm run cv:pdf
 */

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const url = process.env.CV_URL || "http://localhost:3000/cv";
const out = resolve(process.cwd(), "public/Curriculo_David_Pinho.pdf");

/** Chrome do sistema: evita depender de `playwright install`. */
const LAUNCH = [{ channel: "chrome" }, { channel: "msedge" }, {}];

async function launch() {
  let lastError;
  for (const opts of LAUNCH) {
    try {
      return await chromium.launch(opts);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

/** A4 a 96dpi. Sem isso o layout acontece em 1280px e o PDF corta o excesso. */
const A4 = { width: 794, height: 1123 };

const browser = await launch();

try {
  const page = await browser.newPage({ viewport: A4 });

  const response = await page.goto(url, {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  if (!response || !response.ok()) {
    throw new Error(
      `${url} respondeu ${response ? response.status() : "sem resposta"}. O servidor está rodando?`,
    );
  }

  // Sem isso o Chrome headless ignora o CSS de impressão e sai tudo escuro.
  await page.emulateMedia({ media: "print" });
  await page.waitForLoadState("networkidle");

  await mkdir(dirname(out), { recursive: true });

  // Margem vem só do @page no CSS: uma fonte de verdade para o layout impresso.
  await page.pdf({
    path: out,
    printBackground: true,
    preferCSSPageSize: true,
  });

  console.log(`PDF gerado: ${out}`);

  // Prova visual opcional: CV_PREVIEW=/caminho/preview.png npm run cv:pdf
  if (process.env.CV_PREVIEW) {
    const preview = resolve(process.env.CV_PREVIEW);
    await mkdir(dirname(preview), { recursive: true });
    await page.screenshot({ path: preview, fullPage: true });
    console.log(`Preview: ${preview}`);
  }
} finally {
  await browser.close();
}
