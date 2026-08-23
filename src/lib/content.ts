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
  /**
   * Faixa semanal em vez de total acumulado: é o número que eu consigo
   * sustentar sozinho. "Em operação nacional" no rótulo mantém a leitura de
   * contexto, não de conta ativa hoje.
   */
  {
    id: "investimento",
    value: "R$ 68-98 mil",
    label: "VERBA SEMANAL EM OPERAÇÃO NACIONAL",
    countTo: 98,
    prefix: "R$ 68-",
    suffix: " mil",
  },
  /**
   * O total é da operação, não uma autoria minha: nenhum bullet reivindica
   * os 630 mil. A prova de volume que é minha está no pipeline, em 20-30k/mês.
   */
  {
    id: "leads",
    value: "630 mil+",
    label: "LEADS EM OPERAÇÃO NACIONAL",
    countTo: 630,
    suffix: " mil+",
  },
  /** fev/2023 a jul/2026 são 3 anos e 5 meses. O "+" não é retórica. */
  {
    id: "anos",
    value: "3+ anos",
    label: "GERINDO META ADS",
    countTo: 3,
    suffix: "+ anos",
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
    proof: { value: "45-68", unit: "Masterclasses captadas por mês" },
  },
  {
    id: "tracking",
    track: "Tráfego pago",
    pillar: "Tracking & Dados",
    description:
      "Sinal server-side para o Meta enxergar a conversão certa, e UTM que sobrevive até o CRM.",
    tools: ["GTM Server-Side", "CAPI / Stape", "UTM → CRM"],
    proof: { value: "UTM", unit: "preservada do anúncio ao CRM" },
  },
  {
    id: "crm",
    track: "Automações e IA",
    pillar: "Automação de CRM",
    description:
      "Integro anúncio, chatbot e CRM por API, com upsert idempotente: o lead chega estruturado no comercial, sem duplicidade e sem perda.",
    tools: ["HubSpot API", "ManyChat API", "Webhooks"],
    proof: { value: "20-30k", unit: "leads/mês no pipeline" },
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
    proof: { value: "5 fontes", unit: "de dados unificadas em um painel" },
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
  /**
   * Primeira lâmina é criativo, não descrição: a versão anterior ("Meta Ads em
   * escala nacional. E os sistemas com IA que sustentam o funil.") dizia o que
   * eu sou em cinco linhas, sem dizer o que quem contrata ganha.
   *
   * O ângulo é o argumento econômico: normalmente são duas contratações, um
   * gestor de tráfego e um dev. Aqui é uma. Uma linha por frase: a quebra é
   * diagramação, não acaso do wrap.
   */
  headlineLines: [
    "Gestor de tráfego que também",
    "constrói o sistema por trás do funil.",
  ],
  /**
   * Prova a promessa da headline com o caso que só quem fez as duas pontas
   * consegue contar. Os 630 mil são da operação. Nenhuma linha aqui
   * reivindica autoria sobre eles.
   */
  subheadline:
    "Mais de 3 anos de Meta Ads em operação nacional, 630 mil leads. Quando a automação no-code parou de aguentar o volume, eu escrevi a API que aguentou. E o painel que mostra onde cada lead está.",
  cta: {
    primary: { label: "Ver currículo", href: "/cv" },
    secondary: { label: "Falar no WhatsApp", href: "whatsapp" },
  },
};

export const EXPERIENCE = {
  kicker: "Experiência",
  title: "Trajetória em operação real.",
  lead:
    "Mais de três anos em Meta Ads em operações nacionais de treinamentos e desenvolvimento, somados ao desenvolvimento da stack de automação que sustenta esse funil.",
  roles: [
    {
      title: "Gestor de Tráfego Pago · MarTech & Growth Ops",
      org: "Instituto Academy Mind (IAM Treinamentos) · Grupo Legacy Eco Holding",
      meta: "dez/2024 a jul/2026",
      current: false,
      highlight: "R$ 68-98k/semana",
      bullets: [
        "Meta Ads nacional em captação recorrente: 45 a 68 Masterclasses e 2 a 4 imersões por mês, com CPL sob gestão direta.",
        "Tracking server-side (GTM/CAPI/Stape) com UTM preservada do anúncio até o CRM.",
        "Migração n8n → NestJS/Docker (R$ 4,5k/mês economizados) e pipeline HubSpot/ManyChat para 20 a 30 mil leads/mês.",
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
  /** Campos legados: cards compactos não renderizam. */
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
      "20 a 30 mil leads/mês quebravam a automação no-code. Reconstruí o pipeline com logs granulares, upsert idempotente e Data Cleansing assistido: 100% de processamento sem erro, R$ 4,5k/mês economizados e base histórica migrada para a HubSpot.",
    stack: ["NestJS", "Docker", "Supabase", "HubSpot", "ManyChat"],
    featured: true,
    metrics: [
      { value: "100%", label: "sucesso" },
      { value: "20-30k", label: "leads/mês" },
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
    "Disponível para início imediato em vagas remotas (CLT/PJ) de tráfego pago e MarTech. Atendo também projetos de automação e sistemas com IA. WhatsApp é o canal mais rápido.",
  location: PROFILE.location,
  email: "davidpinho.st@gmail.com",
  whatsapp: "5519997501584",
  whatsappDisplay: "(19) 99750-1584",
  linkedin: "https://linkedin.com/in/odavidpinho",
  github: "https://github.com/GT-PINHO",
  instagram: "https://instagram.com/odavidpinho",
};
