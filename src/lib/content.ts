/**
 * CONTEÚDO EDITÁVEL — alterar aqui reflecte em toda a aplicação.
 */

// ─── HERO ─────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Gestor de Tráfego, Desenvolvedor de Sistemas com IA",
  headline: "630 mil leads.\nR$7M em mídia.",
  subheadline:
    "Gestor de tráfego pago com foco em Meta Ads, funis de captação e rastreamento avançado. Quando a operação exige mais do que campanha, entrego também os sistemas com IA, as automações UTM→CRM e as integrações que fazem o lead chegar qualificado ao comercial.",
  proofPoints: [
    "CPL R$13 em gestão direta",
    "UTM → CRM com origem do lead",
    "Rastreamento server-side (GTM, CAPI)",
  ],
  cta: { primary: "Falar sobre o projeto", secondary: "Ver o que faço" },
};

// ─── PILARES (O que eu faço) ───────────────────────────────────────────────
export const PILLARS = [
  {
    id: "traffic",
    icon: "/icons/meta.svg",
    title: "Tráfego Pago & Performance",
    description:
      "Meta Ads de ponta a ponta: estruturação de funil, testes A/B, lookalikes, remarketing e escala orientada a CPL e ROAS. Orçamento semanal de até R$98 mil com rastreamento server-side para dados confiáveis em qualquer volume.",
    tags: ["Meta Ads", "GTM", "Funil", "CPL/ROAS", "Server-side"],
    featured: true,
  },
  {
    id: "automation",
    icon: "/icons/cursor.svg",
    title: "Automação & CRM",
    description:
      "Leads chegam ao comercial com contexto: de onde veio, qual campanha, qual produto. Construo integrações via API e webhooks — domino a lógica de CRM; adapto para a ferramenta que sua operação já usa.",
    tags: ["UTM Tracking", "Integração CRM", "Inside Sales", "Node.js"],
    featured: false,
  },
  {
    id: "data",
    icon: "/icons/vercel.svg",
    title: "Sistemas com IA & Dashboards",
    description:
      "Painéis de gestão (CPL, CAC, ticket médio, funil), automações com Node.js e IA aplicada para acelerar análise de criativos, copy e decisões operacionais.",
    tags: ["IA aplicada", "Supabase", "Dashboard", "Node.js", "Claude"],
    featured: false,
  },
];

// ─── CASES ────────────────────────────────────────────────────────────────
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
    action: "Funis em Meta Ads por etapa, lookalikes, remarketing, testes A/B e rastreamento server-side.",
    result: "+21 mil leads sob gestão direta com CPL de R$13.",
    tags: ["Meta Ads", "Funil", "CPL R$13", "Server-Side"],
  },
  {
    id: "c2",
    category: "system",
    title: "UTM → CRM para inside sales",
    context: "Leads chegavam ao comercial sem saber de qual campanha ou produto vinham.",
    action: "Automação que captura parâmetros UTM e entrega ao CRM com origem, campanha e produto — pronto para o time de vendas.",
    result: "Lead qualificado no CRM com contexto completo. Fluxo em produção no dia a dia do comercial.",
    tags: ["UTM", "Integração CRM", "Inside Sales"],
  },
  {
    id: "c3",
    category: "system",
    title: "Automação de produtos no CRM",
    context: "Lançamentos exigiam cadastro e reconciliação manual entre CRM, mensagens e gestão.",
    action: "Integrações por estratégia de produto, com fluxo automatizado e painel de reconciliação.",
    result: "Cadastro e reconciliação automatizados, em uso diário pela operação.",
    tags: ["CRM", "Automação", "ManyChat"],
  },
  {
    id: "c4",
    category: "system",
    title: "Legacy Growth Dashboard",
    context: "Marketing e vendas sem visão unificada de investimento, CPL, CAC e funil.",
    action: "Painel em Supabase: investimento, CPL, CAC, ticket médio e funil para decisão diária.",
    result: "Dashboard utilizado diariamente pela equipe.",
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
    label: "CRM & automação",
    chips: [
      { name: "Integração CRM", featured: true },
      { name: "UTM Tracking", featured: true },
      { name: "APIs / Webhooks", featured: true },
      { name: "Node.js / TypeScript" },
      { name: "ManyChat" },
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
export const SOBRE_BIO = [
  "Sou o David Pinho. Em 2023, saí de Senador Camará, no Rio de Janeiro, e fui para Americana, SP, atrás de uma oportunidade que eu ainda estava construindo. Sem rede, sem histórico, do zero.",
  "Hoje gerencio campanhas nacionais de Meta Ads no Grupo Legacy Eco Holding (IAM Treinamentos), com orçamento semanal de até R$98 mil e mais de 21 mil leads sob gestão direta.",
  "O que me diferencia: não paro no tráfego. Construo automações que levam o lead da campanha até o CRM com dados de origem, integro os sistemas que a operação já usa e entrego dashboards para decisão diária. Meu núcleo é performance. Meu diferencial é fechar o ciclo entre mídia, dado e venda.",
];

// ─── CONTATO ──────────────────────────────────────────────────────────────
export const CONTACT = {
  headline: "Vamos trabalhar juntos?",
  lead: "Disponível para gestão de tráfego, automação de operação e integrações. Fale pelo canal que preferir.",
  location: "Americana, SP",
  email: "davidpinho.st@gmail.com",
  whatsapp: "5519997501584",
  whatsappDisplay: "(19) 99750-1584",
  instagram: "https://instagram.com/odavidpinho",
  linkedin: "https://linkedin.com/in/odavidpinho",
  github: "https://github.com/GT-PINHO",
};
