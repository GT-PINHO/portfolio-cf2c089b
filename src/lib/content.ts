/**
 * Conteúdo editável do portfólio. Fonte única para toda a página.
 */

export const PROFILE = {
  name: "David Pinho",
  fullName: "David Edson da Silva Pinho",
  role: "Gestor de Tráfego Pago",
  specialty: "Automações e sistemas com IA",
  location: "Americana, SP",
  /** Hero: tem largura sobrando, cabe a versão completa. */
  availability: "Disponível para início imediato · Remoto, CLT ou PJ",
  /** Nav compacta: precisa caber inteiro, sem truncar. */
  navStatus: "Disponível para início imediato",
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
    value: "R$ 68-98k",
    label: "VERBA SEMANAL GERIDA",
  },
  {
    id: "anos",
    value: "3 anos",
    label: "EM OPERAÇÃO NACIONAL",
    countTo: 3,
    suffix: " anos",
  },
];

/** As frentes que eu vendo e executo. Nenhuma é acessório da outra. */
export type OperationTrack = "Tráfego pago" | "Automações e IA" | "Sites e interfaces";

export type OperationPillar = {
  id: string;
  track: OperationTrack;
  pillar: string;
  description: string;
  tools: string[];
  proof: { value: string; unit: string };
  href?: string;
  cta?: string;
};

export const OPERATION_PILLARS: OperationPillar[] = [
  {
    id: "midia",
    track: "Tráfego pago",
    pillar: "Meta Ads & Performance",
    description:
      "Gestão de verba em campanha nacional recorrente, com funil por etapa e teste contínuo de criativo e público.",
    tools: ["Meta Ads", "CPL / ROAS", "Testes A/B"],
    proof: { value: "R$ 83k", unit: "de verba semanal gerida" },
  },
  {
    id: "tracking",
    track: "Tráfego pago",
    pillar: "Tracking & Dados",
    description:
      "Sinal server-side para o Meta enxergar a conversão certa, e UTM que sobrevive até o CRM.",
    tools: ["GTM Server-Side", "CAPI / Stape", "UTM → CRM"],
    proof: { value: "100%", unit: "dos leads com origem rastreada" },
  },
  {
    id: "crm",
    track: "Automações e IA",
    pillar: "Automação de CRM",
    description:
      "Integro anúncio, chatbot e CRM por API, com upsert idempotente: o lead chega estruturado no comercial, sem duplicidade e sem perda.",
    tools: ["HubSpot API", "ManyChat API", "Webhooks"],
    proof: { value: "25k", unit: "leads/mês no pipeline" },
  },
  {
    id: "sistemas",
    track: "Automações e IA",
    pillar: "APIs e sistemas sob medida",
    description:
      "Desenvolvo a API e o banco quando a ferramenta no-code não sustenta o volume. Do webhook ao CRM, com log de cada passo do lead.",
    tools: ["NestJS", "Docker", "Supabase"],
    proof: { value: "R$ 4,5k", unit: "economia mensal em licenças" },
    href: "/casos/growth-ops-iam",
    cta: "Ver estudo de caso",
  },
  {
    id: "lp",
    track: "Sites e interfaces",
    pillar: "Sites e landing pages",
    description:
      "Página construída para o tráfego que vai rodar nela: rápida, responsiva e com tracking ligado ao CRM desde o primeiro deploy.",
    tools: ["Next.js", "React", "Tailwind", "Vercel"],
    proof: { value: "Este site", unit: "feito do zero, sem template" },
  },
  {
    id: "dashboards",
    track: "Sites e interfaces",
    pillar: "Dashboards e painéis",
    description:
      "Interface que mostra a operação em tempo real: métrica por etapa, log por lead e correção de dado sujo em um clique.",
    tools: ["React", "Supabase", "Meta API"],
    proof: { value: "16k", unit: "leads monitorados no painel" },
    href: "#painel",
    cta: "Ver o painel",
  },
];

/**
 * O caminho real de um lead. Cada etapa carrega a frente que a executa:
 * lido em sequência, prova que as três frentes são um sistema só.
 */
export type FlowStep = {
  id: string;
  step: string;
  tool: string;
  track: OperationTrack;
};

export const SYSTEM_FLOW: {
  caption: string;
  steps: FlowStep[];
  outcome: { step: string; tool: string };
  note: string;
} = {
  caption: "O caminho de um lead, e quem executa cada etapa",
  steps: [
    { id: "anuncio", step: "Anúncio", tool: "Meta Ads", track: "Tráfego pago" },
    { id: "lp", step: "Landing page", tool: "Next.js", track: "Sites e interfaces" },
    { id: "sinal", step: "Sinal", tool: "GTM / CAPI", track: "Tráfego pago" },
    { id: "api", step: "Automação", tool: "NestJS", track: "Automações e IA" },
    { id: "crm", step: "CRM", tool: "HubSpot", track: "Automações e IA" },
  ],
  outcome: { step: "Comercial", tool: "Deal estruturado" },
  note: "Um painel próprio observa a cadeia inteira em tempo real e devolve o lead com dado sujo para reprocessamento.",
};

export const OPERATION = {
  kicker: "Operação",
  title: "Três frentes, uma operação só.",
  lead: "Meta Ads na entrada, engenharia no meio e a interface que o cliente vê na ponta. Faço as três, e é a combinação que segura escala.",
  flow: SYSTEM_FLOW,
  pillars: OPERATION_PILLARS,
};


export const HERO = {
  eyebrow: PROFILE.role,
  /** Uma linha por frase: a quebra é diagramação, não acaso do wrap. */
  headlineLines: [
    "Meta Ads em escala nacional.",
    "E os sistemas com IA que sustentam o funil.",
  ],
  /**
   * Não repete os números da KpiStrip logo abaixo. O trabalho dele é
   * ancorar tempo de mercado e dizer onde a operação começa e termina.
   */
  subheadline:
    "Mais de 3 anos gerindo Meta Ads em operação nacional. Desenvolvo o tracking, a automação e os sistemas que levam cada lead até a venda.",
  cta: {
    primary: { label: "Ver currículo", href: "/cv" },
    secondary: { label: "Falar no WhatsApp", href: "whatsapp" },
  },
};

export const EXPERIENCE = {
  kicker: "Experiência",
  title: "Trajetória em operação real.",
  lead:
    "Mais de três anos em Meta Ads em operações nacionais de educação e eventos, somados ao desenvolvimento da stack de automação que sustenta esse funil.",
  roles: [
    {
      title: "Gestor de Tráfego Pago · MarTech & Growth Ops",
      org: "Instituto Academy Mind (IAM Treinamentos) · Grupo Legacy Eco Holding",
      meta: "dez/2024 a ago/2026",
      current: false,
      highlight: "R$ 68-98k/semana",
      bullets: [
        "Meta Ads nacional; contribuição em operação com +630 mil leads e R$7 mi em mídia.",
        "Tracking server-side (GTM/CAPI/Stape) e funil com CPL sob gestão direta em captação recorrente.",
        "Migração n8n → NestJS/Docker (R$ 4,5k/mês economizados) e pipeline HubSpot/ManyChat para 20-30k leads/mês.",
      ],
    },
    {
      title: "Assistente de Tráfego Digital",
      org: "Intencional Negócios Digitais",
      meta: "fev/2023 a nov/2024 · Americana, SP",
      current: false,
      highlight: "240 mil+ leads",
      bullets: [
        "Meta Ads ponta a ponta para cerca de 40 eventos por mês em todo o Brasil.",
        "Mais de 240 mil leads com CPL médio de R$ 8, com funil por cidade e escala de verba.",
        "Públicos, lookalikes, remarketing e auditoria de sinal via GTM.",
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
    sector: "IAM · Sistemas e automação",
    title: "Troquei o n8n por uma API própria em NestJS e zerei o custo de licença.",
    impact:
      "30 mil leads/mês quebravam a automação no-code. Reconstruí o pipeline com logs granulares, upsert idempotente e Data Cleansing assistido: 100% de processamento sem erro, R$ 4,5k/mês economizados e base histórica migrada para a HubSpot.",
    stack: ["NestJS", "Docker", "Supabase", "HubSpot", "ManyChat"],
    featured: true,
    metrics: [
      { value: "100%", label: "sucesso" },
      { value: "25k", label: "leads/mês" },
      { value: "R$ 4,5k", label: "/mês economizados" },
    ],
    href: "/casos/growth-ops-iam",
    cta: "Ver estudo de caso",
  },
  {
    id: "a1",
    sector: "IAM Treinamentos · Meta Ads",
    title: "Captação nacional: treinamentos, imersões e mentoria",
    impact:
      "R$ 68-98k/semana em Meta Ads com CPL sob gestão direta, cobrindo 45 a 68 Masterclasses por mês. Tracking server-side entrega o lead ao comercial com origem e praça preservadas.",
    stack: ["Meta Ads", "Funil", "GTM / CAPI", "UTM → CRM"],
  },
  {
    id: "a2",
    sector: "Intencional · Meta Ads",
    title: "Captação para eventos e educação",
    impact:
      "Cerca de 40 eventos por mês em praças diferentes do Brasil, somando mais de 240 mil leads com CPL médio de R$ 8 e rotina padronizada por cidade.",
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

export type StackChip = { name: string; featured?: boolean; href?: string };
export type StackGroup = { label: string; chips: StackChip[] };

export const STACK_GROUPS: StackGroup[] = [
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
      { name: "Agentes & Skills", featured: true },
      { name: "Observabilidade" },
      { name: "GitOps / CI-CD" },
      { name: "GitHub", href: "https://github.com/GT-PINHO" },
    ],
  },
];

export const STACK = {
  kicker: "Stack & código",
  title: "A prova técnica, aberta.",
  lead: "Grande parte da operação é confidencial. O que dá para mostrar está no GitHub.",
  groups: STACK_GROUPS,
  projects: PUBLIC_PROJECTS,
};

export const CONTACT = {
  headline: "Vamos conversar?",
  lead:
    "Disponível para início imediato em vagas remotas (CLT/PJ) de tráfego pago, MarTech e Growth Engineering. Atendo também projetos de automação e sistemas com IA. WhatsApp é o canal mais rápido.",
  location: PROFILE.location,
  email: "davidpinho.st@gmail.com",
  whatsapp: "5519997501584",
  whatsappDisplay: "(19) 99750-1584",
  linkedin: "https://linkedin.com/in/odavidpinho",
  github: "https://github.com/GT-PINHO",
  instagram: "https://instagram.com/odavidpinho",
};
