/**
 * Conteúdo editável do portfólio. Fonte única para toda a página.
 */

export const PROFILE = {
  name: "David Pinho",
  fullName: "David Edson da Silva Pinho",
  role: "Meta Ads Specialist · Growth Ops, Tracking, CRM & AI Systems",
  location: "Americana, SP",
  availability: "Aberto a vagas remotas (CLT/PJ)",
  proofLine: "R$7M+ em mídia gerenciada · 630 mil+ leads · +3 anos em operações nacionais",
};

export const HERO = {
  eyebrow: PROFILE.role,
  headline: "Performance que conecta\nmídia, dado e operação.",
  subheadline:
    "Meta Ads, tracking server-side, integrações CRM e sistemas com IA. Faço a campanha chegar ao comercial com dados e contexto.",
  cta: {
    primary: { label: "Falar no WhatsApp", href: "whatsapp" },
    secondary: { label: "Baixar CV", href: "/Curriculo_David_Pinho.pdf" },
  },
  openSource: {
    label: "Open source: agent-skills",
    href: "https://github.com/GT-PINHO/agent-skills",
  },
};

export const WHAT_I_DO = {
  kicker: "O que eu faço",
  title: "Não é só tráfego.\nÉ o ciclo completo.",
  lead:
    "Gerencio Meta Ads com disciplina de CPL e ROAS, e construo o que falta entre o anúncio e o time comercial: tracking, automação e visão de dados.",
  pillars: [
    {
      id: "meta",
      title: "Meta Ads & Performance",
      description:
        "Funil, testes A/B, lookalikes, remarketing e escala com controle de custo. Operações de médio e alto volume, com foco em lead qualificado.",
    },
    {
      id: "tracking",
      title: "Tracking & Dados",
      description:
        "GTM, CAPI, Stape e server-side. Menos sinal perdido, mais decisão com dados que o time consegue confiar.",
    },
    {
      id: "crm",
      title: "CRM & Automação",
      description:
        "UTM → CRM via API e webhooks. O lead chega com origem, campanha e contexto. Domino a lógica; adapto à ferramenta da operação.",
    },
    {
      id: "ai",
      title: "IA & Sistemas aplicados",
      description:
        "Dashboards, automações e ferramentas com Node.js, TypeScript, Supabase, Claude e Cursor. IA a serviço da operação.",
    },
  ],
};

export const EXPERIENCE = {
  kicker: "Experiência",
  title: "Trajetória em operação real.",
  lead:
    "Mais de três anos em Meta Ads em operações nacionais de educação, eventos e mentoria. Já gerenciei R$7M+ em mídia e mais de 630 mil leads, com responsabilidade sobre funil e custo.",
  roles: [
    {
      title: "Gestor de Tráfego Pago",
      org: "IAM Treinamentos · Instituto Academy Mind (Grupo Legacy Eco Holding)",
      meta: "dez/2024 a atual",
      current: true,
      bullets: [
        "Meta Ads em campanhas nacionais de médio/alto volume, com foco em CPL, escala e qualidade de lead.",
        "Tracking server-side (GTM, CAPI, Stape) e integrações que levam o lead ao CRM com contexto.",
        "Painéis e automações para funil, investimento e indicadores no dia a dia da operação.",
      ],
    },
    {
      title: "Assistente de Tráfego Digital",
      org: "Intencional Negócios Digitais",
      meta: "fev/2023 a dez/2024 · Americana, SP",
      current: false,
      bullets: [
        "Meta Ads ponta a ponta para eventos e ofertas em diversas praças no Brasil.",
        "Funil por etapa, testes A/B, escala de verba e auditoria de sinal via GTM.",
      ],
    },
  ],
};

export type CaseItem = {
  id: string;
  sector: string;
  title: string;
  context: string;
  problem: string;
  action: string;
  impact: string;
  stack: string[];
};

export const CASES: CaseItem[] = [
  {
    id: "a1",
    sector: "IAM Treinamentos",
    title: "Captação nacional: treinamentos, imersões e mentoria",
    context:
      "No IAM (Instituto Academy Mind), operação nacional com múltiplas ofertas e escala contínua em Meta Ads.",
    problem:
      "Crescer volume de leads sem perder controle de CPL, funil e qualidade de rastreamento.",
    action:
      "Funis por oferta e etapa, testes A/B, tracking server-side e UTM → CRM para inside sales.",
    impact: "Escala nacional com CPL sob gestão direta e lead com contexto no comercial.",
    stack: ["Meta Ads", "Funil", "GTM / CAPI", "UTM → CRM"],
  },
  {
    id: "a2",
    sector: "Intencional",
    title: "Captação para eventos e educação",
    context:
      "Na Intencional Negócios Digitais, agenda recorrente de eventos em várias cidades, com prazos curtos.",
    problem:
      "Campanhas fragmentadas por cidade e data, com risco de sobreposição e CPL instável.",
    action:
      "Estrutura padronizada por praça e funil, testes contínuos e escala progressiva de verba.",
    impact: "Rotina repetível para dezenas de eventos por mês, com processo previsível.",
    stack: ["Meta Ads", "Segmentação", "Lookalike", "GTM"],
  },
  {
    id: "a3",
    sector: "IAM · Growth Ops",
    title: "Integração CRM, automações e IA na operação",
    context:
      "No IAM, captura, CRM e acompanhamento ainda dependiam de processos manuais entre mídia e comercial.",
    problem:
      "Retrabalho no cadastro, lead sem contexto e pouca automação no fluxo operacional.",
    action:
      "Integrações via API/webhooks, painéis de reconciliação e IA onde acelerava a rotina.",
    impact: "Lead no CRM com origem; menos trabalho manual e painéis em uso diário.",
    stack: ["CRM APIs", "Node.js", "Supabase", "IA aplicada"],
  },
];

export type PublicProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  status: string;
  featured?: boolean;
};

export const PUBLIC_PROJECTS: PublicProject[] = [
  {
    id: "p1",
    title: "agent-skills",
    description:
      "Plugin open source com skills de growth-ops para Claude: leilão, unit economics, tracking e CRO. Quality Gate, eval runner e CI com 20/20 evals.",
    tags: ["Claude Code", "Growth-Ops", "CI + Evals", "Open source"],
    href: "https://github.com/GT-PINHO/agent-skills",
    status: "Destaque",
    featured: true,
  },
  {
    id: "p2",
    title: "GT-PINHO no GitHub",
    description:
      "Repositórios públicos em TypeScript, automações e sistemas aplicados a performance. Prova técnica além da operação confidencial.",
    tags: ["TypeScript", "Node.js", "Automação", "IA"],
    href: "https://github.com/GT-PINHO",
    status: "Perfil",
  },
];

export const STACK_GROUPS = [
  {
    label: "Meta Ads / Performance",
    chips: [
      { name: "Meta Ads", featured: true },
      { name: "Funis & CPL / ROAS", featured: true },
      { name: "Testes A/B" },
      { name: "Lookalikes & Remarketing" },
    ],
  },
  {
    label: "Tracking / Dados",
    chips: [
      { name: "GTM", featured: true },
      { name: "CAPI", featured: true },
      { name: "Stape / Server-Side", featured: true },
      { name: "UTM Tracking" },
    ],
  },
  {
    label: "CRM / Automação",
    chips: [
      { name: "Integração CRM", featured: true },
      { name: "APIs / Webhooks", featured: true },
      { name: "Node.js / TypeScript", featured: true },
      { name: "ManyChat" },
    ],
  },
  {
    label: "IA / Desenvolvimento",
    chips: [
      { name: "Claude / Cursor", featured: true },
      { name: "Supabase", featured: true },
      { name: "MCP" },
      { name: "GitHub", href: "https://github.com/GT-PINHO" },
    ],
  },
];

export const CONTACT = {
  headline: "Vamos conversar?",
  lead:
    "Disponível para vagas remotas (CLT/PJ) em Meta Ads, tracking, CRM e sistemas com IA. WhatsApp é o canal mais rápido.",
  location: PROFILE.location,
  email: "davidpinho.st@gmail.com",
  whatsapp: "5519997501584",
  whatsappDisplay: "(19) 99750-1584",
  linkedin: "https://linkedin.com/in/odavidpinho",
  github: "https://github.com/GT-PINHO",
  instagram: "https://instagram.com/odavidpinho",
};
