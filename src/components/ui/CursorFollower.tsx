import { useEffect, useRef } from "react";

const SIZE = 10;
const SCALE_HOVER = 1.4;
const LERP_POS = 0.09;
const LERP_STATE = 0.18;
const OPACITY_DEFAULT = 0.22;
const OPACITY_HOVER = 0.38;

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, summary";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * CursorFollower: bolinha sutil que complementa o cursor nativo.
 * Desktop only. RAF + lerp. Sem glow, trail ou magnetismo.
 */
export default function CursorFollower() {
  const elRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const scale = useRef(1);
  const opacity = useRef(0);
  const hovered = useRef(false);
  const visible = useRef(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    const el = elRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        pos.current = { x: e.clientX, y: e.clientY };
        visible.current = true;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovered.current = !!t.closest(INTERACTIVE);
    };

    const onLeave = () => {
      visible.current = false;
    };

    const tick = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, LERP_POS);
      pos.current.y = lerp(pos.current.y, target.current.y, LERP_POS);

      const targetScale = hovered.current ? SCALE_HOVER : 1;
      const targetOpacity = visible.current
        ? hovered.current
          ? OPACITY_HOVER
          : OPACITY_DEFAULT
        : 0;

      scale.current = lerp(scale.current, targetScale, LERP_STATE);
      opacity.current = lerp(opacity.current, targetOpacity, LERP_STATE);

      const half = SIZE / 2;
      el.style.transform = `translate3d(${pos.current.x - half}px, ${pos.current.y - half}px, 0) scale(${scale.current})`;
      el.style.opacity = String(opacity.current);

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden
      className="hidden md:block"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: SIZE,
        height: SIZE,
        borderRadius: "50%",
        background: "var(--ink)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        willChange: "transform, opacity",
      }}
    />
  );
}
