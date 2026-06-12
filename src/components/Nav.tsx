import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CV_FILENAME, CV_URL } from "../lib/cv";

const LINKS = [
  { href: "#servicos", label: "O que faço" },
  { href: "#cases",    label: "Resultados" },
  { href: "#stack",    label: "Stack" },
  { href: "#sobre",    label: "Sobre" },
];

const SECTION_IDS = LINKS.map((l) => l.href.slice(1));

export default function Nav() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState<string>("");
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detecta a secção activa
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-surface-line bg-surface/80 backdrop-blur-xl"
          : "border-b border-transparent bg-surface/40 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          onClick={close}
          className="font-display text-xl font-extrabold tracking-tight text-ink"
        >
          David Pinho
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 text-[14px] transition-colors duration-200"
                style={{ color: isActive ? "var(--ink)" : "var(--muted)" }}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <a
            href={CV_URL}
            download={CV_FILENAME}
            className="rounded-full px-4 py-2 text-[13.5px] font-medium text-white transition-all hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.3)" }}
          >
            Baixar CV
          </a>
          <a
            href="#contato"
            className="rounded-full px-5 py-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-85"
            style={{ background: "#06b6d4" }}
          >
            Conversar
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-surface-line bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="rounded-lg px-3 py-3 text-[15px] text-muted transition-colors hover:bg-surface-raised hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CV_URL}
                download={CV_FILENAME}
                onClick={close}
                className="rounded-lg px-3 py-3 text-[15px] text-muted transition-colors hover:bg-surface-raised hover:text-ink"
              >
                Baixar CV
              </a>
              <a
                href="#contato"
                onClick={close}
                className="mt-2 rounded-full px-5 py-3 text-center text-[15px] font-semibold text-white"
                style={{ background: "#06b6d4" }}
              >
                Conversar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
