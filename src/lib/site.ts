/** URL pública do site. Defina NEXT_PUBLIC_SITE_URL no deploy (ex.: https://seudominio.com) */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;

  return "";
}

export const SITE_URL = resolveSiteUrl();

export const SITE = {
  title: "David Pinho | Gestor de Tráfego Pago · Meta Ads em escala nacional",
  shortTitle: "David Pinho | Gestor de Tráfego Pago",
  description:
    "Gestor de Tráfego Pago com R$ 68–98k/semana sob gestão em Meta Ads. Tracking, CRM e Growth Ops quando a escala pede. R$7M+ em mídia, 630 mil+ leads. Aberto a vagas remotas CLT/PJ.",
  ogImage: "/david.png",
  locale: "pt_BR",
  themeColor: "#0f0f0f",
  keywords: [
    "Gestor de Tráfego",
    "tráfego pago",
    "Meta Ads",
    "Growth Ops",
    "MarTech",
    "tracking server-side",
    "GTM",
    "CAPI",
    "vagas remotas",
    "David Pinho",
  ],
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const origin =
    SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  return origin ? `${origin}${path.startsWith("/") ? path : `/${path}`}` : path;
}
