import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

const pdfUrl = "/Curriculo_DavidPinho.pdf";

export const metadata: Metadata = {
  title: "Currículo | David Pinho",
  description:
    "Currículo de David Pinho, Gestor de Tráfego Pago e MarTech.",
  alternates: {
    canonical: "/cv",
  },
};

const experience = [
  {
    title: "Gestor de Tráfego Pago e MarTech",
    company: "Instituto Academy Mind, Grupo Legacy Eco Holding",
    period: "dez/2024 a ago/2026",
    bullets: [
      "Gestão de campanhas para masterclasses e imersões de inteligência emocional e empresarial.",
      "Orçamento semanal entre R$ 68 mil e R$ 98 mil, com foco em CPL, ROAS e escala.",
      "Criativos estáticos, roteiros de anúncio, estratégia de landing page e tracking server-side.",
      "Sistema de leads (landing page, ManyChat, Sheets e HubSpot) migrado do n8n para NestJS e Docker no Easypanel.",
    ],
  },
  {
    title: "Assistente de Tráfego Digital",
    company: "Intencional Negócios Digitais",
    period: "fev/2023 a nov/2024, Americana, SP",
    bullets: [
      "Meta Ads ponta a ponta para cerca de 40 eventos por mês em todo o Brasil.",
      "Mais de 240 mil leads sob gestão, com CPL médio de R$ 8.",
      "Públicos, lookalikes, remarketing e auditoria de sinal via GTM.",
    ],
  },
];

const projects = [
  {
    name: "Arquitetura Growth Ops IAM",
    text: "Migração de no code para NestJS e Docker, com recuperação híbrida de leads, pipeline idempotente e dashboard de observabilidade.",
  },
  {
    name: "Legacy Growth Dashboard",
    text: "Painel unificado de marketing e vendas em Supabase, com investimento, CPL, CAC, ticket e evolução do funil.",
  },
  {
    name: "agent skills",
    text: "Plugin open source de growth ops para Claude, com Quality Gate, eval runner e CI.",
  },
  {
    name: "Portfólio pessoal",
    text: "Site construído do zero em Next.js e TypeScript, do layout ao deploy na Vercel.",
  },
];

export default function CvPage() {
  return (
    <main className="cv-page">
      <div className="cv-actions">
        <Link className="cv-back" href="/">
          <ArrowLeft size={16} />
          Voltar ao portfólio
        </Link>
        <a className="cv-download" href={pdfUrl} download>
          <Download size={16} />
          Baixar PDF
        </a>
      </div>

      <article className="cv-doc">
        <header className="cv-header">
          <div className="cv-header-text">
            <h1 className="cv-name">David Edson da Silva Pinho</h1>
            <p className="cv-role">
              Gestor de Tráfego Pago · Meta Ads (Facebook e Instagram),
              <br />
              Tracking e Integração de Leads
            </p>
            <p className="cv-address">Jardim Guanabara, Americana/SP</p>
            <div className="cv-contacts">
              <p>
                <a href="tel:+5519997501584">(19) 99750-1584</a>
                {" | "}
                <a href="mailto:davidpinho.st@gmail.com">
                  davidpinho.st@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://linkedin.com/in/odavidpinho"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/odavidpinho
                </a>
                {" | "}
                <a
                  href="https://github.com/GT-PINHO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/GT-PINHO
                </a>
                {" | "}
                <a
                  href="https://portfolio-davidpinho.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portfolio-davidpinho.vercel.app
                </a>
              </p>
            </div>
          </div>
          <Image
            className="cv-photo"
            src="/cv-foto.jpg"
            alt="Foto de David Pinho"
            width={300}
            height={400}
            priority
            unoptimized
          />
        </header>

        <section>
          <h2 className="cv-h2">Resumo profissional</h2>
          <p className="cv-body">
            Gestor de tráfego pago com mais de 3 anos em operações nacionais de
            educação em inteligência emocional e empresarial. Atuação em Meta
            Ads de médio e alto volume, com orçamento semanal de R$ 68 mil a R$
            98 mil, otimização de CPL e ROAS, funil e escala. Mais de R$ 7
            milhões em investimento gerenciado, 630 mil leads em operação
            nacional e mais de 240 mil leads sob gestão direta. Também
            implementei tracking web e server side e desenvolvi um sistema
            interno de integração de leads em NestJS para 20 a 30 mil leads por
            mês.
          </p>
        </section>

        <section>
          <h2 className="cv-h2">Experiência profissional</h2>
          {experience.map((role) => (
            <div className="cv-role-block" key={role.title}>
              <h3 className="cv-h3">{role.title}</h3>
              <p className="cv-org">{role.company}</p>
              <p className="cv-meta">{role.period}</p>
              <ul className="cv-list">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className="cv-h2">Projetos</h2>
          <ul className="cv-list">
            {projects.map((project) => (
              <li key={project.name}>
                <strong>{project.name}:</strong> {project.text}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="cv-h2">Competências técnicas</h2>
          <ul className="cv-list">
            <li>
              <strong>Meta Ads e performance:</strong> Facebook Ads e Instagram
              Ads pelo Gerenciador de Anúncios, Pixel, funis, CPL, ROAS, testes
              A/B, lookalikes e remarketing.
            </li>
            <li>
              <strong>Outras plataformas de mídia:</strong> Google Ads e TikTok
              Ads em nível básico, em estudo.
            </li>
            <li>
              <strong>Tracking e dados:</strong> CAPI, UTMs, CRM HubSpot e
              ManyChat API. Conhecimento em GTM web e server side e Stape.
            </li>
            <li>
              <strong>MarTech e desenvolvimento web:</strong> Next.js, React,
              TypeScript, UI/UX, NestJS, Node.js, Docker, Easypanel e Supabase.
            </li>
            <li>
              <strong>IA e produto:</strong> Claude, Cursor, agentes, skills,
              observabilidade, GitOps e CI/CD.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="cv-h2">Formação e cursos</h2>
          <ul className="cv-list">
            <li>
              <strong>Ensino médio:</strong> completo.
            </li>
            <li>
              <strong>Comunidade Sobral:</strong> formação em tráfego pago e
              Meta Ads.
            </li>
            <li>
              <strong>Rastreamento 100% (Dericson Calari):</strong> tracking web
              e server side, curso custeado pela empresa.
            </li>
            <li>
              <strong>Autodidata:</strong> tracking, funis, IA aplicada e
              desenvolvimento web.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="cv-h2">Idiomas</h2>
          <ul className="cv-list">
            <li>
              <strong>Inglês:</strong> básico (autodidata).
            </li>
            <li>
              <strong>Espanhol:</strong> básico (autodidata).
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
