import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "nav";
};

/** Container único do site: 1200px, gutters consistentes */
export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`page-container ${className}`.trim()}>
      {children}
    </Tag>
  );
}
