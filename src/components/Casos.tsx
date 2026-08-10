"use client";

import Section from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { ButtonPrimary } from "./ui/Button";
import { CASES } from "../lib/content";

export default function Casos() {
  const featured = CASES.find((c) => c.featured) ?? CASES.find((c) => c.href);
  const compact = CASES.filter((c) => c.id !== featured?.id);

  return (
    <Section
      id="casos"
      index="02"
      kicker="Casos"
      title="Resultado em operação real."
      lead="Projetos em produção no IAM e na Intencional. Em destaque, o sistema que eu desenvolvi para sustentar o funil."
    >
      <div className="space-y-4">
        {featured && (
          <RevealGroup>
            <RevealItem
              as="article"
              className="card-lift grid gap-8 border border-surface-line bg-surface-raised/35 p-6 sm:p-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {featured.sector}
                </p>
                <h3 className="mt-2.5 font-display text-lg font-bold leading-snug tracking-tight text-ink sm:text-xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-soft">
                  {featured.impact}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {featured.stack.map((t) => (
                    <span
                      key={t}
                      className="border border-surface-line px-2 py-0.5 text-xs text-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {featured.href && (
                  <div className="mt-7">
                    <ButtonPrimary href={featured.href}>
                      {featured.cta ?? "Ver estudo de caso"}{" "}
                      <span className="link-arrow" aria-hidden>
                        →
                      </span>
                    </ButtonPrimary>
                  </div>
                )}
              </div>

              <dl className="grid list-none gap-6 border-t border-surface-line pt-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                {(featured.metrics ?? []).map((m) => (
                  <div key={m.label} className="min-w-0">
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="m-0">
                      <p className="font-display text-2xl font-semibold tracking-tight text-ink tabular-nums whitespace-nowrap">
                        {m.value}
                      </p>
                      <p className="mt-1.5 text-xs uppercase tracking-[0.12em] text-muted">
                        {m.label}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </RevealItem>
          </RevealGroup>
        )}

        <RevealGroup className="grid gap-5 lg:grid-cols-2 lg:auto-rows-fr lg:items-stretch">
          {compact.map((c, i) => (
            <RevealItem
              key={c.id}
              as="article"
              delay={i * 0.07}
              className="card-lift flex h-full flex-col border border-surface-line bg-surface-raised/35 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {c.sector}
              </p>
              <h3 className="mt-2.5 font-display text-base font-bold leading-snug tracking-tight text-ink">
                {c.title}
              </h3>
              <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-relaxed text-soft">
                {c.impact}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {c.stack.map((t) => (
                  <span
                    key={t}
                    className="border border-surface-line px-2 py-0.5 text-xs text-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
