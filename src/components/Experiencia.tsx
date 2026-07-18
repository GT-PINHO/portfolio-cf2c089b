import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { EXPERIENCE } from "../lib/content";

export default function Experiencia() {
  return (
    <Section
      id="experiencia"
      index="03"
      kicker={EXPERIENCE.kicker}
      title={EXPERIENCE.title}
      lead={EXPERIENCE.lead}
    >
      <RevealGroup className="relative ml-1 border-l border-surface-line pl-8 sm:pl-10">
        {EXPERIENCE.roles.map((r) => (
          <RevealItem key={r.title} className="relative pb-8 last:pb-0" as="div">
            <motion.span
              className="absolute -left-[41px] top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-[49px]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              <span className="h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-surface" />
              {r.current && (
                <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-accent/50" />
              )}
            </motion.span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {r.title}
              </h3>
              {r.current && (
                <span className="rounded-full border border-accent/35 bg-accent/10 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-accent">
                  Atual
                </span>
              )}
            </div>
            <p className="mt-1 font-medium text-accent">{r.org}</p>
            <p className="mt-1 text-[13px] text-muted">{r.meta}</p>

            <ul className="mt-5 space-y-2.5">
              {r.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative max-w-[68ch] pl-5 text-[14.5px] leading-relaxed text-soft before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/45"
                >
                  {b}
                </motion.li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
