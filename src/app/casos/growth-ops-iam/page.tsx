import type { Metadata } from "next";
import CaseGrowthOpsPage from "@/components/case-growth-ops/CaseGrowthOpsPage";
import { GROWTH_OPS_CASE } from "@/lib/case-growth-ops";
import { SITE, SITE_URL, absoluteUrl } from "@/lib/site";

const path = GROWTH_OPS_CASE.path;
const pageUrl = SITE_URL ? `${SITE_URL}${path}` : path;

export const metadata: Metadata = {
  title: `${GROWTH_OPS_CASE.kicker} | David Pinho`,
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
        url: absoluteUrl(SITE.ogImage),
        alt: GROWTH_OPS_CASE.kicker,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: GROWTH_OPS_CASE.title,
    description: GROWTH_OPS_CASE.subtitle,
    images: [absoluteUrl(SITE.ogImage)],
  },
};

export default function GrowthOpsIamCasePage() {
  return <CaseGrowthOpsPage />;
}
