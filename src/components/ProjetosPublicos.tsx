import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup } from "./ui/Reveal";
import { springSnappy, staggerItem } from "../lib/motion";
import { CONTACT, PUBLIC_PROJECTS } from "../lib/content";
import { IconExternal } from "./ui/icons";

export default function ProjetosPublicos() {
  return (
    <Section
      id="projetos"
      index="02"
      kicker="Projetos públicos"
      title="O que posso mostrar no GitHub."
      lead="Grande parte do trabalho é confidencial. O código público é a evidência técnica: skills, automações e sistemas aplicados a growth."
    >
      <RevealGroup className="grid gap-4">
        {PUBLIC_PROJECTS.map((p) => (
          <motion.a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={staggerItem}
            whileHover={{ y: -3, x: 2, transition: springSnappy }}
            className={`group grid gap-4 p-6 transition-colors sm:grid-cols-[1fr_auto] sm:items-center ${
              p.featured
                ? "border border-accent/35 bg-accent/5 hover:border-accent/55"
                : "border border-surface-line bg-surface-raised/30 hover:border-accent/35"
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                  {p.title}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.12em] text-accent">
                  {p.status}
                </span>
              </div>
              <p className="mt-2 max-w-[62ch] text-[14px] leading-relaxed text-soft">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-surface-line px-2.5 py-1 text-[11px] text-soft transition-colors group-hover:border-accent/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent transition-transform group-hover:translate-x-0.5 group-hover:underline">
              Abrir <IconExternal className="h-3.5 w-3.5" />
            </span>
          </motion.a>
        ))}
      </RevealGroup>

      <p className="mt-8 text-[13.5px] text-muted">
        Perfil completo:{" "}
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          github.com/GT-PINHO
        </a>
      </p>
    </Section>
  );
}
