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
  title: "David Pinho | Gestor de Tráfego Pago · Meta Ads e automações com IA",
  shortTitle: "David Pinho | Tráfego Pago e Automações com IA",
  description:
    "Gestor de Tráfego Pago com 3+ anos em operação nacional de Meta Ads e desenvolvedor de automações e sistemas com IA (NestJS, Supabase, HubSpot API). R$ 68 a 98 mil por semana em verba gerida, 20 a 30 mil leads/mês no pipeline. Disponível para início imediato, remoto, CLT ou PJ.",
  ogImage: "/opengraph-image",
  locale: "pt_BR",
  themeColor: "#0f0f0f",
  keywords: [
    "Gestor de Tráfego",
    "tráfego pago",
    "Meta Ads",
    "automação com IA",
    "automações com IA",
    "desenvolvedor de automações",
    "integração HubSpot",
    "automação de CRM",
    "Growth Ops",
    "MarTech",
    "NestJS",
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
