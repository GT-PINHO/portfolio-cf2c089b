import Section from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { STACK_GROUPS } from "../lib/content";

export default function Stack() {
  return (
    <Section
      id="stack"
      index="04"
      kicker="Stack"
      title="Ferramentas que uso em produção."
      lead="Meta Ads em primeiro lugar. O resto sustenta a operação por trás da campanha."
    >
      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {STACK_GROUPS.map((g) => (
          <RevealItem key={g.label}>
            <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {g.chips.map((c) => {
                  const chipClass = `rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                    c.featured
                      ? "border-accent/50 bg-accent/10 text-accent"
                      : "border-surface-line text-muted hover:border-ink/30 hover:text-ink"
                  }`;

                  if ("href" in c && c.href) {
                    return (
                      <a
                        key={c.name}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${chipClass} hover:border-accent/40 hover:text-accent`}
                      >
                        {c.name} ↗
                      </a>
                    );
                  }

                  return (
                    <span key={c.name} className={chipClass}>
                      {c.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
