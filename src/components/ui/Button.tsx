import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { springSoft } from "../../lib/motion";

type BtnProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  download?: string | boolean;
};

export function ButtonPrimary({ href, children, className = "", download }: BtnProps) {
  const isExternal = !download && href.startsWith("http");
  return (
    <motion.a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 ${className}`}
      style={{ background: "var(--accent)" }}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={springSoft}
    >
      {children}
    </motion.a>
  );
}

export function ButtonSecondary({
  href,
  children,
  className = "",
  external,
  download,
}: BtnProps) {
  const isExternal = external || (!download && href.startsWith("http"));
  return (
    <motion.a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-surface-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={springSoft}
    >
      {children}
    </motion.a>
  );
}
