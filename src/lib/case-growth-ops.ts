/** Conteúdo do estudo de caso MarTech / Instituto Academy Mind */

export type ScenarioStat = {
  label: string;
  value: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
  format?: "plain" | "pt" | "compact-k";
};

export const GROWTH_OPS_CASE = {
  slug: "growth-ops-iam",
  path: "/casos/growth-ops-iam",
  sector: "Instituto Academy Mind · MarTech",
  kicker: "Estudo de caso · Engenharia de MarTech",
  title:
    "Arquitetura de Growth Ops: Migração de No-Code para Código Proprietário em NestJS e Docker com Recuperação Híbrida de Leads",
  subtitle:
    "Como substitui n8n Cloud por uma API proprietária em NestJS, com observabilidade, limpeza híbrida de dados e taxa de sucesso de 100% em produção.",
  client: "Instituto Academy Mind (IAM Treinamentos)",
  role: "Arquitetura, backend NestJS, integrações e dashboard de observabilidade",

  scenario: {
    title: "O cenário & escala",
    body:
      "Uma operação de tráfego recorrente nacional (não é lançamento único). São processados de 20.000 a 30.000 leads mensais distribuídos dinamicamente entre 45 e 68 Masterclasses (palestras regionais) e de 2 a 4 Imersões presenciais todo mês.",
    stats: [
      {
        label: "Leads / mês",
        value: "20 a 30k",
        countTo: 30,
        suffix: "k",
        prefix: "20 a ",
        format: "plain",
      },
      {
        label: "Masterclasses",
        value: "45 a 68",
        countTo: 68,
        prefix: "45 a ",
        format: "plain",
      },
      {
        label: "Imersões / mês",
        value: "2 a 4",
        countTo: 4,
        prefix: "2 a ",
        format: "plain",
      },
      { label: "Modelo", value: "Recorrente" },
    ] as ScenarioStat[],
  },

  challenge: {
    title: "O desafio técnico",
    body:
      "O ecossistema anterior em n8n Cloud gerava gargalos severos de processamento diários devido ao volume ininterrupto de webhooks e tagueamento regional. O modelo de cobrança por execução tornava o custo de software insustentável para um fluxo de 20 a 30 mil leads/mês: estimado entre R$ 4.300 e R$ 4.500 mensais. Com execuções extras para aguentar o pico de 30k leads, a conta facilmente chegaria a cerca de R$ 5.000/mês. Além disso, o erro humano na digitação de e-mails (gamil, gnail) quebrava o funil comercial e as planilhas de credenciamento.",
    pains: [
      {
        title: "Gargalo diário",
        text: "Volume contínuo de webhooks e tags regionais saturava o runtime no-code.",
      },
      {
        title: "Custo por execução",
        text: "Para 20 a 30k leads/mês: R$ 4.300 a 4.500 estimados; com extras no pico, ~R$ 5.000/mês.",
      },
      {
        title: "E-mail quebrado",
        text: "Typos (gamil, gnail) derrubavam CRM, ManyChat e credenciamento.",
      },
    ],
  },

  solution: {
    title: "A solução arquitetada",
    lead: "Stack proprietária, idempotente e observável: do webhook ao CRM, com recuperação humana quando o dado chega sujo.",
    pillars: [
      {
        title: "Back-end",
        text: "API proprietária em NestJS (hardcode), com conteinerização via Dockerfile e deploy automatizado (CI/CD via GitHub) no Easypanel (VPS).",
        tags: ["NestJS", "Docker", "GitHub Actions", "Easypanel"],
      },
      {
        title: "Persistência",
        text: "Banco relacional Supabase mapeando logs granulares de cada passo do lead (webhook_received → extract_start → qualificacao_ok → …).",
        tags: ["Supabase", "Logs granulares"],
      },
      {
        title: "Integrações",
        text: "Fluxo inteligente e idempotente (duplicidade zero) enviando Deals estruturados para a HubSpot API, acionando réguas no ManyChat API e sincronizando planilhas regionais via Google Sheets API.",
        tags: ["HubSpot", "ManyChat", "Google Sheets", "Idempotência"],
      },
      {
        title: "Dashboard de Observabilidade",
        text: "Interface front-end com métricas em tempo real (Meta Ads, GreatPages, Sheets, ManyChat, HubSpot), logs analíticos por lead e módulo híbrido de Data Cleansing. O suporte corrige e-mail e reprocessa com 1 clique, sem duplicar Deal no CRM.",
        tags: ["Observabilidade", "Data Cleansing", "Reprocessamento"],
      },
    ],
  },

  flowSteps: [
    { id: "webhook_received", label: "Webhook recebido", detail: "Lead entra pela landing (GreatPages)" },
    { id: "extract_start", label: "Extração", detail: "Parse de nome, e-mail, telefone, UTM e cidade" },
    { id: "qualificacao_ok", label: "Qualificação", detail: "Regras de oferta e praça regional" },
    { id: "localiza_cidade_ok", label: "Cidade / tag", detail: "Mapeamento dinâmico Masterclass × cidade" },
    { id: "manychat_upsert", label: "ManyChat", detail: "Upsert idempotente + tag regional" },
    { id: "sheets_sync", label: "Sheets regional", detail: "Credenciamento por praça" },
    { id: "hubspot_deal", label: "HubSpot Deal", detail: "Deal estruturado sem duplicidade" },
    { id: "flow_end", label: "Flow end", detail: "Log persistido no Supabase" },
  ],

  results: {
    title: "Resultados",
    items: [
      {
        title: "Eficiência financeira",
        text: "Substituição de um custo estimado de R$ 4.300 a 4.500/mês no n8n Cloud (até ~R$ 5.000 com execuções extras para 20 a 30k leads) por infraestrutura fixa mínima em VPS, com gasto com licenças de automação praticamente zerado.",
      },
      {
        title: "Estabilidade",
        text: "Fim absoluto dos gargalos de requisições e taxa de sucesso de 100.00% em produção.",
      },
      {
        title: "Migração de dados",
        text: "Sucesso na extração, tratamento e higienização de toda a base histórica do CRM antigo para o novo padrão da HubSpot API.",
      },
    ],
  },

  dashboardDemo: {
    product: "Masterclass",
    period: "01/07/26 → 24/07/26",
    kpis: [
      {
        key: "sucesso",
        label: "Sucesso",
        value: "9.414",
        countTo: 9414,
        tone: "success" as const,
      },
      {
        key: "aviso",
        label: "Com aviso",
        value: "6.780",
        countTo: 6780,
        tone: "warning" as const,
      },
      {
        key: "erros",
        label: "Erros",
        value: "0",
        countTo: 0,
        tone: "danger" as const,
      },
      {
        key: "total",
        label: "Total",
        value: "16.194",
        countTo: 16194,
        tone: "info" as const,
      },
    ],
    successRate: "100.00%",
    funnel: [
      { stage: "Meta Ads", value: "R$ 243.445,90", meta: "Investimento base" },
      { stage: "GreatPages", value: "16.194", meta: "100% da etapa anterior" },
      { stage: "Sheets", value: "16.194", meta: "100% da etapa anterior" },
      { stage: "ManyChat", value: "16.133", meta: "99.62% da etapa anterior" },
    ],
    records: [
      {
        time: "24/07/2026, 20:59:24",
        name: "Lead regional · Sorocaba",
        status: "success_with_warning",
        email: "l***@gmail.com",
        city: "SOROCABA",
        mcId: "1672•••",
      },
      {
        time: "24/07/2026, 20:58:11",
        name: "Lead regional · Maringá",
        status: "corrigido",
        email: "m***@gmail.com",
        city: "MARINGA",
        mcId: "1671•••",
      },
      {
        time: "24/07/2026, 20:57:03",
        name: "Lead regional · Brusque",
        status: "success",
        email: "b***@hotmail.com",
        city: "BRUSQUE",
        mcId: "1670•••",
      },
    ],
    activity: [
      { tag: "MC", name: "Tag mc-sorocaba-22-07 aplicada", time: "20:59:24", status: "ok" },
      { tag: "HS", name: "Deal upsert sem duplicidade", time: "20:58:41", status: "ok" },
      { tag: "CL", name: "E-mail higienizado e reprocessado", time: "20:58:11", status: "corrigido" },
    ],
  },
} as const;

export type GrowthOpsCase = typeof GROWTH_OPS_CASE;
