/**
 * Conteúdo editável do portfólio. Fonte única para toda a página.
 */

export const PROFILE = {
  name: "David Pinho",
  fullName: "David Edson da Silva Pinho",
  role: "Gestor de Tráfego Pago · MarTech & Growth Ops",
  location: "Americana, SP",
  availability: "Aberto a vagas remotas (CLT/PJ)",
  proofLine: "R$7M+ em mídia · 630 mil+ leads · Meta Ads nacional + stack proprietária de Growth Ops",
};

export const HERO = {
  eyebrow: PROFILE.role,
  headline: "Performance que conecta\nmídia, dado e operação.",
  subheadline:
    "Gestor de tráfego pago focado em Meta Ads, CPL e escala. Também construo tracking, CRM e sistemas MarTech para o lead chegar ao comercial com contexto, sem perder o controle do funil.",
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
    "Mais de três anos em Meta Ads em operações nacionais de educação e eventos, com diferencial em tracking, CRM e sistemas MarTech quando a escala exige engenharia além do painel de anúncios.",
  roles: [
    {
      title: "Gestor de Tráfego Pago · MarTech & Growth Ops",
      org: "Instituto Academy Mind (IAM Treinamentos) · Grupo Legacy Eco Holding",
      meta: "dez/2024 a atual",
      current: true,
      bullets: [
        "Meta Ads nacional com orçamento semanal de R$68 a 98 mil; contribuição em operação com +630 mil leads e R$7 mi em mídia.",
        "Tracking server-side (GTM/CAPI/Stape) e funil com CPL sob gestão direta em captação recorrente (Masterclasses e Imersões).",
        "Diferencial MarTech: migração n8n → NestJS/Docker (economia estimada R$ 4.300 a 5.000/mês) e pipeline idempotente HubSpot/ManyChat para 20 a 30k leads/mês.",
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
  href?: string;
  cta?: string;
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
    sector: "IAM · Automação de marketing",
    title: "O tráfego cresceu. A automação antiga não aguentou.",
    context:
      "Operação nacional recorrente no Instituto Academy Mind: 20 a 30k leads/mês entre Masterclasses regionais e Imersões.",
    problem:
      "A automação pronta (n8n) falhava todo dia, custava de R$ 4.300 a 4.500/mês (até ~R$ 5.000 no pico) e e-mail digitado errado quebrava CRM e credenciamento.",
    action:
      "Sistema próprio em NestJS + Docker, banco Supabase, envio sem duplicidade para HubSpot/ManyChat/Sheets e painel para o suporte corrigir e-mail e reprocessar.",
    impact: "Economia de ~R$ 4.3 a 5k/mês em licenças, 100% de sucesso em produção e base histórica migrada para HubSpot.",
    stack: ["NestJS", "Docker", "Supabase", "HubSpot", "ManyChat"],
    href: "/casos/growth-ops-iam",
    cta: "Ver estudo de caso",
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
      { name: "GTM / Server-Side", featured: true },
      { name: "CAPI / Stape", featured: true },
      { name: "UTM → CRM", featured: true },
      { name: "HubSpot / ManyChat API" },
    ],
  },
  {
    label: "MarTech / Engenharia",
    chips: [
      { name: "Next.js / React", featured: true },
      { name: "TypeScript", featured: true },
      { name: "NestJS / Node.js", featured: true },
      { name: "Docker / Easypanel", featured: true },
      { name: "Supabase", featured: true },
      { name: "Data Cleansing / Idempotência" },
    ],
  },
  {
    label: "IA / Produto",
    chips: [
      { name: "Claude / Cursor", featured: true },
      { name: "Observabilidade" },
      { name: "GitOps / CI-CD" },
      { name: "GitHub", href: "https://github.com/GT-PINHO" },
    ],
  },
];

export const CONTACT = {
  headline: "Vamos conversar?",
  lead:
    "Disponível para vagas remotas (CLT/PJ) em tráfego pago / Meta Ads, com diferencial em tracking, CRM e Growth Ops. WhatsApp é o canal mais rápido.",
  location: PROFILE.location,
  email: "davidpinho.st@gmail.com",
  whatsapp: "5519997501584",
  whatsappDisplay: "(19) 99750-1584",
  linkedin: "https://linkedin.com/in/odavidpinho",
  github: "https://github.com/GT-PINHO",
  instagram: "https://instagram.com/odavidpinho",
};
