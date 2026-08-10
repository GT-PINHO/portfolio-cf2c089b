import type { Metadata } from "next";
import CvDocument from "@/components/cv/CvDocument";
import { PROFILE } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Currículo · ${PROFILE.fullName}`,
  description: `Currículo de ${PROFILE.name}: ${PROFILE.role} e ${PROFILE.specialty}. Mais de 3 anos em operação nacional de Meta Ads, tracking server-side e sistemas MarTech.`,
  alternates: SITE_URL ? { canonical: `${SITE_URL}/cv` } : undefined,
  robots: { index: true, follow: true },
};

export default function CvPage() {
  return <CvDocument />;
}
