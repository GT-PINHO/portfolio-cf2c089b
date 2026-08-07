"use client";

import { useEffect, useState } from "react";

const TOC = [
  { id: "cenario", label: "Cenário" },
  { id: "desafio", label: "Desafio" },
  { id: "solucao", label: "Solução" },
  { id: "fluxo", label: "Fluxo" },
  { id: "dashboard", label: "Dashboard" },
  { id: "resultados", label: "Resultados" },
] as const;

/** Índice sticky + barra de progresso de leitura (desktop). */
export default function CaseReadingNav() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, (window.scrollY / max) * 100));

      let current: string | null = null;
      for (const item of TOC) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[45] h-0.5 bg-surface-line"
        aria-hidden
      >
        <div
          className="h-full bg-accent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        aria-label="Índice do estudo de caso"
        className="sticky top-16 z-30 -mx-gutter mb-8 hidden border-y border-surface-line bg-surface/95 px-gutter py-3 backdrop-blur-md lg:block"
      >
        <ul className="mx-auto flex max-w-page flex-wrap gap-x-5 gap-y-2 text-sm">
          {TOC.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                  active === item.id ? "font-semibold text-ink" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
