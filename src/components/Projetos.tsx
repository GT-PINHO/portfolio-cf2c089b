import type { ReactNode, SVGProps } from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup } from "./ui/Reveal";
import { fadeUp } from "../lib/motion";
import { IconExternal } from "./ui/icons";

/* ── Ícones de categoria (20px, cyan) ── */
function IconAutomation(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2a4 4 0 0 1 4 4v1h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6a4 4 0 0 1 4-4Z"/>
      <path d="M9 12h6M12 9v6"/>
    </svg>
  );
}

function IconSystem(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <path d="M17.5 14v7M14 17.5h7"/>
    </svg>
  );
}

function IconDashboard(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8l3 3 2-2 3 3"/>
    </svg>
  );
}

function IconAgent(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Z"/>
      <path d="M2 20c0-4 4-6 10-6s10 2 10 6"/>
      <circle cx="17" cy="8" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

type Project = {
  idx: string;
  icon: (p: SVGProps<SVGSVGElement>) => ReactNode;
  title: string;
  description: ReactNode;
  tags: string[];
  href?: string;
  status: string;
};

const PROJECTS: Project[] = [
  {
    idx: "01",
    icon: IconAutomation,
    title: "Automação de Produtos — IAM",
    description: (
      <>
        Automação (hardcode + EasyPanel) integrando os produtos do IAM ao ManyChat.
        Aba de <strong className="text-ink">Gerenciamento de Automações e Reconciliação</strong>{" "}
        para a gestão auditar sem depender do time de Dev — em uso diário.
      </>
    ),
    tags: ["EasyPanel", "ManyChat", "Hardcode", "IA no fluxo"],
    status: "Em produção",
  },
  {
    idx: "02",
    icon: IconSystem,
    title: "Sistema de Gestão de Eventos — IAM",
    description: (
      <>
        Substituí duas planilhas multi-departamento por um sistema web único — mais
        controle, menos erro e visibilidade para todos os times.
      </>
    ),
    tags: ["Sistema web", "Multi-departamento", "IA + hardcode"],
    status: "Em produção",
  },
  {
    idx: "03",
    icon: IconDashboard,
    title: "Dashboard Masterclass — IAM",
    description: (
      <>
        Painel de acompanhamento da operação de Masterclass, com indicadores para
        tomada de decisão da gestão — ferramenta interna.
      </>
    ),
    tags: ["Dashboard", "Vercel", "Dados"],
    status: "Em produção",
  },
  {
    idx: "04",
    icon: IconDashboard,
    title: "Legacy Dashboard",
    description: (
      <>
        Painel de gestão para o Grupo Legacy Eco, consolidando informações de
        operação em uma visão única para liderança e times.
      </>
    ),
    tags: ["Dashboard", "Legacy Eco"],
    status: "Em produção",
  },
  {
    idx: "05",
    icon: IconAgent,
    title: "pinho-skills — Agentes & Skills para o Claude",
    description: (
      <>
        Plugin open source com <strong className="text-ink">12 skills em 3 clusters</strong>,
        Quality Gate e eval runner — <strong className="text-ink">20/20 evals</strong> no
        CI. Cluster <strong className="text-ink">growth-ops</strong>: leilão, unit
        economics, tracking CAPI/dedup e CRO.
      </>
    ),
    tags: ["Claude Code", "CI + Evals", "Growth-Ops", "Open source"],
    href: "https://github.com/GT-PINHO/agent-skills",
    status: "GitHub",
  },
];

export default function Projetos() {
  return (
    <Section
      id="projetos"
      index="04"
      kicker="Projetos"
      title="O que eu já construí."
      lead="Sistemas e dashboards que rodam na operação real. Parte é ferramenta de gestão interna — não há link para visitar, mas o impacto no processo é o que importa no case."
    >
      <RevealGroup className="grid gap-4">
        {PROJECTS.map((p) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.idx}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group grid grid-cols-[auto_1fr] items-start gap-5 rounded-2xl border border-surface-line bg-surface-raised/40 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-7 sm:p-7"
            >
              <span className="font-display text-lg font-bold text-accent">
                {p.idx}
              </span>

              <div>
                <h3 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                  <Icon
                    style={{ width: 20, height: 20, color: "#06b6d4", flexShrink: 0 }}
                  />
                  {p.title}
                </h3>
                <p className="mt-2 max-w-[62ch] text-[14px] leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-surface-line px-2.5 py-1 text-[11px] text-muted"
                      style={{ cursor: "default", pointerEvents: "none" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botão de acção — único elemento clicável do card */}
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="col-span-2 inline-flex items-center gap-1.5 justify-self-start rounded-full border border-surface-line px-4 py-2 text-[12.5px] font-medium text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white sm:col-span-1 sm:justify-self-end"
                >
                  {p.status}
                  <IconExternal className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="col-span-2 inline-flex items-center gap-1.5 justify-self-start rounded-full border border-surface-line px-4 py-2 text-[12.5px] font-medium text-muted sm:col-span-1 sm:justify-self-end">
                  {p.status}
                </span>
              )}
            </motion.div>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
