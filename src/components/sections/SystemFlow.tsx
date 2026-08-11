"use client";

import { useEffect, useRef, useState } from "react";
import { RevealItem } from "../ui/Reveal";
import { SYSTEM_FLOW } from "../../lib/content";

/**
 * Diagrama do sistema: o caminho de um lead do anúncio até o comercial.
 * A frente responsável aparece em cada etapa, então a leitura em sequência
 * mostra as três se alternando dentro de uma cadeia só.
 *
 * No desktop o diagrama fica preso enquanto a página rola e as etapas acendem
 * uma a uma. É `position: sticky`, não sequestro de scroll: a página continua
 * respondendo à roda do usuário e nada é interceptado.
 *
 * Sem JS, no mobile ou com prefers-reduced-motion, todas as etapas já nascem
 * acesas e o bloco não reserva altura extra nenhuma.
 */

const { caption, steps, outcome, note } = SYSTEM_FLOW;
const NODES = [...steps, { ...outcome, id: "venda", track: null }];

/** Faixa útil do scroll: sobra no começo e no fim para o pin respirar. */
const START = 0.06;
const END = 0.78;

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

export default function SystemFlow() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);
  /** Muda uma vez por breakpoint, então pode viver no React. */
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const list = listRef.current;
    const rail = railRef.current;
    if (!wrap || !list || !rail) return;

    const canPin = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );

    let raf: number | null = null;
    let lastLit = -1;

    /**
     * Escrita direta no DOM. Passar isso por setState re-renderizaria a
     * árvore a cada frame de scroll, que é caro e derruba frames.
     */
    const paint = (lit: number, progress: number) => {
      rail.style.width = `${progress * 100}%`;
      if (lit === lastLit) return;
      lastLit = lit;

      const items = list.children;
      for (let i = 0; i < items.length; i++) {
        const el = items[i] as HTMLElement;
        if (!el.classList.contains("flow-node")) continue;
        const index = Number(el.dataset.index);
        if (index < lit) el.setAttribute("data-lit", "");
        else el.removeAttribute("data-lit");
      }
    };

    const measure = () => {
      raf = null;
      const rect = wrap.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) return;

      const raw = clamp(-rect.top / travel, 0, 1);
      const eased = clamp((raw - START) / (END - START), 0, 1);
      paint(Math.max(1, Math.ceil(eased * NODES.length)), eased);
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(measure);
    };

    const detach = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    };

    const apply = () => {
      if (canPin.matches) {
        setPinned(true);
        measure();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
      } else {
        detach();
        setPinned(false);
        lastLit = -1;
        paint(NODES.length, 1);
      }
    };

    apply();
    canPin.addEventListener("change", apply);

    return () => {
      canPin.removeEventListener("change", apply);
      detach();
    };
  }, []);

  return (
    <div ref={wrapRef} className={pinned ? "lg:h-[220vh]" : undefined}>
      <div className={pinned ? "lg:sticky lg:top-[6.5rem]" : undefined}>
        <figure className="m-0 border border-surface-line bg-surface-raised/25 p-6 sm:p-8">
          <figcaption className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            {caption}
          </figcaption>

          {/*
            Desktop: trilho horizontal.
            As duas listas coexistem no DOM, então esta sai da árvore de
            acessibilidade: a versão vertical abaixo é a única cópia lida.
          */}
          <ol
            ref={listRef}
            aria-hidden
            className="relative mt-8 hidden list-none grid-cols-6 gap-3 lg:grid"
          >
            <span className="pointer-events-none absolute left-0 right-0 top-[5px] h-px bg-surface-line" />
            <span
              ref={railRef}
              className="flow-rail pointer-events-none absolute left-0 top-[5px] h-px bg-accent"
              style={{ width: "100%" }}
            />

            {NODES.map((node, i) => {
              const isOutcome = node.track === null;
              return (
                <li
                  key={node.id}
                  className="flow-node relative min-w-0"
                  data-index={i}
                  data-lit=""
                >
                  <span
                    className={`flow-dot relative z-10 block h-[11px] w-[11px] rounded-full ring-4 ring-surface ${
                      isOutcome ? "flow-dot--outcome" : ""
                    }`}
                  />

                  <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                    {isOutcome ? "resultado" : `0${i + 1}`}
                  </p>

                  <p
                    className={`flow-step mt-1.5 font-display text-sm font-bold leading-snug tracking-tight ${
                      isOutcome ? "flow-step--outcome" : ""
                    }`}
                  >
                    {node.step}
                  </p>

                  <p className="mt-1 text-xs leading-snug text-soft">{node.tool}</p>

                  {node.track ? (
                    <p className="flow-track mt-2.5 text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.08em]">
                      {node.track}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ol>

          {/*
            Mobile e tablet: trilho vertical.
            Sem pin (custaria 2 telas extras e trava com scroll de inércia).
            A cascata vem da entrada em viewport, via o mesmo reveal do site,
            que já respeita prefers-reduced-motion e nasce visível sem JS.
          */}
          <ol className="relative mt-7 list-none border-l border-surface-line pl-6 lg:hidden">
            {NODES.map((node, i) => {
              const isOutcome = node.track === null;
              return (
                <RevealItem
                  key={node.id}
                  as="li"
                  delay={i * 0.07}
                  className="relative pb-6 last:pb-0"
                >
                  <span
                    aria-hidden
                    className={`absolute -left-[30px] top-1 block h-[11px] w-[11px] rounded-full ring-4 ring-surface ${
                      isOutcome ? "bg-accent" : "border border-accent/60 bg-surface"
                    }`}
                  />

                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                      {isOutcome ? "resultado" : `0${i + 1}`}
                    </span>
                    <span
                      className={`font-display text-sm font-bold tracking-tight ${
                        isOutcome ? "text-accent" : "text-ink"
                      }`}
                    >
                      {node.step}
                    </span>
                    <span className="text-xs text-soft">{node.tool}</span>
                  </div>

                  {node.track ? (
                    <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-accent">
                      {node.track}
                    </p>
                  ) : null}
                </RevealItem>
              );
            })}
          </ol>

          <p className="mt-7 border-t border-surface-line pt-5 text-sm leading-relaxed text-muted">
            {note}
          </p>
        </figure>
      </div>
    </div>
  );
}
