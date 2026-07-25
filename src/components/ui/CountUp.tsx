"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Valor final numérico (ex.: 30000, 100, 9414). */
  to: number;
  /** Texto estático se o visitante preferir reduzir movimento. */
  fallback: string;
  /** Prefixo opcional (ex.: "R$ "). */
  prefix?: string;
  /** Sufixo opcional (ex.: "%", "k"). */
  suffix?: string;
  /** Casas decimais. */
  decimals?: number;
  /** Formatação pt-BR compacta (30 mil → 30k se compact). */
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

/** Contador animado ao entrar na viewport (ideia do Number Ticker do 21st). */
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
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      setDone(true);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(to);
        setDone(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, to, durationMs]);

  const display =
    reduce || (!inView && !done)
      ? fallback
      : `${prefix}${formatValue(value, format, decimals)}${suffix}`;

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {inView || done || reduce ? display : fallback}
    </span>
  );
}
