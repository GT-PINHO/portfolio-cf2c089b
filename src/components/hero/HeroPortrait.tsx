"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const MAX = 10;

/** Retrato do hero — sempre visível; parallax só como decoração. */
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
    <div ref={wrapRef} className="relative w-full">
      <div
        className="relative w-full overflow-hidden"
        style={{
          borderRadius: "12px",
          aspectRatio: "4 / 5",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ x: reduce ? 0 : x, y: reduce ? 0 : y }}
        >
          <Image
            src="/david.png"
            alt="David Pinho"
            fill
            priority
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 340px"
            className="scale-105 object-cover object-top brightness-[0.95] contrast-[1.04]"
          />
        </motion.div>
      </div>
    </div>
  );
}
