import { useEffect } from "react";
import { CONTACT } from "../lib/content";
import { SITE, absoluteUrl } from "../lib/site";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function SeoHead() {
  useEffect(() => {
    const ogImage = absoluteUrl(SITE.ogImage);
    const canonical = absoluteUrl("/");

    upsertMeta("property", "og:title", SITE.title);
    upsertMeta("property", "og:description", SITE.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", SITE.locale);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:alt", "David Pinho — Gestor de Tráfego Pago e Sistemas com IA");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", SITE.title);
    upsertMeta("name", "twitter:description", SITE.description);
    upsertMeta("name", "twitter:image", ogImage);

    if (canonical.startsWith("http")) {
      upsertMeta("property", "og:url", canonical);
      upsertLink("canonical", canonical);
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "David Pinho",
      jobTitle: "Gestor de Tráfego Pago e Desenvolvedor de Sistemas com IA",
      description: SITE.description,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Americana",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      sameAs: [CONTACT.linkedin, CONTACT.github, CONTACT.instagram],
      image: ogImage.startsWith("http") ? ogImage : undefined,
    };

    let script = document.getElementById("json-ld-person") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "json-ld-person";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return null;
}
