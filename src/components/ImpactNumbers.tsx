import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { staggerContainer, staggerItem } from "../lib/motion";
import { METRICS } from "../lib/content";

export default function ImpactNumbers() {
  return (
    <section id="numeros" className="scroll-mt-20 border-y border-surface-line bg-surface-raised py-12 md:py-16">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <Reveal className="mb-8 flex items-center gap-3">
          <span className="font-display text-sm font-bold text-accent">01</span>
          <span className="h-px w-8 bg-accent/40" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Resultados
          </span>
        </Reveal>

        <motion.div
          className="grid grid-cols-2 divide-x divide-y divide-surface-line/50 lg:grid-cols-4 lg:divide-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex flex-col justify-center gap-1.5 px-6 py-10"
            >
              <p className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold leading-none tracking-tight text-ink">
                {m.value}
              </p>
              <p className="text-[13px] leading-snug text-muted">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
