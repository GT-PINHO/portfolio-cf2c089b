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
import Section from "../ui/Section";
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
      <Section
        id="operacao"
        index="03"
        kicker={OPERATION.kicker}
        title={OPERATION.title}
        lead={OPERATION.lead}
        className="py-0"
      >
        <div
          className="relative flex min-h-[100svh] flex-col justify-between py-10 lg:py-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
          }}
        >
          <p
            className="pointer-events-none select-none text-center font-display font-extrabold leading-none tracking-[-0.04em] text-ink/90"
            style={{ fontSize: "clamp(2rem, 11vw, 3.5rem)" }}
            aria-hidden
          >
            <span className="hidden lg:inline" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
              {headerText}
            </span>
            <span className="lg:hidden">{headerText}</span>
          </p>

          {/* Desktop 3-col */}
          <div
            className="mt-10 hidden grid-cols-[1fr_auto_1fr] items-center gap-6 lg:grid lg:gap-10"
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

          <div className="mt-12">
            <p
              className="pointer-events-none select-none text-center font-display font-extrabold leading-none tracking-[-0.04em] text-ink/80"
              style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
              aria-hidden
            >
              {footerText}
            </p>
            <div className="mx-auto mt-6 flex max-w-md items-center gap-4">
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
      </Section>
    </div>
  );
}
