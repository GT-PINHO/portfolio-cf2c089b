import Section from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";

type Block = { label: string; chips: { name: string; core?: boolean }[] };

const BLOCKS: Block[] = [
  {
    label: "Tráfego pago",
    chips: [
      { name: "Meta Ads", core: true },
      { name: "Google Ads — Search & Display (básico)" },
      { name: "Funil" },
      { name: "Testes A/B" },
      { name: "Lookalikes" },
      { name: "Remarketing" },
    ],
  },
  {
    label: "Rastreamento & dados",
    chips: [
      { name: "GTM", core: true },
      { name: "API de Conversão", core: true },
      { name: "Stape", core: true },
      { name: "Server-Side Tracking", core: true },
      { name: "Pixel", core: true },
      { name: "Auditoria de sinal" },
    ],
  },
  {
    label: "KPIs & métricas",
    chips: [
      { name: "CPL" },
      { name: "CTR" },
      { name: "CPC" },
      { name: "CPM" },
      { name: "ROAS" },
      { name: "Taxa de comparecimento" },
      { name: "Taxa de conversão" },
    ],
  },
  {
    label: "IA, ferramentas & construção",
    chips: [
      { name: "Claude / ChatGPT", core: true },
      { name: "Cursor" },
      { name: "Meta Ads Manager" },
      { name: "Meta Business Suite" },
      { name: "Google Sheets / Forms" },
      { name: "Figma (básico)" },
      { name: "EasyPanel" },
      { name: "ManyChat" },
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      index="06"
      kicker="Competências"
      title="Stack e habilidades."
      lead="Alinhado ao meu currículo — domínio em Meta Ads e mensuração, com Google Ads em nível básico e construção prática com IA."
    >
      <RevealGroup className="grid gap-4 sm:grid-cols-2">
        {BLOCKS.map((b) => (
          <RevealItem
            key={b.label}
            className="rounded-2xl border border-surface-line bg-surface-raised/40 p-6"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {b.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {b.chips.map((c) => (
                <span
                  key={c.name}
                  className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                    c.core
                      ? "border-accent/50 bg-accent/10 text-accent"
                      : "border-surface-line text-muted hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {c.name}
                </span>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
