import type { ReactNode } from "react";
import { RevealGroup, RevealItem } from "./Reveal";
import Container from "./Container";

type SectionProps = {
  id: string;
  index: string;
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  index,
  kicker,
  title,
  lead,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-anchor relative ${className || "py-section-y"}`}
    >
      <Container>
        <RevealGroup className="mb-8 border-b border-surface-line pb-8 md:mb-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end">
            <div>
              <RevealItem>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {index} — {kicker}
                </span>
              </RevealItem>
              <RevealItem className="mt-3">
                <h2 className="max-w-[22ch] font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl">
                  {title}
                </h2>
              </RevealItem>
            </div>

            {lead ? (
              <RevealItem>
                <p className="text-base leading-relaxed text-muted lg:max-w-[42ch] lg:justify-self-end lg:pb-1 lg:text-left">
                  {lead}
                </p>
              </RevealItem>
            ) : null}
          </div>
        </RevealGroup>

        <div>{children}</div>
      </Container>
    </section>
  );
}
