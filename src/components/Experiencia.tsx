import Section from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";

type Role = {
  title: string;
  org: string;
  meta: string;
  current?: boolean;
  bullets: string[];
};

const ROLES: Role[] = [
  {
    title: "Gestor de Tráfego Pago",
    org: "Grupo Legacy Eco Holding",
    meta: "IAM Treinamentos, Liberty Mentoria, Legacy Coffee. dez/2024 a atual",
    current: true,
    bullets: [
      "Meta Ads em operação nacional com budget semanal de R$68k a R$98k, +21 mil leads sob gestão direta com CPL de R$13.",
      "Operação nacional somou 630 mil+ leads e R$7M em mídia investida no período.",
      "Rastreamento avançado com GTM, API de Conversão, Stape e server-side para qualidade de dados.",
      "Automações em hardcode com UTM tracking até o CRM (HubSpot e Nectar) para inside sales.",
      "Integrações de produtos no HubSpot e Nectar por estratégias de lançamento do IAM.",
      "Sistemas com IA: dashboards, painéis de gestão e automações para análise de criativos e copy.",
    ],
  },
  {
    title: "Assistente de Tráfego Digital",
    org: "Intencional Negócios Digitais Ltda.",
    meta: "Americana, SP. fev/2023 a dez/2024",
    bullets: [
      "Meta Ads de ponta a ponta para cerca de 40 eventos mensais em todo o Brasil.",
      "+240 mil leads gerados com CPL médio de R$8 ao longo do período.",
      "Campanhas por cidade e etapa de funil, com testes A/B contínuos e escala progressiva de verba.",
      "Públicos segmentados, lookalikes e remarketing com base em intenção de compra.",
      "Acompanhamento de rastreamento via GTM com auditoria de sinal.",
    ],
  },
];

export default function Experiencia() {
  return (
    <Section
      id="experiencia"
      index="03"
      kicker="Experiência"
      title="Trajetória profissional."
    >
      <RevealGroup className="relative ml-1 border-l border-surface-line pl-8 sm:pl-10">
        {ROLES.map((r) => (
          <RevealItem
            key={r.title}
            className="relative pb-12 last:pb-0"
            as="div"
          >
            <span className="absolute -left-[41px] top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-[49px]">
              <span className="h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-surface" />
              {r.current && (
                <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-accent/60" />
              )}
            </span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {r.title}
              </h3>
              {r.current && (
                <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-accent">
                  Atual
                </span>
              )}
            </div>
            <p className="mt-1 font-medium text-accent">{r.org}</p>
            <p className="mt-1 text-[13px] text-muted">{r.meta}</p>

            <ul className="mt-5 space-y-2.5">
              {r.bullets.map((b) => (
                <li
                  key={b}
                  className="relative max-w-[68ch] pl-5 text-[14.5px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/50"
                >
                  {b}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
