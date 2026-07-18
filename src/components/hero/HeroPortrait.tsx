import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { scaleIn } from "../../lib/motion";

const MAX = 10;

export default function HeroPortrait() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(px * MAX);
      my.set(py * MAX);
    };

    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce, mx, my]);

  return (
    <motion.div
      ref={wrapRef}
      className="relative w-full"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
    >
      <div
        className="w-full overflow-hidden md:aspect-[4/5]"
        style={{
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <motion.img
          src="/david.png"
          alt="David Pinho"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="h-full w-full scale-105 object-cover brightness-[0.95] contrast-[1.04] will-change-transform"
          style={{
            objectPosition: "top center",
            x: reduce ? 0 : x,
            y: reduce ? 0 : y,
          }}
          loading="eager"
          decoding="async"
        />
      </div>
    </motion.div>
  );
}
