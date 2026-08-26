import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-davidpinho.vercel.app";
const siteTitle = "David Pinho | Gestor de Tráfego Pago e MarTech";
const siteDescription =
  "Gestor de Tráfego Pago e MarTech com experiência em educação, Meta Ads, tracking server-side, automação e Growth Ops.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "David Pinho",
    "gestor de tráfego pago",
    "Meta Ads",
    "MarTech",
    "Growth Ops",
    "inteligência emocional",
    "educação empresarial",
    "tracking server-side",
    "automação de marketing",
  ],
  authors: [{ name: "David Pinho" }],
  creator: "David Pinho",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "David Pinho",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon-dp.svg",
    shortcut: "/favicon-dp.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
