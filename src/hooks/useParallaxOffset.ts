"use client";

import { useEffect, useRef } from "react";

const MAX_PX = 24;

/**
 * Parallax vertical sutil via IntersectionObserver + rAF (sem scroll listener contínuo).
 * Desloca no máximo ±24px em sentido contrário ao conteúdo.
 */
export function useParallaxOffset<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let visible = false;

    const tick = () => {
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const mid = rect.top + rect.height / 2;
      const progress = (mid - vh / 2) / vh;
      const y = Math.max(-MAX_PX, Math.min(MAX_PX, -progress * MAX_PX));
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting);
        if (visible) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}
