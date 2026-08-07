"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GROWTH_OPS_CASE } from "@/lib/case-growth-ops";
import { CONTACT } from "@/lib/content";
import AmbientField from "../ui/AmbientField";
import Container from "../ui/Container";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { ButtonPrimary, ButtonSecondary } from "../ui/Button";
import ObservabilityDashboard from "./ObservabilityDashboard";
import LeadFlowTimeline from "./LeadFlowTimeline";
import CaseReadingNav from "./CaseReadingNav";
import { CV_FILENAME } from "@/lib/cv";

const c = GROWTH_OPS_CASE;

export default function CaseGrowthOpsPage() {
  return (
    <>
      <a href="#conteudo-case" className="skip-link">
        Ir para o conteúdo
      </a>
      <AmbientField />
      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-surface-line/80 bg-surface/95 backdrop-blur-md">
          <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
            <div className="flex min-w-0 items-center gap-4">
              <Link
                href="/"
                className="shrink-0 font-display text-sm font-bold tracking-tight text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                David Pinho
              </Link>
              <Link
                href="/"
                className="hidden truncate text-sm text-muted transition-colors hover:text-accent sm:inline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                ← Voltar ao portfólio
              </Link>
            </div>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              style={{ background: "var(--accent)" }}
            >
              Conversar
            </a>
          </Container>
        </header>

        <main id="conteudo-case">
          {/* Hero */}
          <section className="border-b border-surface-line/60 py-8 sm:py-10 md:py-12">
            <Container>
              <RevealGroup>
                <RevealItem>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {c.kicker}
                  </p>
                </RevealItem>
                <RevealItem className="mt-4">
                  <h1 className="max-w-[28ch] font-display text-[clamp(1.875rem,5vw,3rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink">
                    {c.title}
                  </h1>
                </RevealItem>
                <RevealItem className="mt-5">
                  <p className="max-w-[62ch] text-base leading-[1.65] text-soft">
                    {c.subtitle}
                  </p>
                </RevealItem>
                <RevealItem className="mt-7 flex flex-col gap-4 sm:flex-row sm:gap-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Cliente
                    </p>
                    <p className="mt-1 text-sm text-soft">{c.client}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Papel
                    </p>
                    <p className="mt-1 text-sm text-soft">{c.role}</p>
                  </div>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="mt-6 grid grid-cols-1 border-t border-surface-line/70 sm:mt-8 sm:grid-cols-3">
                {c.heroHighlights.map((item) => (
                  <RevealItem
                    key={item.label}
                    className="border-b border-surface-line/70 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:border-surface-line/70 sm:px-6 sm:py-6 first:sm:pl-0 last:sm:border-r-0 last:sm:pr-0"
                  >
                    <p className="font-display text-[clamp(1.5rem,3.5vw,2rem)] font-bold tracking-tight text-accent tabular-nums">
                      {item.value}
                    </p>
                    <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-muted">
                      {item.label}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>

          <Container>
            <CaseReadingNav />
          </Container>

          {/* Cenário */}
          <section id="cenario" className="py-10 md:py-12">
            <Container>
              <RevealGroup className="mb-5 md:mb-6">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight text-ink">
                    {c.scenario.title}
                  </h2>
                </RevealItem>
                <RevealItem className="mt-3">
                  <p className="max-w-[68ch] text-base leading-relaxed text-soft">
                    {c.scenario.body}
                  </p>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {c.scenario.stats.map((stat) => (
                  <RevealItem key={stat.label}>
                    <div className="border border-surface-line bg-surface-raised/40 px-4 py-5">
                      <p className="font-display text-xl font-bold tracking-tight text-accent sm:text-xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                        {stat.label}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>

          {/* Desafio */}
          <section id="desafio" className="border-y border-surface-line/60 bg-surface-raised/25 py-10 md:py-12">
            <Container>
              <RevealGroup className="mb-5">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight text-ink">
                    {c.challenge.title}
                  </h2>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="grid gap-4 md:grid-cols-3">
                {c.challenge.pains.map((pain) => (
                  <RevealItem key={pain.title}>
                    <article className="h-full border border-surface-line border-l-2 border-l-warn bg-surface/40 p-5">
                      <h3 className="font-display text-base font-semibold text-ink">
                        {pain.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-soft">
                        {pain.text}
                      </p>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>

          {/* Solução / Stack */}
          <section id="solucao" className="py-10 md:py-12">
            <Container>
              <RevealGroup className="mb-5 md:mb-6">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight text-ink">
                    {c.solution.title}
                  </h2>
                </RevealItem>
                <RevealItem className="mt-3">
                  <p className="max-w-[60ch] text-base leading-relaxed text-soft">
                    {c.solution.lead}
                  </p>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="grid gap-4 lg:grid-cols-2">
                {c.solution.pillars.map((pillar) => (
                  <RevealItem key={pillar.title}>
                    <motion.article
                      className="flex h-full flex-col border border-surface-line bg-surface-raised/35 p-5 sm:p-6"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-lg font-bold text-ink">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-soft">
                        {pillar.text}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-surface-line/50 pt-4">
                        {pillar.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-surface-line px-2 py-0.5 text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>

          {/* Fluxo do lead */}
          <section id="fluxo" className="border-y border-surface-line/60 bg-surface-raised/20 py-10 md:py-12">
            <Container>
              <RevealGroup className="mb-5 md:mb-6">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight text-ink">
                    Fluxo do lead
                  </h2>
                </RevealItem>
                <RevealItem className="mt-3">
                  <p className="max-w-[58ch] text-base leading-relaxed text-soft">
                    Cada passo é persistido no Supabase. Idempotência garante
                    duplicidade zero no ManyChat e na HubSpot, inclusive após
                    correção manual de e-mail.
                  </p>
                </RevealItem>
              </RevealGroup>
              <LeadFlowTimeline />
            </Container>
          </section>

          {/* Dashboard */}
          <section id="dashboard" className="py-10 md:py-12">
            <Container>
              <RevealGroup className="mb-5">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight text-ink">
                    Dashboard de observabilidade
                  </h2>
                </RevealItem>
                <RevealItem className="mt-3">
                  <p className="max-w-[62ch] text-base leading-relaxed text-soft">
                    Métricas do funil (Meta Ads → GreatPages → Sheets → ManyChat),
                    registros com status e módulo de Data Cleansing para o suporte
                    reprocessar leads com e-mail inválido sem duplicar Deal.
                  </p>
                </RevealItem>
                <RevealItem className="mt-5">
                  <ObservabilityDashboard />
                </RevealItem>
              </RevealGroup>
            </Container>
          </section>

          {/* Resultados */}
          <section id="resultados" className="border-t border-surface-line/60 bg-surface-raised/25 py-10 md:py-12">
            <Container>
              <RevealGroup className="mb-5">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight text-ink">
                    {c.results.title}
                  </h2>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="grid items-start gap-4 md:grid-cols-3">
                {c.results.items.map((item) => (
                  <RevealItem key={item.title}>
                    <article className="border border-accent/25 bg-accent/[0.04] p-5 sm:p-6">
                      <h3 className="font-display text-base font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-soft">
                        {item.text}
                      </p>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>

              <RevealItem className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <ButtonPrimary
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  className="w-full sm:w-auto"
                >
                  Falar no WhatsApp
                </ButtonPrimary>
                <ButtonSecondary
                  href="/Curriculo_David_Pinho.pdf"
                  download={CV_FILENAME}
                  className="w-full sm:w-auto"
                >
                  Baixar CV
                </ButtonSecondary>
                <ButtonSecondary href="/#casos" className="w-full sm:w-auto">
                  Voltar aos casos
                </ButtonSecondary>
              </RevealItem>
            </Container>
          </section>
        </main>

        <footer className="border-t border-surface-line py-8">
          <Container className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
            <span>© {new Date().getFullYear()} David Pinho</span>
            <Link href="/" className="hover:text-accent">
              Portfólio
            </Link>
          </Container>
        </footer>
      </div>
    </>
  );
}
