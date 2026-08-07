"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "span";
};

const ease = [0.16, 1, 0.28, 1] as const;
const SAFETY_MS = 1500;

function useMobileMotion() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (hover: none)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return mobile;
}

/** Detecta entrada na viewport + timeout de segurança (nunca fica invisível). */
function useRevealGate(amountDesktop = 0.12) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mobile = useMobileMotion();
  const inView = useInView(ref, {
    once: true,
    amount: mobile ? 0.01 : amountDesktop,
    margin: mobile ? "0px 0px -5% 0px" : "0px 0px -8% 0px",
  });
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (reduce || inView) return;
    const t = window.setTimeout(() => setForceShow(true), SAFETY_MS);
    return () => window.clearTimeout(t);
  }, [reduce, inView]);

  return {
    ref,
    reduce,
    visible: Boolean(reduce || inView || forceShow),
    mobile,
  };
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, reduce, visible, mobile } = useRevealGate(0.1);
  const MotionTag = motion[as];
  const y = mobile ? 24 : 48;

  return (
    <MotionTag
      ref={ref}
      data-reveal=""
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: mobile ? 0.45 : 0.65, ease, delay }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, reduce, visible, mobile } = useRevealGate(0.06);

  return (
    <motion.div
      ref={ref}
      data-reveal=""
      className={className}
      initial={reduce ? false : "hidden"}
      animate={visible ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: mobile ? 0.07 : 0.12,
            delayChildren: 0.02,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const mobile = useMobileMotion();
  const MotionTag = motion[as];
  const y = mobile ? 20 : 40;

  return (
    <MotionTag
      data-reveal=""
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: mobile ? 0.4 : 0.6, ease },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
