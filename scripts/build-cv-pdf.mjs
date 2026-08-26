import { chromium } from "playwright";
import { resolve } from "node:path";

const url = process.env.CV_URL || "http://localhost:3000/cv";
const output = resolve(process.cwd(), "public/Curriculo_DavidPinho.pdf");
const launchOptions = [{ channel: "chrome" }, { channel: "msedge" }, {}];

async function launchBrowser() {
  let lastError;

  for (const options of launchOptions) {
    try {
      return await chromium.launch(options);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

const browser = await launchBrowser();

try {
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  const response = await page.goto(url, {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  if (!response?.ok()) {
    throw new Error(`${url} respondeu ${response?.status() ?? "sem resposta"}`);
  }

  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: output,
    printBackground: true,
    preferCSSPageSize: true,
  });

  console.log(`PDF gerado: ${output}`);
} finally {
  await browser.close();
}
