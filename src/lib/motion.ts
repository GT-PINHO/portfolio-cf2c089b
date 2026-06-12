/**
 * Variantes Framer Motion reutilizáveis.
 * Todos os componentes importam daqui — sem duplicação.
 * Respeita prefers-reduced-motion via viewport/once.
 */

// ─── Easing ────────────────────────────────────────────────────────────────
export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeFast = [0.16, 1, 0.3, 1] as const;

// ─── Spring ────────────────────────────────────────────────────────────────
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

// ─── Hero entrance — rápido, premium ───────────────────────────────────────
export const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeFast },
  },
};

// ─── Section scroll reveal ─────────────────────────────────────────────────
export const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

// ─── Stagger container + item ──────────────────────────────────────────────
export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: easeOut },
  },
};

// ─── Hover states reutilizáveis ────────────────────────────────────────────
/** Card hover — leve lift + shadow via css transition */
export const hoverCard = {
  whileHover: { y: -4 },
  transition: springSnappy,
};

/** Botão hover — scale discreto */
export const hoverButton = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: springSnappy,
};
