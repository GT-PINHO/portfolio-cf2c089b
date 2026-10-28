import { chromium } from "playwright";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const url = process.env.CV_URL || "http://localhost:3000/cv";
const output = resolve(process.cwd(), "public/Curriculo_DavidPinho.pdf");
const privateDir = resolve(process.cwd(), "curriculo-privado");
const privateAddressFile = resolve(privateDir, "endereco.txt");
const privateOutput = resolve(privateDir, "Curriculo_DavidPinho.pdf");
const launchOptions = [{ channel: "chrome" }, { channel: "msedge" }, {}];
const pdfOptions = {
  printBackground: true,
  preferCSSPageSize: true,
};

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
  await page.pdf({ ...pdfOptions, path: output });
  console.log(`PDF público gerado: ${output}`);

  // O endereço completo só entra no PDF de candidatura, que fica fora do Git e do site.
  if (existsSync(privateAddressFile)) {
    const address = readFileSync(privateAddressFile, "utf8").trim();
    const replaced = await page.evaluate((fullAddress) => {
      const element = document.querySelector(".cv-address");
      if (!element) return false;
      element.textContent = fullAddress;
      return true;
    }, address);

    if (!replaced) {
      throw new Error("Elemento .cv-address não encontrado na rota /cv");
    }

    await page.pdf({ ...pdfOptions, path: privateOutput });
    console.log(`PDF de candidatura gerado: ${privateOutput}`);
  }
} finally {
  await browser.close();
}
