import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type CounterProps = {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

export function AnimatedCounter({
  from = 0,
  to,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // once:true garante disparo único ao entrar na viewport
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const startTime = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  // Easing out-cubic para desaceleração suave
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);

  const format = (v: number) =>
    prefix + v.toFixed(decimals).replace(".", ",") + suffix;

  useEffect(() => {
    if (!inView) return;

    // Cancela animação anterior se existir
    if (raf.current) cancelAnimationFrame(raf.current);
    startTime.current = null;

    const tick = (now: number) => {
      if (!startTime.current) startTime.current = now;
      const elapsed = now - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const value = from + (to - from) * ease(progress);

      if (ref.current) {
        // No último frame, força o valor exacto para evitar floating-point
        ref.current.textContent =
          progress >= 1 ? format(to) : format(value);
      }

      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [inView]);

  return (
    <span ref={ref}>
      {format(from)}
    </span>
  );
}
