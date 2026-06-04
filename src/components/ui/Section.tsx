import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

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
      className={`relative scroll-mt-24 py-[clamp(5rem,9vw,8rem)] ${className}`}
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <Reveal className="mb-3 flex items-center gap-3">
          <span className="font-display text-sm font-bold text-accent">{index}</span>
          <span className="h-px w-8 bg-accent/40" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            {kicker}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-[18ch] font-display text-[clamp(1.9rem,4.4vw,3rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink">
            {title}
          </h2>
        </Reveal>

        {lead && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[60ch] text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed text-muted">
              {lead}
            </p>
          </Reveal>
        )}

        <div className="mt-12 lg:mt-16">{children}</div>
      </div>
    </section>
  );
}
