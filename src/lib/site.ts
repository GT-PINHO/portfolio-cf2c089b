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
  title: "David Pinho | Meta Ads Specialist · Growth Ops, Tracking, CRM & AI",
  shortTitle: "David Pinho | Meta Ads Specialist · Growth Ops",
  description:
    "David Pinho, Meta Ads Specialist com foco em Growth Ops. R$7M+ em mídia gerenciada, 630 mil+ leads. Tracking server-side, CRM e IA. Americana, SP. Aberto a vagas remotas.",
  ogImage: "/david.png",
  locale: "pt_BR",
  themeColor: "#0f0f0f",
  keywords: [
    "Meta Ads",
    "Growth Ops",
    "tráfego pago",
    "tracking server-side",
    "GTM",
    "CAPI",
    "CRM",
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
