"use client";

import { useEffect } from "react";

/**
 * Só marca JS como “vivo” após dois frames de rAF.
 * Se o relógio estiver estrangulado/parado, a classe nunca entra e
 * `[data-reveal]` permanece no estado padrão visível (CSS-first).
 */
export default function EnableJsReveal() {
  useEffect(() => {
    let cancelled = false;
    let outer = 0;
    let inner = 0;

    outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        if (!cancelled) {
          document.documentElement.classList.add("js-reveal");
        }
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
      document.documentElement.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
