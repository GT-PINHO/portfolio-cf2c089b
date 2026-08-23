/** Registra o payload usado na última geração do QR. Roda depois de build-qr. */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { qrPayload } from "./qr-payload.mjs";

const out = resolve(process.cwd(), "scripts/qr-whatsapp.lock.json");
const data = {
  _: "Gerado por `npm run qr:build`. Não editar à mão. Ver scripts/check-qr.mjs.",
  payload: qrPayload(),
};

writeFileSync(out, JSON.stringify(data, null, 2) + "\n");
console.log(`lock atualizado: ${out}`);
