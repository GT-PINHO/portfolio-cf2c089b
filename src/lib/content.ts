/**
 * CONTEÚDO EDITÁVEL — preencha os placeholders marcados com TODO.
 * Alterar aqui reflecte em toda a aplicação.
 */

// ─── HERO ─────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Especialista em Meta Ads · Tráfego Pago",
  headline: "Mais de R$18 milhões\nem mídia gerenciada.",
  subheadline:
    "Gestor de tráfego pago com foco em Meta Ads, funis de captação e rastreamento avançado. Quando a operação exige mais do que uma campanha, entrego também as automações e os sistemas que sustentam o resultado.",
  proofPoints: [
    "+R$18M em mídia gerenciada",
    "+400 mil leads captados",
    "40+ eventos mensais",
    "GTM · API de Conversão · Server-Side",
  ],
  cta: { primary: "Falar sobre o projeto", secondary: "Ver diferenciais" },
};

// ─── MÉTRICAS DE IMPACTO ───────────────────────────────────────────────────
// category "traffic" | "system" controla a ordem de exibição
export const METRICS = [
  {
    value: "R$18M+",
    label: "em mídia gerenciada",
    category: "traffic" as const,
  },
  {
    value: "400 mil+",
    label: "leads captados",
    category: "traffic" as const,
  },
  {
    value: "40+",
    label: "eventos mensais apoiados",
    category: "traffic" as const,
  },
  {
    value: "3+",
    label: "anos em operação nacional",
    category: "traffic" as const,
  },
];

// ─── PILARES (O que eu faço) ───────────────────────────────────────────────
export const PILLARS = [
  {
    id: "traffic",
    icon: "/icons/meta.svg",
    title: "Tráfego Pago & Performance",
    description:
      "Meta Ads de ponta a ponta — estruturação de funil, testes A/B, lookalikes, remarketing e escala orientada a CPL e ROAS. Rastreamento server-side com GTM, API de Conversão e Stape para dados confiáveis em qualquer volume.",
    tags: ["Meta Ads", "GTM", "Funil", "CPL/ROAS", "Server-side"],
    featured: true,               // card maior no desktop
  },
  {
    id: "automation",
    icon: "/icons/cursor.svg",
    title: "Automação & Sistemas",
    description:
      "Integração de CRM, deduplicação de leads, crons, webhooks e APIs que eliminam trabalho manual e garantem que nenhum lead se perca entre a captação e o comercial.",
    tags: ["CRM", "Dedup", "Webhooks", "Node.js", "EasyPanel"],
    featured: false,
  },
  {
    id: "data",
    icon: "/icons/vercel.svg",
    title: "Dados & Dashboards",
    description:
      "Painéis de gestão da operação em Supabase — visibilidade de CPL, volume de leads, performance de campanha e indicadores operacionais para decisão rápida.",
    tags: ["Supabase", "Dashboard", "KPIs", "Gestão"],
    featured: false,
  },
];

// ─── CASES ────────────────────────────────────────────────────────────────
// category "traffic" | "system" — o primeiro case deve ser traffic
export type CaseItem = {
  id: string;
  category: "traffic" | "system";
  title: string;
  context: string;
  action: string;
  result: string;
  tags: string[];
  href?: string;
};

export const CASES: CaseItem[] = [
  {
    id: "c1",
    category: "traffic",
    title: "Captação para eventos nacionais",
    context: "40+ eventos/mês no Brasil — campanhas por cidade e etapa de funil, sem margem para desperdício.",
    action: "Funis de inscrição em Meta Ads, testes A/B, lookalikes, remarketing e rastreamento server-side.",
    result: "+400 mil leads captados. CPL consistente com escala progressiva de verba.",
    tags: ["Meta Ads", "Funil", "Server-Side", "CPL"],
  },
  {
    id: "c2",
    category: "system",
    title: "Automação de Produtos — holding educacional",
    context: "Vendas reconciliadas manualmente com o fluxo de mensagens — retrabalho diário.",
    action: "Automação integrando produtos ao ManyChat, com painel de reconciliação para a gestão.",
    result: "100% automatizado — em produção diariamente.",
    tags: ["EasyPanel", "ManyChat", "Automação"],
  },
  {
    id: "c3",
    category: "traffic",
    title: "Rastreamento avançado — GTM, CAPI e Server-Side",
    context: "Alto volume com sinal comprometido por bloqueadores e cookies — otimização prejudicada.",
    action: "GTM, CAPI e Stape server-side, com auditoria de sinal para o Meta Ads.",
    result: "Sinal mais limpo e otimização mais precisa — replicado em múltiplas contas.",
    tags: ["GTM", "CAPI", "Stape", "Server-Side"],
  },
  {
    id: "c4",
    category: "system",
    title: "Sistema de Gestão de Eventos — operação nacional",
    context: "Duas planilhas, vários departamentos — erros e pouca visibilidade em 40+ eventos/mês.",
    action: "Sistema web único com controle centralizado para todos os times.",
    result: "Menos erros operacionais — sistema em produção.",
    tags: ["Sistema web", "Multi-departamento"],
  },
  {
    id: "c5",
    category: "system",
    title: "pinho-skills — Agentes & Skills para o Claude",
    context: "Skills de growth-ops com evidência — leilão, unit economics, tracking e CRO.",
    action: "Plugin open source: 12 skills, Quality Gate e eval runner com CI.",
    result: "20/20 evals passando. Open source no GitHub.",
    tags: ["Claude Code", "CI + Evals", "Growth-Ops"],
    href: "https://github.com/GT-PINHO/agent-skills",
  },
];

// ─── STACK ────────────────────────────────────────────────────────────────
export const STACK_GROUPS = [
  {
    label: "Tráfego & performance",
    chips: [
      { name: "Meta Ads", featured: true },
      { name: "GTM" },
      { name: "API de Conversão" },
      { name: "Stape / Server-Side" },
      { name: "Google Ads (básico)" },
    ],
  },
  {
    label: "Automação & sistemas",
    chips: [
      { name: "Node.js / TypeScript", featured: true },
      { name: "EasyPanel" },
      { name: "ManyChat" },
      { name: "Webhooks / APIs REST" },
      { name: "HubSpot" },
    ],
  },
  {
    label: "Dados & dashboards",
    chips: [
      { name: "Supabase", featured: true },
      { name: "SQL" },
      { name: "Vercel" },
      { name: "Google Sheets / Forms" },
    ],
  },
  {
    label: "IA & ferramentas",
    chips: [
      { name: "Claude / ChatGPT", featured: true },
      { name: "Cursor" },
      { name: "GitHub", href: "https://github.com/GT-PINHO" },
      { name: "Figma (básico)" },
    ],
  },
];

// ─── SOBRE ────────────────────────────────────────────────────────────────
export const SOBRE_HIGHLIGHTS = [
  "Gestor de Meta Ads com R$18M+ em mídia gerida",
  "400 mil+ leads captados para eventos nacionais",
  "3+ anos em operação de alta escala",
  "Rastreamento server-side: GTM, API de Conversão, Stape",
  "Constrói as automações e sistemas da operação",
];

export const SOBRE_BIO = [
  "Sou o David Pinho. Em 2023, saí de Senador Camará — Rio de Janeiro — e fui para Americana, SP, atrás de uma oportunidade que eu ainda estava construindo. Sem rede, sem histórico, do zero.",
  "Hoje gerencio campanhas nacionais de Meta Ads em uma holding de educação e eventos, com ações pontuais de resultado de seis dígitos em um único dia e mais de R$18M em mídia gerenciada. Resultado construído na prática, sem atalho.",
  "O que me diferencia: não paro no tráfego. Quando a operação precisa de uma ferramenta, eu construo — automação de CRM, deduplicação de leads, integrações e dashboards. Meu núcleo é performance. Meu diferencial é sustentar a operação com tracking, automações e sistemas.",
];

// ─── CONTATO ──────────────────────────────────────────────────────────────
export const CONTACT = {
  headline: "Vamos trabalhar juntos?",
  lead: "Disponível para gestão de tráfego, automação de operação e consultoria. Fale pelo canal que preferir.",
  location: "Americana — SP",
  email: "davidpinho.st@gmail.com",
  whatsapp: "5519997501584",
  whatsappDisplay: "(19) 99750-1584",
  instagram: "https://instagram.com/odavidpinho",
  linkedin: "https://linkedin.com/in/odavidpinho",
  github: "https://github.com/GT-PINHO",
};
