"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PROFILE } from "../lib/content";
import { CV_FILENAME, CV_URL } from "../lib/cv";

const LINKS = [
  { href: "#casos", label: "Casos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#operacao", label: "Operação" },
] as const;

const SECTION_IDS = [...LINKS.map((l) => l.href.slice(1)), "contato"];
const LAST_ID = SECTION_IDS[SECTION_IDS.length - 1];

const HEADER_OFFSET = 104;
const PIN_MS = 1200;

function maxScrollY(): number {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function isNearPageBottom(px = 140): boolean {
  return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - px;
}

function getActiveSection(): string | null {
  if (window.scrollY < 72) return null;
  if (isNearPageBottom()) return LAST_ID;

  let current: string | null = null;
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

function heroPastThreshold(): boolean {
  const hero = document.getElementById("top");
  if (!hero) return window.scrollY > window.innerHeight * 0.7;
  return window.scrollY > hero.offsetHeight * 0.85;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [focused, setFocused] = useState(false);

  const pinnedIdRef = useRef<string | null>(null);
  const unlockTimerRef = useRef<number | null>(null);
  const close = () => setOpen(false);

  /** Compacto visual; focus-within / teclado restaura links. */
  const compact = pastHero && !focused && !open;

  const clearPinTimer = () => {
    if (unlockTimerRef.current !== null) {
      window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = null;
    }
  };

  const pinActive = useCallback((id: string | null, holdMs = PIN_MS) => {
    pinnedIdRef.current = id;
    setActive(id);
    clearPinTimer();
    unlockTimerRef.current = window.setTimeout(() => {
      pinnedIdRef.current = null;
      unlockTimerRef.current = null;
      setActive(getActiveSection());
    }, holdMs);
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(heroPastThreshold());
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

  useEffect(() => () => clearPinTimer(), []);

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
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-gutter pt-3 sm:pt-4">
        <nav
          aria-label="Navegação principal"
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setFocused(false);
            }
          }}
          className="nav-pill pointer-events-auto flex items-center gap-3 rounded-full border border-surface-line bg-surface/80 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:gap-4 sm:px-5"
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              close();
              pinActive(null);
              window.history.pushState(null, "", "#top");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="touch-hit shrink-0 font-display text-base font-extrabold tracking-tight text-ink transition-colors hover:text-accent sm:text-lg"
          >
            {PROFILE.name}
          </a>

          <div
            className={`hidden min-w-0 items-center gap-4 lg:flex ${
              compact ? "sr-only" : ""
            }`}
          >
            {LINKS.map((l) => {
              const sectionId = l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(l.href, e)}
                  aria-current={active === sectionId ? "location" : undefined}
                  className={`relative py-1 text-sm transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                    active === sectionId ? "text-ink" : "text-muted"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href={CV_URL}
              download={CV_FILENAME}
              className="text-sm text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              CV
            </a>
          </div>

          <div
            className={`hidden items-center gap-2 lg:flex ${compact ? "" : "hidden"}`}
            aria-hidden={!compact}
          >
            {compact ? (
              <>
                <span className="status-pulse h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="max-w-[34ch] truncate text-sm text-ink">
                  {PROFILE.availability}
                </span>
              </>
            ) : null}
          </div>

          <a
            href="#contato"
            onClick={(e) => handleNavClick("#contato", e)}
            aria-current={active === "contato" ? "location" : undefined}
            className="btn-tactile ml-auto shrink-0 rounded-full bg-accent px-3.5 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:px-4"
          >
            Conversar
          </a>

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
        </nav>
      </header>

      {mounted &&
        open &&
        createPortal(
          <>
            <button
              type="button"
              aria-label="Fechar menu"
              className="fixed inset-0 z-[60] bg-black/60 lg:hidden"
              onClick={close}
            />
            <div
              id="menu-mobile"
              className="fixed inset-x-0 top-0 z-[70] border-b border-surface-line bg-surface pt-header lg:hidden"
            >
              <div className="page-container flex flex-col gap-1 py-5">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleNavClick(l.href, e)}
                    aria-current={active === l.href.slice(1) ? "location" : undefined}
                    className={`rounded-lg px-3 py-3 text-base transition-colors hover:bg-surface-raised hover:text-ink ${
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
                  className="rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-surface-raised hover:text-ink"
                >
                  CV
                </a>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick("#contato", e)}
                  aria-current={active === "contato" ? "location" : undefined}
                  className="btn-tactile mt-2 rounded-full bg-accent px-5 py-3 text-center text-base font-semibold text-white"
                >
                  Conversar
                </a>
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}
