/**
 * Variantes Framer Motion reutilizáveis.
 * Cascata "bloco a bloco" no scroll: ritmo cinematográfico, sem scroll preso.
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
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeFast },
  },
};

/** H1: só translateY, nunca opacity 0 com delay (primeiro paint útil). */
export const heroHeadline = {
  hidden: { y: 8 },
  visible: {
    y: 0,
    transition: { duration: 0.35, ease: easeFast },
  },
};

/**
 * Seção / cards: descem em cascata.
 * Stagger fica em 60ms: com 180ms um grid de 6 cards levava mais de 1s para fechar.
 */
export const blockStack = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

export const blockIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeCinematic },
  },
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeCinematic },
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
    transition: { duration: 0.4, ease: easeOut },
  },
};

/** Nunca parte de scale(0): nada no mundo real aparece do nada. */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeCinematic },
  },
};

export const hoverCard = {
  whileHover: { y: -4 },
  transition: springSnappy,
};

/** Botão responde à pressão. Crescer no hover só chama atenção para o cursor. */
export const hoverButton = {
  whileTap: { scale: 0.97 },
  transition: springSnappy,
};
