import Section from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";

type Block = { label: string; chips: { name: string; core?: boolean }[] };

const BLOCKS: Block[] = [
  {
    label: "Tráfego pago",
    chips: [
      { name: "Meta Ads", core: true },
      { name: "Google Ads — Search & PMax (em desenvolvimento)" },
      { name: "TikTok Ads (básico)" },
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
      { name: "UTM Tracking", core: true },
      { name: "Pixel" },
      { name: "Auditoria de sinal" },
    ],
  },
  {
    label: "CRM, automação & inside sales",
    chips: [
      { name: "HubSpot", core: true },
      { name: "Nectar CRM", core: true },
      { name: "Node.js / TypeScript", core: true },
      { name: "Webhooks / APIs REST" },
      { name: "ManyChat" },
      { name: "EasyPanel" },
    ],
  },
  {
    label: "KPIs, IA & ferramentas",
    chips: [
      { name: "CPL / CAC / ROAS" },
      { name: "Sistemas com IA", core: true },
      { name: "Claude / Cursor", core: true },
      { name: "Supabase / SQL" },
      { name: "Meta Ads Manager" },
      { name: "Google Sheets" },
      { name: "Figma (básico)" },
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
      lead="Alinhado ao meu currículo — domínio em Meta Ads e mensuração, com CRM, automações UTM→inside sales e desenvolvimento de sistemas com IA."
    >
      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {BLOCKS.map((b) => (
          <RevealItem key={b.label}>
            <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
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
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
