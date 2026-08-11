import { chromium } from "playwright";

const b = await chromium.launch({ channel: "chrome" });
const p = await b.newPage({ viewport: { width: 794, height: 1123 } });
await p.goto(process.env.CV_URL || "http://localhost:3000/cv", {
  waitUntil: "networkidle",
});
await p.emulateMedia({ media: "print" });

const r = await p.evaluate(() => {
  const g = (sel) => {
    const el = sel === "html" ? document.documentElement : document.querySelector(sel);
    if (!el) return null;
    const c = getComputedStyle(el);
    const box = el.getBoundingClientRect();
    return {
      bg: c.backgroundColor,
      colorScheme: c.colorScheme,
      w: Math.round(box.width),
      h: Math.round(box.height),
    };
  };
  return {
    html: g("html"),
    body: g("body"),
    cvPage: g(".cv-page"),
    cvDoc: g(".cv-doc"),
    scrollW: document.documentElement.scrollWidth,
  };
});

console.log(JSON.stringify(r, null, 2));
await b.close();
