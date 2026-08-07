"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup } from "./ui/Reveal";
import { ButtonPrimary } from "./ui/Button";
import { springSnappy, staggerItem } from "../lib/motion";
import { CASES } from "../lib/content";

export default function Casos() {
  const featured = CASES.find((c) => c.featured) ?? CASES.find((c) => c.href);
  const compact = CASES.filter((c) => c.id !== featured?.id);

  return (
    <Section
      id="casos"
      index="01"
      kicker="Casos"
      title="Resultado em operação real."
      lead="Projetos em produção no IAM e na Intencional — o estudo de caso completo de Growth Ops em destaque."
    >
      <div className="space-y-5">
        {featured && (
          <RevealGroup>
            <motion.article
              variants={staggerItem}
              className="grid gap-8 border border-accent/40 bg-surface-raised/40 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {featured.sector}
                </p>
                <h3 className="mt-2.5 font-display text-[1.35rem] font-bold leading-snug tracking-tight text-ink sm:text-[1.5rem]">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-soft">
                  {featured.impact}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {featured.stack.map((t) => (
                    <span
                      key={t}
                      className="border border-surface-line px-2 py-0.5 text-[11px] text-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {featured.href && (
                  <div className="mt-7">
                    <ButtonPrimary href={featured.href}>
                      {featured.cta ?? "Ver estudo de caso"} →
                    </ButtonPrimary>
                  </div>
                )}
              </div>

              <div className="grid gap-4 border-t border-surface-line/60 pt-6 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                {(featured.metrics ?? []).map((m) => (
                  <div key={m.label}>
                    <p className="font-display text-3xl font-bold tracking-tight text-accent tabular-nums sm:text-4xl">
                      {m.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          </RevealGroup>
        )}

        <RevealGroup className="grid gap-5 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-stretch">
          {compact.map((c) => (
            <motion.article
              key={c.id}
              variants={staggerItem}
              whileHover={{ y: -3, transition: springSnappy }}
              className="flex h-full flex-col border border-surface-line bg-surface-raised/35 p-6 transition-colors hover:border-accent/40 lg:row-span-2 lg:grid lg:grid-rows-subgrid"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                {c.sector}
              </p>
              <h3 className="mt-2.5 font-display text-[15.5px] font-bold leading-snug tracking-tight text-ink">
                {c.title}
              </h3>
              <p className="mt-4 border-l-2 border-accent pl-3 text-[14px] leading-relaxed text-soft">
                {c.impact}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {c.stack.map((t) => (
                  <span
                    key={t}
                    className="border border-surface-line px-2 py-0.5 text-[11px] text-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
