/**
 * Legacy Growth Dashboard: painel proprietário de marketing e vendas.
 *
 * Reconstrução da UI com números mascarados. Os valores foram deslocados em
 * relação à produção, mas fecham entre si, e quem entende de funil vai
 * conferir. As regras que este arquivo tem que respeitar:
 *
 *   CPL    = investimento / leads novos
 *   CAC    = investimento / vendas ganhas      (nunca / leads: CAC > CPL sempre)
 *   Ticket = venda ganha / vendas ganhas       (faixa real do negócio: R$ 1k a 5k)
 *   Funil  = monótono decrescente, % sempre sobre leads novos
 *   Origem = pixel < CRM, e CRM = leads novos do funil
 *
 * Conferência do conjunto atual (semana de 07 a 13/07/26):
 *   74.800 / 3.240 = 23,086…  → CPL R$ 23,09
 *   74.800 / 78    = 958,97…  → CAC R$ 958,97
 *   232.440 / 78   = 2.980,00 → Ticket R$ 2.980,00
 *   232.440 / 74.800 = 3,1x   → ROAS implícito, legível sem estar escrito
 *   2.177/3.240 = 67,2% · 1.280/3.240 = 39,5% · 502/3.240 = 15,5% · 78/3.240 = 2,4%
 *   1.994/3.240 = 61,5% do que o CRM registrou apareceu no pixel
 *
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
  /** Sem recorte de tempo, R$ 74,8 mil não diz se é semana, mês ou ano. */
  period: "07/07/26 → 13/07/26",

  kpis: [
    { label: "Investimento", value: "R$ 74.800,00" },
    { label: "Leads novos", value: "3.240" },
    { label: "Venda ganha", value: "R$ 232.440,00", tone: "success" as const },
    { label: "C.P.L.", value: "R$ 23,09" },
    { label: "C.A.C.", value: "R$ 958,97" },
    { label: "Ticket médio", value: "R$ 2.980,00" },
  ],

  funnelTitle: "Funil de conversão",
  funnel: [
    { stage: "Leads novos", value: 3240, display: "3.240", rate: null },
    { stage: "Contato realizado", value: 2177, display: "2.177", rate: "67,2%" },
    { stage: "Interação", value: 1280, display: "1.280", rate: "39,5%" },
    { stage: "Em negociação", value: 502, display: "502", rate: "15,5%" },
    { stage: "Ganho", value: 78, display: "78", rate: "2,4%" },
  ],
  funnelNote:
    "Percentual sempre sobre leads novos, não sobre a etapa anterior. As 78 vendas ganhas são o denominador do CAC e do ticket médio ao lado.",

  originTitle: "Leads por origem",
  origins: [
    { source: "Meta Ads", value: "1.994", meta: "pixel" },
    { source: "GreatPages", value: "3.286", meta: "landing page" },
    { source: "CRM", value: "3.240", meta: "registro" },
  ],
  originNote:
    "O pixel contabilizou 1.994 dos 3.240 leads que o CRM registrou: 61%. Essa divergência é o motivo do painel existir, porque o Meta enxergava uma fração do que o CRM tinha.",
} as const;
