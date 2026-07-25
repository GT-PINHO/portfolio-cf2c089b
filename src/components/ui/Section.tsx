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
        <RevealGroup className="mb-8 md:mb-14">
          <RevealItem className="mb-3 flex items-center gap-3">
            <span className="font-display text-[13px] font-bold tabular-nums text-accent">
              {index}
            </span>
            <span className="h-px w-8 bg-accent/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              {kicker}
            </span>
          </RevealItem>

          <RevealItem>
            <h2 className="max-w-[22ch] font-display text-[clamp(1.65rem,6.5vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:leading-[1.06]">
              {title}
            </h2>
          </RevealItem>

          {lead && (
            <RevealItem className="mt-4">
              <p className="max-w-[54ch] text-[1.02rem] leading-relaxed text-soft">
                {lead}
              </p>
            </RevealItem>
          )}
        </RevealGroup>

        <div>{children}</div>
      </Container>
    </section>
  );
}
