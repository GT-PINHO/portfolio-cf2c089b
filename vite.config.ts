import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

function seoFilesPlugin(siteUrl: string): Plugin {
  const origin = siteUrl.replace(/\/$/, "");

  const writeSeoFiles = (outDir: string) => {
    const loc = origin ? `${origin}/` : "/";
    const sitemapUrl = origin ? `${origin}/sitemap.xml` : "/sitemap.xml";

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

    const robots = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

    writeFileSync(resolve(outDir, "sitemap.xml"), sitemap, "utf8");
    writeFileSync(resolve(outDir, "robots.txt"), robots, "utf8");
  };

  return {
    name: "seo-files",
    transformIndexHtml(html) {
      const ogImage = origin ? `${origin}/david.png` : "/david.png";
      let next = html.replaceAll("__OG_IMAGE__", ogImage);

      if (origin) {
        next = next.replaceAll("__CANONICAL__", `${origin}/`);
      } else {
        next = next
          .replace(/<!--seo-canonical-->[\s\S]*?<!--\/seo-canonical-->\n?/g, "")
          .replace(/<!--seo-og-url-->[\s\S]*?<!--\/seo-og-url-->\n?/g, "");
      }
      return next;
    },
    writeBundle() {
      writeSeoFiles(resolve(process.cwd(), "dist"));
      writeSeoFiles(resolve(process.cwd(), "public"));
    },
    buildStart() {
      writeSeoFiles(resolve(process.cwd(), "public"));
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "").replace(/\/$/, "");

  return {
    plugins: [react(), seoFilesPlugin(siteUrl)],
  };
});
