import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

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
  duration = 1.8,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(from);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, motionVal, to]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + v.toFixed(decimals).replace(".", ",") + suffix;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {from.toFixed(decimals).replace(".", ",")}
      {suffix}
    </span>
  );
}
