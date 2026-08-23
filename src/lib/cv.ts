/** Página do currículo: fonte única, sempre atual. */
export const CV_URL = "/cv";
/**
 * Arquivo baixável em public/. Fonte única do caminho: importe daqui, nunca
 * escreva a string no componente. Foi assim que o link do estudo de caso
 * ficou 404 quando o PDF foi renomeado.
 *
 * Hoje é um PDF mantido à mão. `npm run cv:pdf` gera a partir da rota /cv e
 * SOBRESCREVE este arquivo: só rode se quiser voltar à versão automática.
 */
export const CV_PDF_URL = "/Curriculo_DavidPinho.pdf";
export const CV_FILENAME = "Curriculo_DavidPinho.pdf";

/**
 * Conteúdo exclusivo do currículo. Experiência, competências e contato
 * vêm de content.ts, então o CV e o site não podem divergir de novo.
 */
export const CV = {
  summaryTitle: "Resumo profissional",
  summary:
    "Gestor de tráfego pago com mais de 3 anos em operações nacionais de treinamentos e desenvolvimento. Meta Ads de médio e alto volume, com orçamento semanal de até R$ 98 mil, otimização de CPL e ROAS, funil e escala. Além da gestão de mídia, desenvolvo tracking server-side (GTM/CAPI), integrações de CRM e sistemas MarTech, incluindo infraestrutura proprietária em NestJS para 20 a 30 mil leads por mês com idempotência, observabilidade e redução de custo de automação.",

  projectsTitle: "Projetos",
  projects: [
    {
      name: "Arquitetura Growth Ops IAM",
      text: "Migração de no-code para NestJS/Docker com recuperação híbrida de leads, pipeline idempotente e dashboard de observabilidade. Estudo de caso publicado no portfólio.",
    },
    {
      name: "Legacy Growth Dashboard",
      text: "Painel unificado de marketing e vendas (investimento, CPL, CAC, ticket e funil) em Supabase. Sistema proprietário, dados confidenciais.",
    },
    {
      name: "agent-skills",
      text: "Plugin open source de growth-ops para Claude (leilão, unit economics, tracking e CRO), com Quality Gate, eval runner e CI. github.com/GT-PINHO/agent-skills",
    },
  ],

  skillsTitle: "Competências técnicas",

  educationTitle: "Desenvolvimento profissional",
  education: [
    "Base metodológica em performance e Meta Ads: Comunidade Sobral de Tráfego.",
    "GTM Web e Server-Side: rastreamento e qualidade de sinal.",
    "Google Ads: certificação Skillshop (Search), em andamento.",
    "Aprendizado contínuo desde 2023: tráfego, funis, IA aplicada e escalabilidade.",
  ],
} as const;
