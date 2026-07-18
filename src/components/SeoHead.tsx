import { useEffect } from "react";
import { CONTACT, PROFILE } from "../lib/content";
import { SITE, SITE_URL, absoluteUrl } from "../lib/site";

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
    document.title = SITE.title;

    const origin = SITE_URL || window.location.origin;
    const ogImage = absoluteUrl(SITE.ogImage);
    const canonical = `${origin.replace(/\/$/, "")}/`;

    upsertMeta("name", "description", SITE.description);
    upsertMeta("name", "author", PROFILE.fullName);
    upsertMeta("name", "keywords", SITE.keywords.join(", "));
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("name", "googlebot", "index, follow");
    upsertMeta("name", "theme-color", SITE.themeColor);

    upsertMeta("property", "og:site_name", PROFILE.name);
    upsertMeta("property", "og:title", SITE.shortTitle);
    upsertMeta("property", "og:description", SITE.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", SITE.locale);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:alt", SITE.shortTitle);
    upsertMeta("property", "og:image:type", "image/png");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", SITE.shortTitle);
    upsertMeta("name", "twitter:description", SITE.description);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:image:alt", SITE.shortTitle);

    upsertLink("canonical", canonical);

    const personId = `${canonical}#person`;
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${canonical}#website`,
          url: canonical,
          name: SITE.shortTitle,
          description: SITE.description,
          inLanguage: "pt-BR",
          publisher: { "@id": personId },
        },
        {
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          url: canonical,
          name: SITE.title,
          isPartOf: { "@id": `${canonical}#website` },
          about: { "@id": personId },
          description: SITE.description,
          inLanguage: "pt-BR",
        },
        {
          "@type": "Person",
          "@id": personId,
          name: PROFILE.fullName,
          alternateName: PROFILE.name,
          url: canonical,
          jobTitle: "Meta Ads Specialist",
          description: SITE.description,
          email: CONTACT.email,
          telephone: `+${CONTACT.whatsapp}`,
          image: ogImage.startsWith("http") ? ogImage : undefined,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Americana",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          sameAs: [CONTACT.linkedin, CONTACT.github, CONTACT.instagram].filter(Boolean),
          knowsAbout: [
            "Meta Ads",
            "Growth Operations",
            "Server-side tracking",
            "GTM",
            "CAPI",
            "CRM integrations",
            "AI systems",
          ],
        },
      ],
    };

    let script = document.getElementById("json-ld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "json-ld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return null;
}
