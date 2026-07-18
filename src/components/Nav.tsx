import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROFILE } from "../lib/content";
import Container from "./ui/Container";

const LINKS = [
  { href: "#fazendo", label: "O que faço" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#casos", label: "Casos" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
] as const;

const SECTION_IDS = LINKS.map((l) => l.href.slice(1));
const LAST_ID = SECTION_IDS[SECTION_IDS.length - 1];

/** Alinhado a --anchor-offset: nav + folga para o card não colar no header */
const HEADER_OFFSET = 104;

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

/** Posiciona a seção logo abaixo da nav, com folga — igual ao print */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const absoluteTop = window.scrollY + el.getBoundingClientRect().top;
  let target = Math.max(0, absoluteTop - HEADER_OFFSET);

  // Contato: garante enquadramento completo (sobe o máximo necessário)
  if (id === LAST_ID) {
    target = Math.min(target, maxScrollY());
    // Se ainda não cabe, vai ao fim da página (card inteiro visível)
    if (absoluteTop - HEADER_OFFSET > maxScrollY()) {
      target = maxScrollY();
    }
  }

  window.scrollTo({ top: target, behavior: "smooth" });
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  /** Item clicado fica fixo até o usuário rolar de verdade */
  const pinnedIdRef = useRef<string | null>(null);
  const pinScrollYRef = useRef<number | null>(null);
  const unlockTimerRef = useRef<number | null>(null);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const pinned = pinnedIdRef.current;
      if (pinned !== null && pinScrollYRef.current !== null) {
        // Ainda na animação / quase parado no destino: mantém Contato (etc.)
        if (Math.abs(window.scrollY - pinScrollYRef.current) < 80) {
          setActive(pinned);
          return;
        }
        // Usuário rolou longe do destino: libera o pin
        pinnedIdRef.current = null;
        pinScrollYRef.current = null;
      }

      setActive(getActiveSection());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (unlockTimerRef.current !== null) window.clearTimeout(unlockTimerRef.current);
    };
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.slice(1);

    pinnedIdRef.current = id;
    setActive(id);
    close();
    window.history.pushState(null, "", href);

    requestAnimationFrame(() => {
      scrollToSection(id);
      // Marca a posição alvo após o browser iniciar o scroll
      window.setTimeout(() => {
        pinScrollYRef.current = window.scrollY;
        setActive(id);
      }, 80);
    });

    if (unlockTimerRef.current !== null) window.clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = window.setTimeout(() => {
      pinScrollYRef.current = window.scrollY;
      setActive(id);
      // Mantém pin no item clicado; só sai se o usuário rolar depois
    }, 900);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-surface-line bg-surface/95 backdrop-blur-xl"
          : "border-b border-transparent bg-surface/60 backdrop-blur-md"
      }`}
    >
      <Container as="nav" className="flex h-header items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            close();
            pinnedIdRef.current = SECTION_IDS[0];
            setActive(SECTION_IDS[0]);
            window.history.pushState(null, "", "#top");
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.setTimeout(() => {
              pinScrollYRef.current = 0;
            }, 100);
          }}
          className="font-display text-lg font-extrabold tracking-tight text-ink"
        >
          {PROFILE.name}
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {LINKS.map((l) => {
            const sectionId = l.href.slice(1);
            const isActive = active === sectionId;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(l.href, e)}
                className="relative py-1 text-[13px] outline-none transition-colors duration-200"
                style={{ color: isActive ? "var(--ink)" : "var(--muted)" }}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
              </a>
            );
          })}

          <a
            href="#contato"
            onClick={(e) => handleNavClick("#contato", e)}
            className="rounded-full px-4 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            Conversar
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-1.5 lg:hidden"
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
                  className={`rounded-lg px-3 py-3 text-[15px] outline-none transition-colors hover:bg-surface-raised hover:text-ink ${
                    active === l.href.slice(1) ? "text-ink" : "text-muted"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={(e) => handleNavClick("#contato", e)}
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
