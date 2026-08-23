/**
 * Fonte única do conteúdo do QR do WhatsApp.
 *
 * Lê src/lib/contact.ts como texto para não precisar de loader de TS: o
 * gerador e o verificador leem exatamente o mesmo lugar que o site usa, então
 * as constantes não existem copiadas em nenhum outro arquivo.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/** Extrai o literal de string de `export const NOME = "..."` sem regex. */
function constString(src, name) {
  const at = src.indexOf(`${name} =`);
  if (at === -1) throw new Error(`não achei ${name} em src/lib/contact.ts`);
  const abre = src.indexOf('"', at);
  const fecha = src.indexOf('"', abre + 1);
  if (abre === -1 || fecha === -1) {
    throw new Error(`${name} não é um literal de string simples`);
  }
  return src.slice(abre + 1, fecha);
}

export function qrPayload() {
  const src = readFileSync(resolve(process.cwd(), "src/lib/contact.ts"), "utf8");
  const numero = constString(src, "WHATSAPP_NUMBER");
  const mensagem = constString(src, "WHATSAPP_MESSAGE");
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
