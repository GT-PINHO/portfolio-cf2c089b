/**
 * Gera public/qr-whatsapp.png a partir das constantes de src/lib/contact.ts.
 *
 * Antes o QR era montado em runtime por api.qrserver.com: toda visita batia
 * num terceiro, o código quebrava se o serviço caísse e o <img> externo não
 * passava pelo otimizador do Next. Agora é asset local.
 *
 * IMPORTANTE: mudou WHATSAPP_NUMBER ou WHATSAPP_MESSAGE, roda de novo:
 *   npm run qr:build
 *
 * O teste em scripts/check-qr.mjs falha o build se o asset ficar defasado.
 */
import { writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { qrPayload } from "./qr-payload.mjs";

const out = resolve(process.cwd(), "public/qr-whatsapp.png");
const api = `https://api.qrserver.com/v1/create-qr-code/?size=480x480&margin=6&data=${encodeURIComponent(qrPayload())}`;

const res = await fetch(api);
if (!res.ok) throw new Error(`qrserver respondeu ${res.status}`);
const buf = Buffer.from(await res.arrayBuffer());
if (buf.length < 500) throw new Error("resposta pequena demais para ser um QR");

await mkdir(dirname(out), { recursive: true });
await writeFile(out, buf);
console.log(`QR gerado: ${out} (${buf.length} bytes)`);
console.log(`payload: ${qrPayload()}`);
