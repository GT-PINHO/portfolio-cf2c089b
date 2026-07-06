import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup } from "./ui/Reveal";
import { staggerItem } from "../lib/motion";
import { PILLARS } from "../lib/content";

const cardBase =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-surface-line bg-surface-raised p-6 lg:p-8 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]";

export default function Servicos() {
  const featured = PILLARS.find((p) => p.featured)!;
  const secondary = PILLARS.filter((p) => !p.featured);

  return (
    <Section
      id="servicos"
      index="02"
      kicker="O que eu faço"
      title="Tráfego que fecha. Operação que escala."
      lead="Tráfego pago é o núcleo. Os sistemas que construo são o diferencial que faz o lead virar resultado."
    >
      <RevealGroup className="grid gap-4 lg:grid-cols-[1.45fr_1fr_1fr]">
        {/* Card principal */}
        <motion.article
          key={featured.id}
          variants={staggerItem}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          className={cardBase}
        >
          <div
            className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-surface-line"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <img src={featured.icon} alt="" aria-hidden className="h-7 w-7 object-contain" loading="lazy" />
          </div>

          <div className="mb-1 inline-flex self-start rounded-full bg-accent/10 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-accent">
            Pilar principal
          </div>

          <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink lg:text-2xl">
            {featured.title}
          </h3>
          <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">
            {featured.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {featured.tags.map((t) => (
              <span key={t} className="rounded-full border border-surface-line px-3 py-1 text-[11.5px] text-muted">
                {t}
              </span>
            ))}
          </div>
          <span aria-hidden className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
        </motion.article>

        {/* Cards secundários */}
        {secondary.map((s) => (
          <motion.article
            key={s.id}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className={`${cardBase} bg-surface-raised/60`}
          >
            <div
              className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-surface-line"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <img src={s.icon} alt="" aria-hidden className="h-7 w-7 object-contain" loading="lazy" />
            </div>

            <h3 className="font-display text-lg font-bold tracking-tight text-ink">
              {s.title}
            </h3>
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
              {s.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full border border-surface-line px-3 py-1 text-[11.5px] text-muted">
                  {t}
                </span>
              ))}
            </div>
            <span aria-hidden className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent/60 transition-all duration-500 group-hover:w-full" />
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  );
}
