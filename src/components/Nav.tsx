"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROFILE } from "../lib/content";
import Container from "./ui/Container";

const LINKS = [
  { href: "#casos", label: "Casos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#operacao", label: "Operação" },
] as const;

const SECTION_IDS = [...LINKS.map((l) => l.href.slice(1)), "contato"];
const LAST_ID = SECTION_IDS[SECTION_IDS.length - 1];

/** Alinhado a --anchor-offset: nav + folga para o card não colar no header */
const HEADER_OFFSET = 104;
const PIN_MS = 1200;

function maxScrollY(): number {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function isNearPageBottom(px = 140): boolean {
  return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - px;
}

function getActiveSection(): string {
  if (isNearPageBottom()) return LAST_ID;

  let current = SECTION_IDS[0];
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= HEADER_OFFSET + 12) {
      current = id;
    }
  }
  return current;
}

function getSectionTargetY(id: string): number {
  const el = document.getElementById(id);
  if (!el) return 0;

  const absoluteTop = window.scrollY + el.getBoundingClientRect().top;
  let target = Math.max(0, absoluteTop - HEADER_OFFSET);

  if (id === LAST_ID) {
    target = Math.min(target, maxScrollY());
    if (absoluteTop - HEADER_OFFSET > maxScrollY()) {
      target = maxScrollY();
    }
  }

  return target;
}

function scrollToSection(id: string) {
  window.scrollTo({ top: getSectionTargetY(id), behavior: "smooth" });
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(SECTION_IDS[0]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const pinnedIdRef = useRef<string | null>(null);
  const unlockTimerRef = useRef<number | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const clearPinTimer = () => {
    if (unlockTimerRef.current !== null) {
      window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = null;
    }
  };

  const pinActive = useCallback((id: string, holdMs = PIN_MS) => {
    pinnedIdRef.current = id;
    setActive(id);
    clearPinTimer();
    unlockTimerRef.current = window.setTimeout(() => {
      pinnedIdRef.current = null;
      unlockTimerRef.current = null;
      setActive(getActiveSection());
    }, holdMs);
  }, []);

  const syncIndicator = useCallback(() => {
    const root = desktopNavRef.current;
    if (!root) return;
    const link = root.querySelector<HTMLElement>(`[data-nav-id="${active}"]`);
    if (!link) {
      setIndicator((prev) => ({ ...prev, ready: false }));
      return;
    }
    setIndicator({
      left: link.offsetLeft,
      width: link.offsetWidth,
      ready: true,
    });
  }, [active]);

  useLayoutEffect(() => {
    syncIndicator();
  }, [syncIndicator]);

  useEffect(() => {
    window.addEventListener("resize", syncIndicator);
    return () => window.removeEventListener("resize", syncIndicator);
  }, [syncIndicator]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      // Enquanto o clique segura o item, o scroll spy não mexe no ativo
      if (pinnedIdRef.current !== null) {
        setActive(pinnedIdRef.current);
        return;
      }
      setActive(getActiveSection());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => clearPinTimer();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.slice(1);
    const wasOpen = open;
    const delay = wasOpen ? 280 : 0;

    pinActive(id, delay + PIN_MS);
    close();
    window.history.pushState(null, "", href);

    window.setTimeout(() => {
      scrollToSection(id);
    }, delay);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-surface-line bg-surface/95 backdrop-blur-xl"
          : "border-b border-transparent bg-surface/60 backdrop-blur-md"
      }`}
    >
      <Container
        as="nav"
        ariaLabel="Navegação principal"
        className="flex h-header items-center justify-between"
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            close();
            pinActive(SECTION_IDS[0]);
            window.history.pushState(null, "", "#top");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-lg font-extrabold tracking-tight text-ink transition-colors hover:text-accent"
        >
          {PROFILE.name}
        </a>

        <div ref={desktopNavRef} className="relative hidden items-center gap-5 lg:flex">
          {LINKS.map((l) => {
            const sectionId = l.href.slice(1);
            const isActive = active === sectionId;
            return (
              <a
                key={l.href}
                href={l.href}
                data-nav-id={sectionId}
                onClick={(e) => handleNavClick(l.href, e)}
                aria-current={isActive ? "location" : undefined}
                className="relative py-1 text-[13px] transition-colors duration-200 hover:text-ink"
                style={{ color: isActive ? "var(--ink)" : "var(--muted)" }}
              >
                {l.label}
              </a>
            );
          })}

          <motion.span
            aria-hidden
            className="pointer-events-none absolute -bottom-0.5 h-px bg-accent"
            initial={false}
            animate={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.ready ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.6 }}
          />

          <a
            href="/Curriculo_David_Pinho.pdf"
            download
            className="text-[13px] text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            CV
          </a>

          <a
            href="#contato"
            onClick={(e) => handleNavClick("#contato", e)}
            aria-current={active === "contato" ? "location" : undefined}
            className="rounded-full px-4 py-2 text-[13px] font-semibold text-white transition-[opacity,box-shadow] hover:opacity-90 aria-[current=location]:shadow-[0_0_0_2px_rgba(245,245,245,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            style={{ background: "var(--accent)" }}
          >
            Conversar
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-surface-line bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <div className="page-container flex flex-col gap-1 py-5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(l.href, e)}
                  aria-current={active === l.href.slice(1) ? "location" : undefined}
                  className={`rounded-lg px-3 py-3 text-[15px] transition-colors hover:bg-surface-raised hover:text-ink ${
                    active === l.href.slice(1) ? "text-ink" : "text-muted"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={(e) => handleNavClick("#contato", e)}
                aria-current={active === "contato" ? "location" : undefined}
                className="mt-2 rounded-full px-5 py-3 text-center text-[15px] font-semibold text-white"
                style={{ background: "var(--accent)" }}
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
