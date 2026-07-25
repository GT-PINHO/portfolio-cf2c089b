import Section from "./ui/Section";
import BrandMarquee from "./ui/BrandMarquee";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { STACK_GROUPS } from "../lib/content";

export default function Stack() {
  return (
    <Section
      id="stack"
      index="05"
      kicker="Stack"
      title="Núcleo em produção."
      lead="O que uso de fato em performance, tracking, CRM e sistemas. Sem inventário longo."
    >
      <RevealGroup>
        <RevealItem className="mb-6">
          <BrandMarquee />
        </RevealItem>
      </RevealGroup>

      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {STACK_GROUPS.map((g) => (
          <RevealItem key={g.label}>
            <div className="h-full border border-surface-line bg-surface-raised/30 p-5 transition-colors duration-300 hover:border-accent/30">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-soft">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.chips.map((c) => {
                  const chipClass = `border px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    c.featured
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-surface-line text-soft hover:border-ink/30 hover:text-ink"
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
