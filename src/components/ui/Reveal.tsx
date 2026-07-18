import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "span";
};

const ease = [0.16, 1, 0.28, 1] as const;

const stackVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 72 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

/** Bloco individual — entra de baixo ao ficar visível. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduce ? false : "hidden"}
      animate={reduce ? undefined : inView ? "visible" : "hidden"}
      variants={{
        hidden: itemVariants.hidden,
        visible: {
          ...itemVariants.visible,
          transition: { duration: 0.85, ease, delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

/** Cascata bloco a bloco nos filhos. */
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : "hidden"}
      animate={reduce ? undefined : inView ? "visible" : "hidden"}
      variants={stackVariants}
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
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}
