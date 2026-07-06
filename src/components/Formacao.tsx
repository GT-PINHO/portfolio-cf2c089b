import Section from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const ITEMS = [
  {
    title: "Comunidade Sobral de Tráfego",
    desc: "Base metodológica em performance e Meta Ads.",
  },
  {
    title: "Google Tag Manager Web & Server-Side",
    desc: "Rastreamento e qualidade de sinal — estudos práticos aplicados na operação.",
  },
  {
    title: "Google Ads — Skillshop (Search)",
    desc: "Certificação em andamento, com foco em Search e Performance Max.",
  },
  {
    title: "Aprendizado contínuo",
    desc: "Tráfego pago, funis, IA aplicada, CRM e escalabilidade desde 2023.",
  },
];

export default function Formacao() {
  return (
    <Section
      id="trajetoria"
      index="05"
      kicker="Trajetória"
      title="Especialização construída na prática."
      lead="Formação contínua focada em performance: cursos aplicados, mentoria de mercado e atualização constante em tráfego, dados e IA."
    >
      <RevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it) => (
          <RevealItem
            key={it.title}
            className="group rounded-2xl border border-surface-line bg-surface-raised/40 p-6 transition-colors hover:border-accent/30"
          >
            <div className="mb-4 h-px w-10 bg-accent/40 transition-all duration-500 group-hover:w-16" />
            <h3 className="font-display text-[17px] font-bold leading-snug tracking-tight text-ink">
              {it.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
              {it.desc}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
