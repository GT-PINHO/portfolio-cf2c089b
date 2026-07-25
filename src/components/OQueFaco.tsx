import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup } from "./ui/Reveal";
import { springSnappy, staggerItem } from "../lib/motion";
import { WHAT_I_DO } from "../lib/content";

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
              className="mt-4 h-px w-12 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
            />
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  );
}
