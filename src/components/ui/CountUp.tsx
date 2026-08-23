"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Valor final numérico (ex.: 30000, 100, 9414). */
  to: number;
  /** Texto estático no SSR / reduced-motion / antes da animação. */
  fallback: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: "plain" | "pt" | "compact-k";
  className?: string;
  durationMs?: number;
};

function formatValue(
  n: number,
  format: CountUpProps["format"],
  decimals: number,
): string {
  if (format === "compact-k") {
    if (n >= 1000) {
      const k = n / 1000;
      const rounded = Number.isInteger(k) ? String(k) : k.toFixed(1).replace(".", ",");
      return `${rounded}k`;
    }
    return String(Math.round(n));
  }
  if (format === "pt") {
    return n.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return decimals > 0 ? n.toFixed(decimals) : String(Math.round(n));
}

/** Contador animado. Sempre emite o valor final no HTML até a animação sobrescrever. */
export default function CountUp({
  to,
  fallback,
  prefix = "",
  suffix = "",
  decimals = 0,
  format = "plain",
  className = "",
  durationMs = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [text, setText] = useState(fallback);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      setText(fallback);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(fallback);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = to * eased;
      setText(`${prefix}${formatValue(current, format, decimals)}${suffix}`);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setText(fallback);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, durationMs, fallback, prefix, suffix, format, decimals]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {text}
    </span>
  );
}
