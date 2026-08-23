"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealAs = "div" | "li" | "article" | "span";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealAs;
};

/**
 * CSS-first reveal: SSR/HTML sai visível.
 * Só esconde depois de `html.js-reveal` (ligado via double-rAF).
 * Dispara com ~15% na viewport; unobserve após revelar.
 */
export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-in");
      return;
    }

    const reveal = () => {
      el.classList.add("is-in");
    };

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    if (rect.top < vh * 0.85 && rect.bottom > 0) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        reveal();
        io.unobserve(el);
      },
      { threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useReveal();
  const Tag = as as ElementType;
  const style: CSSProperties | undefined = delay
    ? ({ ["--reveal-delay"]: `${delay}s` } as CSSProperties)
    : undefined;

  return (
    <Tag ref={ref} data-reveal="" className={className} style={style}>
      {children}
    </Tag>
  );
}

/** Wrapper sem opacidade. Filhos RevealItem observam a viewport. */
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function RevealItem({
  children,
  className,
  as = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  delay?: number;
}) {
  const ref = useReveal();
  const Tag = as as ElementType;
  const style: CSSProperties | undefined = delay
    ? ({ ["--reveal-delay"]: `${delay}s` } as CSSProperties)
    : undefined;

  return (
    <Tag ref={ref} data-reveal="" className={className} style={style}>
      {children}
    </Tag>
  );
}
