/** URL pública do site — defina VITE_SITE_URL no deploy (ex.: https://seudominio.com) */
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "";

export const SITE = {
  title: "David Pinho | Gestor de Tráfego Pago, Meta Ads e Sistemas com IA",
  description:
    "David Pinho: Gestor de Tráfego Pago em Meta Ads e desenvolvedor de sistemas com IA. R$7M+ em mídia, 630 mil+ leads. Automações UTM→CRM e integrações para inside sales.",
  ogImage: "/david.png",
  locale: "pt_BR",
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const origin = SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  return origin ? `${origin}${path.startsWith("/") ? path : `/${path}`}` : path;
}
