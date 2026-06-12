import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup } from "./ui/Reveal";
import { staggerItem } from "../lib/motion";
import { CASES, type CaseItem } from "../lib/content";
import { IconExternal } from "./ui/icons";

const CATEGORY_LABEL: Record<CaseItem["category"], string> = {
  traffic: "Tráfego",
  system: "Sistema",
};

const CATEGORY_COLOR: Record<CaseItem["category"], string> = {
  traffic: "bg-accent/10 text-accent border-accent/30",
  system: "bg-white/[0.05] text-muted border-white/[0.08]",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <dt className="mb-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-muted/60">
      {children}
    </dt>
  );
}

export default function Cases() {
  return (
    <Section
      id="cases"
      index="03"
      kicker="Projetos em Produção"
      title="O que fica quando a campanha termina."
      lead="Tráfego e sistemas em produção. Dados agregados — sem informações confidenciais."
    >
      <RevealGroup className="grid gap-5 md:grid-cols-2">
        {CASES.map((c) => (
          <motion.article
            key={c.id}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="group relative flex flex-col rounded-2xl border border-surface-line bg-surface-raised/60 p-6 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            {/* Header: badge + título */}
            <div className="mb-5">
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] ${CATEGORY_COLOR[c.category]}`}
              >
                {CATEGORY_LABEL[c.category]}
              </span>
              <h3 className="mt-3 font-display text-[17px] font-bold leading-snug tracking-tight text-ink">
                {c.title}
              </h3>
            </div>

            {/* DL com separadores visuais */}
            <dl className="flex-1 divide-y divide-surface-line/40 leading-relaxed">
              <div className="pb-3">
                <FieldLabel>Contexto</FieldLabel>
                <dd className="text-[13px] text-muted/90">{c.context}</dd>
              </div>
              <div className="py-3">
                <FieldLabel>O que fiz</FieldLabel>
                <dd className="text-[13px] text-muted/90">{c.action}</dd>
              </div>
              <div className="pt-3">
                <FieldLabel>Resultado</FieldLabel>
                <dd className="text-[14px] font-semibold leading-snug text-ink">{c.result}</dd>
              </div>
            </dl>

            {/* Footer: tags + link */}
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-surface-line/40 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-surface-line px-2 py-0.5 text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {c.href && (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-surface-line px-3.5 py-1.5 text-[12px] text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  GitHub <IconExternal className="h-3 w-3" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  );
}
