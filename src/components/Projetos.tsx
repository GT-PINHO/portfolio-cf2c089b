import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup } from "./ui/Reveal";
import { fadeUp } from "../lib/motion";
import { IconExternal } from "./ui/icons";

type Project = {
  idx: string;
  title: string;
  description: ReactNode;
  tags: string[];
  href?: string;
  status: string;
};

const PROJECTS: Project[] = [
  {
    idx: "01",
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
          const Wrapper = p.href ? motion.a : motion.div;
          return (
            <Wrapper
              key={p.idx}
              {...(p.href
                ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              variants={fadeUp}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group grid grid-cols-[auto_1fr] items-start gap-5 rounded-2xl border border-surface-line bg-surface-raised/40 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-7 sm:p-7"
            >
              <span className="font-display text-lg font-bold text-accent">
                {p.idx}
              </span>

              <div>
                <h3 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
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
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span
                className={`col-span-2 inline-flex items-center gap-1.5 justify-self-start rounded-full border px-4 py-2 text-[12.5px] font-medium sm:col-span-1 sm:justify-self-end ${
                  p.href
                    ? "border-surface-line text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                    : "border-surface-line text-muted"
                }`}
              >
                {p.status}
                {p.href && <IconExternal className="h-3.5 w-3.5" />}
              </span>
            </Wrapper>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
