/**
 * CONTEÚDO EDITÁVEL — preencha os placeholders marcados com TODO.
 * Alterar aqui reflecte em toda a aplicação.
 */

// ─── HERO ─────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Gestor de Tráfego, Desenvolvedor de Sistemas com IA",
  headline: "630 mil leads.\nR$7M em mídia.",
  subheadline:
    "Gestor de tráfego pago com foco em Meta Ads, funis de captação e rastreamento avançado. Quando a operação exige mais do que campanha, entrego também os sistemas com IA, as automações UTM→CRM e as integrações que fazem o lead chegar qualificado ao inside sales.",
  proofPoints: [
    "R$7M+ em mídia na operação nacional",
    "630 mil+ leads na operação",
    "CPL R$13 em gestão direta",
    "UTM → CRM, HubSpot, Nectar",
  ],
  cta: { primary: "Falar sobre o projeto", secondary: "Ver diferenciais" },
};

// ─── MÉTRICAS DE IMPACTO ───────────────────────────────────────────────────
// category "traffic" | "system" controla a ordem de exibição
export const METRICS = [
  {
    value: "R$7M+",
    label: "em mídia investida",
    category: "traffic" as const,
  },
  {
    value: "630 mil+",
    label: "leads na operação nacional",
    category: "traffic" as const,
  },
  {
    value: "CPL R$13",
    label: "em gestão direta",
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
      "Meta Ads de ponta a ponta: estruturação de funil, testes A/B, lookalikes, remarketing e escala orientada a CPL e ROAS. Orçamento semanal de até R$98 mil com rastreamento server-side (GTM, API de Conversão, Stape) para dados confiáveis em qualquer volume.",
    tags: ["Meta Ads", "GTM", "Funil", "CPL/ROAS", "Server-side"],
    featured: true,
  },
  {
    id: "automation",
    icon: "/icons/cursor.svg",
    title: "Automação, CRM & Inside Sales",
    description:
      "Automações em hardcode que rastreiam leads com UTM e entregam ao CRM da equipe comercial com contexto de origem e campanha. Integrações em HubSpot e Nectar CRM alinhadas às estratégias de produtos do IAM, do lead captado ao inside sales, sem perda de sinal.",
    tags: ["UTM Tracking", "HubSpot", "Nectar", "Inside Sales", "Node.js"],
    featured: false,
  },
  {
    id: "data",
    icon: "/icons/vercel.svg",
    title: "Sistemas com IA & Dashboards",
    description:
      "Desenvolvedor de sistemas com IA na prática: painéis de gestão (CPL, CAC, ticket médio, funil), automações com Node.js e uso de Claude/Cursor para acelerar análise de criativos, copy e decisões operacionais.",
    tags: ["IA aplicada", "Supabase", "Dashboard", "Node.js", "Claude"],
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
    title: "Captação nacional, IAM Treinamentos",
    context: "Operação nacional de educação com orçamento semanal de R$68k a R$98k, com escala e controle de CPL.",
    action: "Funis em Meta Ads por etapa de funil, lookalikes, remarketing, testes A/B e rastreamento server-side.",
    result: "+21 mil leads sob gestão direta com CPL de R$13. Operação somou 630 mil+ leads e R$7M em mídia.",
    tags: ["Meta Ads", "Funil", "CPL R$13", "Server-Side"],
  },
  {
    id: "c2",
    category: "system",
    title: "UTM → CRM para inside sales",
    context: "Leads chegavam ao comercial sem contexto de origem, campanha ou produto, gerando retrabalho e perda de qualificação.",
    action: "Automações em hardcode capturando parâmetros UTM e entregando ao HubSpot e Nectar com dados completos para o time de vendas.",
    result: "Lead qualificado chega ao CRM com origem rastreada. Fluxo em produção na rotina de inside sales.",
    tags: ["UTM", "HubSpot", "Nectar", "Hardcode"],
  },
  {
    id: "c3",
    category: "system",
    title: "Automação de Produtos, HubSpot e Nectar",
    context: "Estratégias de produtos do IAM exigiam cadastro e reconciliação manual entre CRM, mensagens e gestão.",
    action: "Integrações no HubSpot e Nectar por estratégia de lançamento, com fluxo no ManyChat e painel de reconciliação.",
    result: "Cadastro e reconciliação automatizados, em uso diário pela operação.",
    tags: ["HubSpot", "Nectar", "ManyChat", "IAM"],
  },
  {
    id: "c4",
    category: "system",
    title: "Legacy Growth Dashboard",
    context: "Marketing e vendas sem visão unificada de investimento, CPL, CAC e funil de conversão.",
    action: "Painel em Supabase com SQL: investimento, CPL, CAC, ticket médio e funil para decisão diária.",
    result: "Dashboard utilizado diariamente pela equipe para tomada de decisão.",
    tags: ["Supabase", "SQL", "CAC", "Dashboard"],
  },
  {
    id: "c5",
    category: "system",
    title: "pinho-skills: Agentes e Skills para o Claude",
    context: "Skills de growth-ops com evidência: leilão, unit economics, tracking e CRO.",
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
      { name: "Google Ads (Search/PMax)" },
    ],
  },
  {
    label: "CRM, automação & inside sales",
    chips: [
      { name: "HubSpot", featured: true },
      { name: "Nectar CRM", featured: true },
      { name: "UTM Tracking", featured: true },
      { name: "Node.js / TypeScript" },
      { name: "ManyChat" },
      { name: "Webhooks / APIs REST" },
    ],
  },
  {
    label: "Dados & dashboards",
    chips: [
      { name: "Supabase", featured: true },
      { name: "PostgreSQL / SQL" },
      { name: "Vercel" },
      { name: "Google Sheets" },
    ],
  },
  {
    label: "IA & ferramentas",
    chips: [
      { name: "Sistemas com IA", featured: true },
      { name: "Claude / Cursor", featured: true },
      { name: "GitHub", href: "https://github.com/GT-PINHO" },
      { name: "EasyPanel" },
      { name: "Figma (básico)" },
    ],
  },
];

// ─── SOBRE ────────────────────────────────────────────────────────────────
export const SOBRE_HIGHLIGHTS = [
  "Gestor de Meta Ads com R$7M+ em mídia na operação nacional",
  "630 mil+ leads e CPL de R$13 em gestão direta",
  "Desenvolvedor de sistemas com IA na operação real",
  "Automações UTM → CRM para inside sales (HubSpot e Nectar)",
  "Rastreamento server-side: GTM, API de Conversão, Stape",
];

export const SOBRE_BIO = [
  "Sou o David Pinho. Em 2023, saí de Senador Camará, no Rio de Janeiro, e fui para Americana, SP, atrás de uma oportunidade que eu ainda estava construindo. Sem rede, sem histórico, do zero.",
  "Hoje gerencio campanhas nacionais de Meta Ads no Grupo Legacy Eco Holding (IAM Treinamentos), com orçamento semanal de até R$98 mil, mais de 21 mil leads sob gestão direta e uma operação que somou 630 mil+ leads e R$7M em mídia investida.",
  "O que me diferencia: não paro no tráfego. Sou desenvolvedor de sistemas com IA. Construo automações em hardcode que rastreiam leads com UTM até o CRM do inside sales, integro HubSpot e Nectar por estratégia de produtos e entrego dashboards que a equipe usa todo dia. Meu núcleo é performance. Meu diferencial é fechar o ciclo entre mídia, dado e venda.",
];

// ─── CONTATO ──────────────────────────────────────────────────────────────
export const CONTACT = {
  headline: "Vamos trabalhar juntos?",
  lead: "Disponível para gestão de tráfego, automação de operação, integrações CRM e consultoria. Fale pelo canal que preferir.",
  location: "Americana, SP",
  email: "davidpinho.st@gmail.com",
  whatsapp: "5519997501584",
  whatsappDisplay: "(19) 99750-1584",
  instagram: "https://instagram.com/odavidpinho",
  linkedin: "https://linkedin.com/in/odavidpinho",
  github: "https://github.com/GT-PINHO",
};
