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
  return (
    <motion.a
      href={href}
      download={download}
      target={!download && href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-[15px] font-semibold text-white ${className}`}
      style={{ background: "#06b6d4" }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={springSoft}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(105deg, transparent 35%, rgba(255,255,255,.28) 50%, transparent 65%)",
          backgroundSize: "200% 100%",
        }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"
        style={{ background: "#06b6d4" }}
      />
      <span className="relative z-10">{children}</span>
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
  return (
    <motion.a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-surface-line bg-surface-raised/50 px-8 py-3.5 text-[15px] font-semibold text-ink backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-surface-raised ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={springSoft}
    >
      {children}
    </motion.a>
  );
}
