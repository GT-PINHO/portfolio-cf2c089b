import type { ReactNode } from "react";

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
    <a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`btn-tactile inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${className}`}
    >
      {children}
    </a>
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
    <a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`btn-tactile inline-flex items-center justify-center gap-2 rounded-full border border-surface-line px-7 py-3.5 text-sm font-semibold text-ink hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${className}`}
    >
      {children}
    </a>
  );
}
