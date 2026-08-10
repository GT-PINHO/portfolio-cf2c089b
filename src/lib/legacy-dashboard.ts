/**
 * Legacy Growth Dashboard: painel proprietário de marketing e vendas.
 *
 * Reconstrução da UI com números mascarados. Os valores foram deslocados em
 * relação à produção, mas mantêm consistência interna: CPL = investimento /
 * leads novos, CAC = investimento / inscrições, ticket = venda / inscrições,
 * e cada etapa do funil bate com o percentual exibido ao lado.
 * Nenhum dado de cliente, vendedor ou lead individual aparece aqui.
 */

export const LEGACY_DASHBOARD = {
  name: "Legacy Growth Dashboard",
  summary:
    "Painel unificado de marketing e vendas que cruza investimento em Meta Ads, captação em landing page e pipeline do CRM na mesma tela. Feito para responder uma pergunta que nenhuma das ferramentas isoladas respondia: quanto de venda saiu de cada real investido.",
  stack: ["Next.js", "Supabase", "Meta Marketing API", "Cursor"],
  disclaimer:
    "Reconstrução da interface com dados mascarados. Sistema proprietário em produção, sem exposição de cliente, vendedor ou lead.",

  filters: ["Período", "Estratégia", "Vendedor", "Polo"],
  tabs: ["Marketing", "Vendas"],
  activeTab: "Vendas",

  kpis: [
    { label: "Investimento", value: "R$ 58.400,00" },
    { label: "Inscrições", value: "640" },
    { label: "Venda ganha", value: "R$ 164.200,00", tone: "success" as const },
    { label: "C.P.L.", value: "R$ 100,69" },
    { label: "C.A.C.", value: "R$ 91,25" },
    { label: "Ticket médio", value: "R$ 256,56" },
  ],

  funnelTitle: "Funil de conversão",
  funnel: [
    { stage: "Leads novos", value: 580, display: "580", rate: null },
    { stage: "Contato realizado", value: 390, display: "390", rate: "67,2%" },
    { stage: "Interação", value: 229, display: "229", rate: "39,5%" },
    { stage: "Em negociação", value: 90, display: "90", rate: "15,5%" },
    { stage: "Ganho", value: 10, display: "10", rate: "1,7%" },
  ],
  funnelNote: "Percentual sempre sobre leads novos, não sobre a etapa anterior.",

  originTitle: "Leads por origem",
  origins: [
    { source: "Meta Ads", value: "1.084", meta: "pixel" },
    { source: "GreatPages", value: "1.362", meta: "landing page" },
    { source: "CRM", value: "16.400", meta: "base paga" },
  ],
  originNote:
    "A divergência entre pixel e CRM é o motivo do painel existir: o Meta enxergava uma fração do que o CRM registrava.",
} as const;
