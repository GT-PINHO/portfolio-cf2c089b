import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup } from "./ui/Reveal";
import { springSnappy, staggerItem } from "../lib/motion";
import { CASES } from "../lib/content";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="py-2.5">
      <dt className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-soft/90">
        {label}
      </dt>
      <dd className="text-[13.5px] leading-relaxed text-soft">{children}</dd>
    </div>
  );
}

export default function Casos() {
  return (
    <Section
      id="casos"
      index="04"
      kicker="Casos"
      title="Resultado em operação real."
      lead="Projetos em produção no IAM e na Intencional. Sem números ou dashboards internos confidenciais, com o contexto da empresa onde rodei."
    >
      <RevealGroup className="grid gap-5 lg:grid-cols-3">
        {CASES.map((c) => (
          <motion.article
            key={c.id}
            variants={staggerItem}
            whileHover={{ y: -4, transition: springSnappy }}
            className="group flex flex-col border border-surface-line bg-surface-raised/35 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-surface-raised/55"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              {c.sector}
            </p>
            <h3 className="mt-2.5 font-display text-[15.5px] font-bold leading-snug tracking-tight text-ink">
              {c.title}
            </h3>

            <p className="mt-5 border-l-2 border-accent pl-3 font-display text-[15px] font-semibold leading-snug text-ink">
              {c.impact}
            </p>

            <dl className="mt-5 flex-1 divide-y divide-surface-line/45">
              <Field label="Contexto">{c.context}</Field>
              <Field label="Problema">{c.problem}</Field>
              <Field label="Atuação">{c.action}</Field>
            </dl>

            <div className="mt-4 flex flex-wrap gap-1.5 border-t border-surface-line/45 pt-4">
              {c.stack.map((t) => (
                <span
                  key={t}
                  className="border border-surface-line px-2 py-0.5 text-[11px] text-soft transition-colors group-hover:border-accent/25"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  );
}
