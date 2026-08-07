/**
 * Conteúdo editável do portfólio. Fonte única para toda a página.
 */

export const PROFILE = {
  name: "David Pinho",
  fullName: "David Edson da Silva Pinho",
  role: "Gestor de Tráfego Pago · MarTech & Growth Ops",
  location: "Americana, SP",
  availability: "Aberto a vagas remotas · CLT ou PJ",
  /** @deprecated Migrado para KPIS / KpiStrip — mantido só se algum consumidor antigo ainda ler. */
  proofLine: "R$7M+ em mídia · 630 mil+ leads · Meta Ads nacional + stack proprietária de Growth Ops",
};

export type KpiItem = {
  id: string;
  /** Texto exibido (fallback / reduced-motion). */
  value: string;
  label: string;
  /** Valor numérico para CountUp, quando aplicável. */
  countTo?: number;
  prefix?: string;
  suffix?: string;
  format?: "plain" | "pt" | "compact-k";
};

export const KPIS: KpiItem[] = [
  {
    id: "investimento",
    value: "R$ 7M+",
    label: "INVESTIMENTO GERIDO",
    countTo: 7,
    prefix: "R$ ",
    suffix: "M+",
  },
  {
    id: "leads",
    value: "630 mil+",
    label: "LEADS GERADOS",
    countTo: 630,
    suffix: " mil+",
  },
  {
    id: "verba",
    value: "R$ 68–98k",
    label: "VERBA SEMANAL EM META ADS",
  },
  {
    id: "anos",
    value: "3 anos",
    label: "EM OPERAÇÃO NACIONAL",
    countTo: 3,
    suffix: " anos",
  },
];

export type OperationPillar = {
  id: string;
  pillar: string;
  tools: string[];
  proof: { value: string; unit: string };
  /** Matiz 0–360 para pulse dos cubos na troca. */
  accentShift?: number;
};

export const OPERATION_PILLARS: OperationPillar[] = [
  {
    id: "midia",
    pillar: "Meta Ads & Performance",
    tools: ["Meta Ads", "Funis & CPL / ROAS", "Testes A/B", "Lookalikes & Remarketing"],
    proof: { value: "R$ 68–98k", unit: "verba semanal sob gestão" },
    accentShift: 0,
  },
  {
    id: "tracking",
    pillar: "Tracking & Dados",
    tools: ["GTM / Server-Side", "CAPI / Stape", "UTM → CRM", "Auditoria de sinal"],
    proof: { value: "Server-side", unit: "menos sinal perdido, decisão confiável" },
    accentShift: 18,
  },
  {
    id: "crm",
    pillar: "CRM & Automação",
    tools: ["HubSpot API", "ManyChat API", "Webhooks", "Idempotência"],
    proof: { value: "20–30k", unit: "leads/mês no pipeline" },
    accentShift: 36,
  },
  {
    id: "sistemas",
    pillar: "IA & Sistemas aplicados",
    tools: ["NestJS / Node.js", "TypeScript", "Docker / Easypanel", "Supabase", "Claude / Cursor"],
    proof: { value: "~R$ 4,5k", unit: "economia mensal em licenças" },
    accentShift: 52,
  },
];

export const OPERATION = {
  kicker: "Operação",
  title: "Tráfego primeiro. Engenharia quando a escala pede.",
  lead: "Meta Ads é o centro. Tracking, CRM e automação entram quando o funil começa a vazar.",
  headerText: "TRÁFEGO PRIMEIRO",
  footerText: "EM PRODUÇÃO",
  pillars: OPERATION_PILLARS,
};

export const PROOF_STRIP = {
  label: "CÓDIGO PÚBLICO",
  note: "Grande parte do trabalho é confidencial. O código público é a evidência técnica.",
  links: [
    {
      title: "agent-skills",
      description: "skills de growth-ops para Claude, CI com 20/20 evals",
      href: "https://github.com/GT-PINHO/agent-skills",
    },
    {
      title: "GT-PINHO no GitHub",
      description: null as string | null,
      href: "https://github.com/GT-PINHO",
    },
  ],
};

export const HERO = {
  eyebrow: PROFILE.role,
  headline: "Meta Ads em escala nacional, com o lead chegando inteiro no comercial.",
  subheadline:
    "Gestor de Tráfego Pago com R$ 68–98k/semana sob gestão. Quando a escala exige, também construo o tracking e a automação por trás do funil.",
  cta: {
    primary: { label: "Falar no WhatsApp", href: "whatsapp" },
    secondary: { label: "Baixar CV", href: "/Curriculo_David_Pinho.pdf" },
  },
};

/** @deprecated Absorvido por OPERATION / OperationSlider. */
export const WHAT_I_DO = {
  kicker: "O que eu faço",
  title: "Não é só tráfego.\nÉ o ciclo completo.",
  lead:
    "Gerencio Meta Ads com disciplina de CPL e ROAS, e construo o que falta entre o anúncio e o time comercial: tracking, automação e visão de dados.",
  pillars: OPERATION_PILLARS.map((p) => ({
    id: p.id,
    title: p.pillar,
    description: p.proof.unit,
  })),
};

export const EXPERIENCE = {
  kicker: "Experiência",
  title: "Trajetória em operação real.",
  lead:
    "Mais de três anos em Meta Ads em operações nacionais de educação e eventos, com diferencial em tracking, CRM e sistemas MarTech quando a escala exige.",
  roles: [
    {
      title: "Gestor de Tráfego Pago · MarTech & Growth Ops",
      org: "Instituto Academy Mind (IAM Treinamentos) · Grupo Legacy Eco Holding",
      meta: "dez/2024 a atual",
      current: true,
      highlight: "R$ 68–98k/semana",
      bullets: [
        "Meta Ads nacional; contribuição em operação com +630 mil leads e R$7 mi em mídia.",
        "Tracking server-side (GTM/CAPI/Stape) e funil com CPL sob gestão direta em captação recorrente.",
        "Migração n8n → NestJS/Docker (~R$ 4,5k/mês economizados) e pipeline HubSpot/ManyChat para 20–30k leads/mês.",
      ],
    },
    {
      title: "Assistente de Tráfego Digital",
      org: "Intencional Negócios Digitais",
      meta: "fev/2023 a dez/2024 · Americana, SP",
      current: false,
      highlight: "Dezenas de eventos/mês",
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
  impact: string;
  stack: string[];
  featured?: boolean;
  metrics?: { value: string; label: string }[];
  href?: string;
  cta?: string;
  /** Campos legados — cards compactos não renderizam. */
  context?: string;
  problem?: string;
  action?: string;
};

export const CASES: CaseItem[] = [
  {
    id: "a3",
    sector: "IAM · Automação de marketing",
    title: "O tráfego cresceu. A automação antiga não aguentou.",
    impact:
      "Economia de ~R$ 4,5k/mês em licenças, 100% de processamento sem erro e base histórica migrada para HubSpot.",
    stack: ["NestJS", "Docker", "Supabase", "HubSpot", "ManyChat"],
    featured: true,
    metrics: [
      { value: "100%", label: "sucesso" },
      { value: "20–30k", label: "leads/mês" },
      { value: "~R$ 4,5k", label: "/mês economizados" },
    ],
    href: "/casos/growth-ops-iam",
    cta: "Ver estudo de caso",
  },
  {
    id: "a1",
    sector: "IAM Treinamentos",
    title: "Captação nacional: treinamentos, imersões e mentoria",
    impact:
      "Escala nacional em Meta Ads com CPL sob gestão direta e lead chegando ao comercial com origem e contexto.",
    stack: ["Meta Ads", "Funil", "GTM / CAPI", "UTM → CRM"],
  },
  {
    id: "a2",
    sector: "Intencional",
    title: "Captação para eventos e educação",
    impact:
      "Rotina padronizada por praça para dezenas de eventos por mês, com CPL previsível.",
    stack: ["Meta Ads", "Segmentação", "Lookalike", "GTM"],
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
