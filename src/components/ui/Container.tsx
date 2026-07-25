import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "nav";
  ariaLabel?: string;
};

/** Container único do site: 1200px, gutters consistentes */
export default function Container({
  children,
  className = "",
  as: Tag = "div",
  ariaLabel,
}: ContainerProps) {
  return (
    <Tag className={`page-container ${className}`.trim()} aria-label={ariaLabel}>
      {children}
    </Tag>
  );
}
