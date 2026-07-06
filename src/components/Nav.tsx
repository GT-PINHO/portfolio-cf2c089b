import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CV_FILENAME, CV_URL } from "../lib/cv";

const LINKS = [
  { href: "#numeros",  label: "Resultados" },
  { href: "#servicos", label: "O que faço" },
  { href: "#stack",    label: "Stack" },
  { href: "#sobre",    label: "Sobre" },
] as const;

const NAV_SECTION_IDS = LINKS.map((l) => l.href.slice(1));

/** Ordem real no DOM — inclui #cases entre servicos e stack */
const PAGE_SECTION_IDS = ["numeros", "servicos", "cases", "stack", "sobre"];

const NAV_OFFSET = 96;

function getActiveSection(): string {
  const position = window.scrollY + NAV_OFFSET;
  let current = NAV_SECTION_IDS[0];

  for (const id of PAGE_SECTION_IDS) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= position && NAV_SECTION_IDS.includes(id)) {
      current = id;
    }
  }

  return current;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(NAV_SECTION_IDS[0]);
  const navLockRef = useRef(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const releaseLock = () => {
      navLockRef.current = false;
      setActive(getActiveSection());
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!navLockRef.current) setActive(getActiveSection());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", releaseLock);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", releaseLock);
    };
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.slice(1);
    navLockRef.current = true;
    setActive(id);
    close();

    window.history.pushState(null, "", href);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    window.setTimeout(releaseLockFallback, 900);

    function releaseLockFallback() {
      if (!navLockRef.current) return;
      navLockRef.current = false;
      setActive(getActiveSection());
    }
  };

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
            const sectionId = l.href.slice(1);
            const isActive = active === sectionId;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(l.href, e)}
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
            onClick={(e) => {
              navLockRef.current = true;
              setActive("");
              close();
              e.preventDefault();
              window.history.pushState(null, "", "#contato");
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
              window.setTimeout(() => {
                navLockRef.current = false;
                setActive(getActiveSection());
              }, 900);
            }}
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
                  onClick={(e) => handleNavClick(l.href, e)}
                  className={`rounded-lg px-3 py-3 text-[15px] transition-colors hover:bg-surface-raised hover:text-ink ${
                    active === l.href.slice(1) ? "text-ink" : "text-muted"
                  }`}
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
                onClick={(e) => {
                  navLockRef.current = true;
                  setActive("");
                  close();
                  e.preventDefault();
                  window.history.pushState(null, "", "#contato");
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                  window.setTimeout(() => {
                    navLockRef.current = false;
                    setActive(getActiveSection());
                  }, 900);
                }}
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
