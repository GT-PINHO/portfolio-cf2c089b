/**
 * Variantes Framer Motion reutilizáveis.
 * Cascata "bloco a bloco" no scroll — ritmo cinematográfico, sem scroll preso.
 */

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeFast = [0.16, 1, 0.3, 1] as const;
export const easeCinematic = [0.16, 1, 0.28, 1] as const;

export const springSoft = {
  type: "spring" as const,
  stiffness: 120,
  damping: 22,
  mass: 0.8,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 280,
  damping: 26,
};

export const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeFast },
  },
};

/** Seção / cards: descem em cascata */
export const blockStack = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

export const blockIn = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeCinematic },
  },
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easeCinematic },
  },
};

export const containerStagger = blockStack;
export const staggerContainer = blockStack;

export const staggerItem = blockIn;
export const fadeUp = blockIn;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCinematic },
  },
};

export const hoverCard = {
  whileHover: { y: -4 },
  transition: springSnappy,
};

export const hoverButton = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: springSnappy,
};
