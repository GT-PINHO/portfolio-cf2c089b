/**
 * Guarda contra QR defasado. Roda no `prebuild`.
 *
 * public/qr-whatsapp.png é um asset gerado: se WHATSAPP_NUMBER ou
 * WHATSAPP_MESSAGE mudarem em src/lib/contact.ts, o PNG continua apontando
 * para o conteúdo antigo e ninguém percebe: o QR só falha na mão de quem
 * escaneia. Este check quebra o build antes disso.
 *
 * Offline: compara o payload atual com o registrado no lock, sem rede.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { qrPayload } from "./qr-payload.mjs";

const lockPath = resolve(process.cwd(), "scripts/qr-whatsapp.lock.json");
const pngPath = resolve(process.cwd(), "public/qr-whatsapp.png");

function falhar(motivo) {
  console.error(`\n✖ QR do WhatsApp desatualizado: ${motivo}`);
  console.error("  Rode `npm run qr:build` e commite public/qr-whatsapp.png.\n");
  process.exit(1);
}

if (!existsSync(pngPath)) falhar("public/qr-whatsapp.png não existe");
if (!existsSync(lockPath)) falhar("scripts/qr-whatsapp.lock.json não existe");

const lock = JSON.parse(readFileSync(lockPath, "utf8"));
const atual = qrPayload();

if (lock.payload !== atual) {
  console.error(`\n  no lock:  ${lock.payload}`);
  console.error(`  em contact.ts: ${atual}`);
  falhar("o conteúdo de contact.ts mudou desde a última geração");
}

console.log("✓ QR do WhatsApp confere com src/lib/contact.ts");
