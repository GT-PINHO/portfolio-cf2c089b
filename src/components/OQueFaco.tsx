import { motion } from "framer-motion";
import Section from "./ui/Section";
import { Reveal, RevealGroup } from "./ui/Reveal";
import { springSnappy, staggerItem } from "../lib/motion";
import { HERO, WHAT_I_DO } from "../lib/content";
import { IconExternal } from "./ui/icons";

export default function OQueFaco() {
  return (
    <Section
      id="fazendo"
      index="01"
      kicker={WHAT_I_DO.kicker}
      title={<span className="whitespace-pre-line">{WHAT_I_DO.title}</span>}
      lead={WHAT_I_DO.lead}
    >
      <RevealGroup className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
        {WHAT_I_DO.pillars.map((p, i) => (
          <motion.article
            key={p.id}
            variants={staggerItem}
            whileHover={{ y: -3, transition: springSnappy }}
            className="group flex flex-col border-t border-surface-line pt-5 transition-colors hover:border-accent/50"
          >
            <span className="font-display text-[11px] font-semibold tracking-wide text-accent">
              0{i + 1}
            </span>
            <h3 className="mt-2.5 font-display text-[1.15rem] font-bold tracking-tight text-ink">
              {p.title}
            </h3>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-soft">
              {p.description}
            </p>
            <span
              aria-hidden
              className="mt-4 h-px w-0 bg-accent transition-all duration-500 group-hover:w-12"
            />
          </motion.article>
        ))}
      </RevealGroup>

      <Reveal className="mt-12">
        <motion.a
          href={HERO.openSource.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, transition: springSnappy }}
          className="group flex flex-col gap-2 border border-accent/25 bg-accent/5 px-5 py-5 transition-colors hover:border-accent/45 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              Prova técnica pública
            </p>
            <p className="mt-1.5 font-display text-[16px] font-bold text-ink">
              agent-skills no GitHub
            </p>
            <p className="mt-1 max-w-[52ch] text-[13.5px] text-soft">
              Skills de growth-ops com CI e 20/20 evals. Evidência do que construo além da operação confidencial.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-accent group-hover:underline">
            Abrir repositório <IconExternal className="h-3.5 w-3.5" />
          </span>
        </motion.a>
      </Reveal>
    </Section>
  );
}
