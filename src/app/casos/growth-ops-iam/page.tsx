import type { Metadata } from "next";
import CaseGrowthOpsPage from "@/components/case-growth-ops/CaseGrowthOpsPage";
import { GROWTH_OPS_CASE } from "@/lib/case-growth-ops";
import { SITE, SITE_URL, absoluteUrl } from "@/lib/site";

const path = GROWTH_OPS_CASE.path;
const pageUrl = SITE_URL ? `${SITE_URL}${path}` : path;

export const metadata: Metadata = {
  title: "30 mil leads/mês: pipeline reconstruído | David Pinho",
  description: GROWTH_OPS_CASE.subtitle,
  alternates: SITE_URL ? { canonical: pageUrl } : undefined,
  openGraph: {
    type: "article",
    locale: SITE.locale,
    siteName: "David Pinho",
    title: GROWTH_OPS_CASE.title,
    description: GROWTH_OPS_CASE.subtitle,
    url: pageUrl,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        alt: GROWTH_OPS_CASE.kicker,
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "30 mil leads/mês: pipeline reconstruído | David Pinho",
    description: GROWTH_OPS_CASE.subtitle,
    images: [absoluteUrl("/opengraph-image")],
  },
};

export default function GrowthOpsIamCasePage() {
  return <CaseGrowthOpsPage />;
}
