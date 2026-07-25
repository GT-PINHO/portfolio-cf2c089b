import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { CONTACT, PROFILE } from "@/lib/content";
import { SITE, SITE_URL, absoluteUrl } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const canonical = SITE_URL ? `${SITE_URL}/` : undefined;
const ogImage = absoluteUrl(SITE.ogImage);

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: SITE.title,
  description: SITE.description,
  authors: [{ name: PROFILE.fullName }],
  keywords: [...SITE.keywords],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: PROFILE.name,
    title: SITE.shortTitle,
    description: SITE.description,
    url: canonical,
    images: [
      {
        url: SITE.ogImage,
        alt: SITE.shortTitle,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.shortTitle,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: "device-width",
  initialScale: 1,
};

function JsonLd() {
  const origin = SITE_URL || "";
  const pageUrl = origin ? `${origin}/` : "/";
  const personId = `${pageUrl}#person`;
  const image = ogImage.startsWith("http") ? ogImage : undefined;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${pageUrl}#website`,
        url: pageUrl,
        name: SITE.shortTitle,
        description: SITE.description,
        inLanguage: "pt-BR",
        publisher: { "@id": personId },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: SITE.title,
        isPartOf: { "@id": `${pageUrl}#website` },
        about: { "@id": personId },
        description: SITE.description,
        inLanguage: "pt-BR",
      },
      {
        "@type": "Person",
        "@id": personId,
        name: PROFILE.fullName,
        alternateName: PROFILE.name,
        url: pageUrl,
        jobTitle: "Gestor de Tráfego Pago",
        description: SITE.description,
        email: CONTACT.email,
        telephone: `+${CONTACT.whatsapp}`,
        image,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Americana",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        sameAs: [CONTACT.linkedin, CONTACT.github, CONTACT.instagram].filter(Boolean),
        knowsAbout: [
          "Meta Ads",
          "Tráfego pago",
          "Growth Operations",
          "MarTech",
          "Server-side tracking",
          "GTM",
          "CAPI",
          "HubSpot API",
          "CRM integrations",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
