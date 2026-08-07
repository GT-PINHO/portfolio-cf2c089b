"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import {
  OPERATION,
  type OperationPillar,
} from "../../lib/content";
import { setPulse, useAmbientMode } from "../../lib/ambient-intensity";

type OperationSliderProps = {
  items?: OperationPillar[];
  headerText?: string;
  footerText?: string;
  autoAdvanceMs?: number;
  transitionDuration?: number;
};

const EASE_SLIDE = [0.86, 0, 0.07, 1] as const;
const EASE_ACTIVE = [0.16, 1, 0.3, 1] as const;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function OperationSlider({
  items = OPERATION.pillars,
  headerText = OPERATION.headerText,
  footerText = OPERATION.footerText,
  autoAdvanceMs = 4500,
  transitionDuration = 0.45,
}: OperationSliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  useAmbientMode("reactive", "operacao", rootRef);

  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [paused, setPaused] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goTo = useCallback(
    (next: number, fromUser = false) => {
      setIndex((prev) => {
        const clamped = ((next % items.length) + items.length) % items.length;
        setDirection(clamped > prev || (prev === items.length - 1 && clamped === 0) ? 1 : -1);
        if (fromUser) setHasInteracted(true);
        const item = items[clamped];
        if (!reduce) setPulse(item.accentShift ?? clamped * 18);
        return clamped;
      });
    },
    [items, reduce],
  );

  useEffect(() => {
    if (reduce || hasInteracted || paused || autoAdvanceMs <= 0) return;
    const id = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % items.length;
        setDirection(1);
        if (!reduce) setPulse(items[next].accentShift ?? next * 18);
        return next;
      });
    }, autoAdvanceMs);
    return () => window.clearInterval(id);
  }, [autoAdvanceMs, hasInteracted, paused, items, reduce]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let next: number | null = null;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = index + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = index - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = items.length - 1;
        break;
      default:
        break;
    }
    if (next === null) return;
    e.preventDefault();
    const clamped = ((next % items.length) + items.length) % items.length;
    goTo(clamped, true);
    tabRefs.current[clamped]?.focus();
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) < 48) return;
    goTo(info.offset.x < 0 ? index + 1 : index - 1, true);
  };

  const active = items[index];
  const dur = reduce ? 0.15 : transitionDuration;
  const panelVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: reduce ? 0 : dir > 0 ? 18 : -18,
    }),
    center: { opacity: 1, y: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      y: reduce ? 0 : dir > 0 ? -18 : 18,
    }),
  };

  return (
    <div ref={rootRef}>
      <section id="operacao" className="section-anchor relative">
        <div
          className="relative mx-auto flex min-h-[100svh] max-w-page flex-col justify-between px-gutter py-8 lg:py-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
          }}
        >
          <div className="grid gap-4 border-b border-surface-line pb-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                03 — {OPERATION.kicker}
              </span>
              <h2 className="mt-2 max-w-[22ch] font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-ink md:text-4xl">
                {OPERATION.title}
              </h2>
            </div>
            <p className="text-[0.98rem] leading-relaxed text-muted lg:max-w-[46ch] lg:text-right">
              {OPERATION.lead}
            </p>
          </div>

          <p
            className="pointer-events-none mt-6 select-none text-center font-display font-extrabold leading-none tracking-[-0.04em] text-ink/90"
            style={{ fontSize: "clamp(1.75rem, 6vw, 4rem)" }}
            aria-hidden
          >
            {headerText}
          </p>

          {/* Desktop 3-col */}
          <div
            className="mt-6 hidden grid-cols-[1fr_auto_1fr] items-center gap-6 lg:grid lg:gap-10"
            onKeyDown={onKeyDown}
          >
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Pilares da operação"
              className="flex flex-col gap-1"
            >
              {items.map((item, i) => {
                const selected = i === index;
                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`op-tab-${item.id}`}
                    aria-selected={selected}
                    aria-controls={`op-panel-${item.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => goTo(i, true)}
                    className={`group flex items-center gap-3 py-3 text-left transition-[opacity,transform,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                      selected ? "text-ink" : "text-muted opacity-55 hover:opacity-80"
                    }`}
                    style={{
                      transform: selected ? "translateX(9px)" : "translateX(0)",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                        selected ? "bg-accent" : "bg-surface-line"
                      }`}
                      aria-hidden
                    />
                    <span className="font-display text-lg font-semibold tracking-tight">
                      {item.pillar}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-[min(280px,28vw)] text-center">
              {items.map((item, i) => (
                <div
                  key={item.id}
                  id={`op-panel-${item.id}`}
                  role="tabpanel"
                  aria-labelledby={`op-tab-${item.id}`}
                  aria-live={i === index ? "polite" : undefined}
                  hidden={i !== index}
                  className={i === index ? "block" : "sr-only"}
                >
                  {i === index ? (
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={item.id}
                        custom={direction}
                        variants={panelVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: dur, ease: EASE_SLIDE }}
                      >
                        <p className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold tracking-tight text-accent tabular-nums">
                          {item.proof.value}
                        </p>
                        <p className="mt-2 text-sm leading-snug text-muted">
                          {item.proof.unit}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <>
                      <p className="font-display text-2xl font-bold text-accent">
                        {item.proof.value}
                      </p>
                      <p className="text-sm text-muted">{item.proof.unit}</p>
                      <ul className="mt-2">
                        {item.tools.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div aria-hidden="true" className="relative min-h-[140px]">
              {items.map((item, i) => (
                <ul
                  key={item.id}
                  className={`absolute inset-0 flex flex-col items-end justify-center gap-1.5 text-right transition-opacity duration-300 ${
                    i === index ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  {item.tools.map((t) => (
                    <li key={t} className="text-[13px] font-medium tracking-wide text-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="mt-8 lg:hidden">
            <div
              role="tablist"
              aria-label="Pilares da operação"
              className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item, i) => {
                const selected = i === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`op-panel-m-${item.id}`}
                    onClick={() => goTo(i, true)}
                    className={`snap-start whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                      selected
                        ? "border-accent/50 bg-accent/15 text-ink"
                        : "border-surface-line text-muted opacity-55"
                    }`}
                  >
                    {item.pillar}
                  </button>
                );
              })}
            </div>

            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={onDragEnd}
              className="mt-6 touch-pan-y"
            >
              {items.map((item, i) => (
                <div
                  key={item.id}
                  id={`op-panel-m-${item.id}`}
                  role="tabpanel"
                  hidden={i !== index}
                  className={i === index ? "block" : "sr-only"}
                >
                  <p className="font-display text-[clamp(2rem,8vw,2.8rem)] font-extrabold tracking-tight text-accent tabular-nums">
                    {item.proof.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{item.proof.unit}</p>
                  <ul className="mt-6 space-y-2">
                    {item.tools.map((t) => (
                      <li
                        key={t}
                        className="border-l border-accent/40 pl-3 text-[14px] text-soft"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6">
            <p
              className="pointer-events-none select-none text-center font-display font-extrabold leading-none tracking-[-0.04em] text-ink/80"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
              aria-hidden
            >
              {footerText}
            </p>
            <div className="mx-auto mt-4 flex max-w-md items-center gap-4">
              <div className="h-px flex-1 overflow-hidden bg-surface-line">
                <motion.div
                  className="h-full bg-accent"
                  initial={false}
                  animate={{ width: `${((index + 1) / items.length) * 100}%` }}
                  transition={{ duration: dur, ease: EASE_ACTIVE }}
                />
              </div>
              <p className="shrink-0 font-display text-sm font-bold tabular-nums text-muted">
                {pad(index + 1)}/{pad(items.length)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
