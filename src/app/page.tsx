"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  FileText,
  Braces,
  ChartNoAxesCombined,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  MonitorSmartphone,
  PanelsTopLeft,
  Radar,
} from "lucide-react";

const whatsapp =
  "https://wa.me/5519997501584?text=Olá%2C%20David!%20Encontrei%20seu%20portfólio%20e%20gostaria%20de%20conversar.";
const skills = [
  [
    ChartNoAxesCombined,
    "Performance",
    "Meta Ads, funis, CPL, ROAS, testes A/B, lookalikes e remarketing.",
  ],
  [
    Radar,
    "Tracking & dados",
    "GTM server-side, CAPI, Stape, UTMs, HubSpot e ManyChat API.",
  ],
  [
    Braces,
    "MarTech",
    "Next.js, TypeScript, NestJS, Docker, Supabase e pipelines idempotentes.",
  ],
  [
    Bot,
    "IA & automação",
    "Agentes, skills, automação de WhatsApp, observabilidade e CI/CD.",
  ],
] as const;
const projects = [
  {
    n: "01",
    label: "CASE PUBLICADO",
    title: "Arquitetura Growth Ops IAM",
    text: "Migração de no-code para NestJS e Docker, com recuperação híbrida de leads, pipeline idempotente e dashboard de observabilidade.",
    tags: ["NestJS", "Docker", "HubSpot", "20 a 30k leads/mês"],
    href: "/casos/growth-ops-iam",
  },
  {
    n: "02",
    label: "PRODUTO INTERNO",
    title: "Legacy Growth Dashboard",
    text: "Painel unificado de marketing e vendas para acompanhar investimento, CPL, CAC, ticket e evolução do funil.",
    tags: ["Supabase", "Analytics", "Marketing & vendas"],
    href: "/casos/growth-ops-iam#dashboard",
  },
  {
    n: "03",
    label: "OPEN SOURCE",
    title: "agent-skills",
    text: "Plugin de growth ops para Claude: leilão, unit economics, tracking e CRO, com Quality Gate, eval runner e CI.",
    tags: ["Claude", "Growth Ops", "CI/CD"],
    href: "https://github.com/GT-PINHO/agent-skills",
  },
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7%" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="nav-shell">
        <a href="#top" className="brand">
          David Pinho
        </a>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <a
          className="nav-cta"
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos conversar <ArrowUpRight size={15} />
        </a>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>
            <span className="hero-line enter-2">Gestor de</span>
            <span className="hero-line enter-3">
              <em>tráfego pago</em>
            </span>
            <span className="hero-line enter-4">e MarTech.</span>
          </h1>
          <p className="hero-enter enter-5">
            Uno mídia, dados, tracking e automação para construir operações de
            aquisição mais eficientes, mensuráveis e preparadas para escalar.
          </p>
          <div className="hero-proof hero-enter enter-6">
            <strong>R$ 7 milhões+</strong>
            <span>em investimento gerenciado</span>
          </div>
          <div className="hero-actions hero-enter enter-6">
            <a className="button primary" href="#projetos">
              Conhecer meu trabalho <ArrowDownRight size={18} />
            </a>
            <a className="button primary" href="/cv">
              Ver currículo <FileText size={18} />
            </a>
          </div>
        </div>
        <aside className="hero-visual hero-enter enter-4">
          <div className="portrait-wrap">
            <Image
              src="/david.png"
              alt="David Pinho"
              width={918}
              height={1024}
              priority
            />
          </div>
          <div className="metric-card">
            <strong>Tráfego Pago & MarTech</strong>
            <small>Growth Ops, tracking e automação</small>
          </div>
        </aside>
      </section>
      <section className="metrics" data-reveal>
        <div>
          <strong>630 mil+</strong>
          <span>leads em operação nacional</span>
        </div>
        <div>
          <strong>20 a 30 mil</strong>
          <span>leads/mês no pipeline</span>
        </div>
        <div>
          <strong>R$ 4,5 mil</strong>
          <span>economia/mês ao sair do n8n</span>
        </div>
        <div>
          <strong>3+ anos</strong>
          <span>gerindo Meta Ads</span>
        </div>
      </section>
      <section className="ticker">
        <div>
          GROWTH OPS <i>✦</i> META ADS <i>✦</i> MARTECH <i>✦</i> SERVER-SIDE
          TRACKING <i>✦</i> AUTOMAÇÃO COM IA <i>✦</i>
        </div>
      </section>
      <section className="section split" id="sobre" data-reveal>
        <div>
          <p className="section-no">01 / SOBRE</p>
          <h2>
            Mais que apertar botões:
            <br />
            eu desenho a operação.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            Atuei no Instituto Academy Mind, do Grupo Legacy Eco Holding, em
            operações nacionais de educação voltadas à inteligência emocional e
            empresarial. Combinei leitura de funil, compra de mídia, criativos e
            estratégia de landing page.
          </p>
          <p>
            Meu trabalho vai do anúncio ao CRM: sinal, tracking, integrações e
            automações que reduzem atrito e dão visibilidade para decisões de
            escala.
          </p>
          <div className="location">
            <MapPin size={17} /> Americana, SP · Remoto, CLT ou PJ
          </div>
        </div>
      </section>
      <section className="capabilities" data-reveal>
        {skills.map(([Icon, title, text]) => (
          <article key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="section complementary" data-reveal>
        <div className="complementary-head">
          <p className="section-no">02 / ALÉM DA MÍDIA</p>
          <h2>
            A jornada depois
            <br />
            <em>do anúncio.</em>
          </h2>
          <p>
            A mídia é o centro. Também construo o que recebe o clique: site,
            interface e a experiência até o CRM.
          </p>
        </div>
        <div className="complementary-grid">
          <article>
            <MonitorSmartphone />
            <div>
              <span>DESENVOLVIMENTO WEB</span>
              <h3>Do briefing ao código em produção</h3>
              <p>
                Eu construo o site do zero em Next.js e TypeScript: estrutura,
                UI/UX, conteúdo, mobile e deploy. IA e Cursor entram como
                ferramentas de execução. Este portfólio é um produto publicado.
              </p>
            </div>
          </article>
          <article>
            <PanelsTopLeft />
            <div>
              <span>OUTRAS PLATAFORMAS DE MÍDIA</span>
              <h3>Google Ads e TikTok Ads</h3>
              <p>
                Operação nas duas plataformas. A profundidade profissional está
                em Meta Ads.
              </p>
            </div>
          </article>
          <div className="learning-note">
            <span>COMO EU OPERO</span>
            <p>
              Se a jornada pede site, tracking ou automação, eu construo a peça
              e coloco em produção. Não fica em teoria.
            </p>
          </div>
        </div>
      </section>
      <section className="section experience" id="experiencia" data-reveal>
        <div>
          <p className="section-no">03 / EXPERIÊNCIA</p>
          <h2>
            Escala com
            <br />
            responsabilidade.
          </h2>
        </div>
        <div className="timeline">
          <article>
            <div className="date">DEZ 2024 / 01 AGO 2026</div>
            <div>
              <h3>
                Gestor de Tráfego Pago <span>· MarTech & Growth Ops</span>
              </h3>
              <h4>Instituto Academy Mind (IAM) · Grupo Legacy Eco Holding</h4>
              <ul>
                <li>
                  <CheckCircle2 /> Em 2025, operação solo de campanhas de
                  masterclasses e imersões de inteligência emocional e
                  empresarial.
                </li>
                <li>
                  <CheckCircle2 /> Criativos estáticos, roteiros de anúncio,
                  landing pages e tracking server-side.
                </li>
                <li>
                  <CheckCircle2 /> Migração de n8n para NestJS/Docker e automação de
                  WhatsApp para 20 a 30 mil leads/mês.
                </li>
              </ul>
            </div>
          </article>
          <article>
            <div className="date">FEV 2023 / NOV 2024</div>
            <div>
              <h3>Assistente de Tráfego Digital</h3>
              <h4>Intencional Negócios Digitais</h4>
              <ul>
                <li>
                  <CheckCircle2 /> Meta Ads ponta a ponta para cerca de 40
                  eventos por mês.
                </li>
                <li>
                  <CheckCircle2 /> +240 mil leads sob gestão, com CPL médio de
                  R$ 8.
                </li>
                <li>
                  <CheckCircle2 /> Públicos, lookalikes, remarketing e auditoria
                  de sinal via GTM.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <section className="section projects" id="projetos" data-reveal>
        <div className="projects-head">
          <div>
            <p className="section-no">04 / PROJETOS</p>
            <h2>
              Sistemas que
              <br />
              <em>movem o funil.</em>
            </h2>
          </div>
          <p>Projetos selecionados em performance, dados e automação.</p>
        </div>
        <div className="project-list">
          {projects.map((p) => {
            const content = (
              <>
                <div className="project-index">{p.n}</div>
                <div>
                  <span className="project-label">{p.label}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  {p.href ? (
                    <span className="project-cue">Ver projeto</span>
                  ) : null}
                </div>
                {p.href ? (
                  <span className="project-go" aria-hidden="true">
                    <span className="project-go-label">Ver projeto</span>
                    <ArrowUpRight className="project-arrow" />
                  </span>
                ) : null}
              </>
            );
            return p.href ? (
              <a
                className="project-card"
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  p.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                key={p.n}
              >
                {content}
              </a>
            ) : (
              <article className="project-card" key={p.n}>
                {content}
              </article>
            );
          })}
        </div>
      </section>
      <section className="contact">
        <p className="section-no">05 / CONTATO</p>
        <h2>
          Vamos conversar sobre
          <br />
          o próximo desafio?
        </h2>
        <a
          className="contact-mail"
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar no WhatsApp <ArrowUpRight />
        </a>
        <div className="contact-links">
          <a
            href="https://linkedin.com/in/odavidpinho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink /> LinkedIn
          </a>
          <a
            href="https://github.com/GT-PINHO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink /> GitHub
          </a>
          <a
            href="https://instagram.com/odavidpinho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink /> Instagram
          </a>
          <a href="mailto:davidpinho.st@gmail.com">
            <Mail /> E-mail
          </a>
        </div>
      </section>
      <footer>
        <div className="brand">
          David Pinho
        </div>
        <p>Gestor de Tráfego Pago · Automações e sistemas com IA</p>
        <p>© 2026 David Pinho</p>
      </footer>
    </main>
  );
}
