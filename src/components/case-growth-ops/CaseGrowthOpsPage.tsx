"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GROWTH_OPS_CASE } from "@/lib/case-growth-ops";
import { CONTACT } from "@/lib/content";
import AmbientField from "../ui/AmbientField";
import Container from "../ui/Container";
import CountUp from "../ui/CountUp";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { ButtonPrimary, ButtonSecondary } from "../ui/Button";
import ObservabilityDashboard from "./ObservabilityDashboard";
import LeadFlowTimeline from "./LeadFlowTimeline";

const c = GROWTH_OPS_CASE;

export default function CaseGrowthOpsPage() {
  return (
    <>
      <a href="#conteudo-case" className="skip-link">
        Ir para o conteúdo
      </a>
      <AmbientField />
      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-surface-line/80 bg-surface/85 backdrop-blur-md">
          <Container className="flex h-14 items-center justify-between sm:h-16">
            <Link
              href="/"
              className="font-display text-[15px] font-bold tracking-tight text-ink hover:text-accent"
            >
              David Pinho
            </Link>
            <nav aria-label="Navegação do estudo de caso" className="flex items-center gap-4 text-[13px]">
              <Link href="/#casos" className="text-soft hover:text-accent">
                Casos
              </Link>
              <Link href="/#contato" className="text-soft hover:text-accent">
                Contato
              </Link>
            </nav>
          </Container>
        </header>

        <main id="conteudo-case">
          {/* Hero */}
          <section className="border-b border-surface-line/60 py-12 sm:py-16 md:py-20">
            <Container>
              <RevealGroup>
                <RevealItem>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {c.kicker}
                  </p>
                </RevealItem>
                <RevealItem className="mt-4">
                  <h1 className="max-w-[20ch] font-display text-[clamp(1.95rem,5.4vw,3.35rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-ink">
                    {c.title}
                  </h1>
                </RevealItem>
                <RevealItem className="mt-5">
                  <p className="max-w-[62ch] text-[1.02rem] leading-[1.65] text-soft sm:text-[1.06rem]">
                    {c.subtitle}
                  </p>
                </RevealItem>
                <RevealItem className="mt-7 flex flex-col gap-4 sm:flex-row sm:gap-10">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Cliente
                    </p>
                    <p className="mt-1 text-[13.5px] text-soft">{c.client}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Papel
                    </p>
                    <p className="mt-1 text-[13.5px] text-soft">{c.role}</p>
                  </div>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="mt-10 grid grid-cols-1 border-t border-surface-line/70 sm:mt-12 sm:grid-cols-3">
                {c.heroHighlights.map((item) => (
                  <RevealItem
                    key={item.label}
                    className="border-b border-surface-line/70 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:border-surface-line/70 sm:px-6 sm:py-6 first:sm:pl-0 last:sm:border-r-0 last:sm:pr-0"
                  >
                    <p className="font-display text-[clamp(1.7rem,3.5vw,2.2rem)] font-bold tracking-tight text-accent tabular-nums">
                      {item.value}
                    </p>
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-muted">
                      {item.label}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>

          {/* Cenário */}
          <section className="py-section-y">
            <Container>
              <RevealGroup className="mb-8 md:mb-10">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.45rem,4vw,2.1rem)] font-bold tracking-tight text-ink">
                    {c.scenario.title}
                  </h2>
                </RevealItem>
                <RevealItem className="mt-3">
                  <p className="max-w-[68ch] text-[1.02rem] leading-relaxed text-soft">
                    {c.scenario.body}
                  </p>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {c.scenario.stats.map((stat) => (
                  <RevealItem key={stat.label}>
                    <div className="border border-surface-line bg-surface-raised/40 px-4 py-5">
                      <p className="font-display text-[1.65rem] font-bold tracking-tight text-accent sm:text-[1.85rem]">
                        {typeof stat.countTo === "number" ? (
                          <CountUp
                            to={stat.countTo}
                            fallback={stat.value}
                            prefix={stat.prefix ?? ""}
                            suffix={stat.suffix ?? ""}
                            format={stat.format ?? "plain"}
                          />
                        ) : (
                          stat.value
                        )}
                      </p>
                      <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-muted">
                        {stat.label}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>

          {/* Desafio */}
          <section className="border-y border-surface-line/60 bg-surface-raised/25 py-section-y">
            <Container>
              <RevealGroup className="mb-8">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.45rem,4vw,2.1rem)] font-bold tracking-tight text-ink">
                    {c.challenge.title}
                  </h2>
                </RevealItem>
                <RevealItem className="mt-3">
                  <p className="max-w-[68ch] text-[1.02rem] leading-relaxed text-soft">
                    {c.challenge.body}
                  </p>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="grid gap-4 md:grid-cols-3">
                {c.challenge.pains.map((pain) => (
                  <RevealItem key={pain.title}>
                    <article className="h-full border border-surface-line border-l-2 border-l-amber-500/60 bg-surface/40 p-5">
                      <h3 className="font-display text-[15px] font-semibold text-ink">
                        {pain.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-soft">
                        {pain.text}
                      </p>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>

          {/* Solução / Stack */}
          <section className="py-section-y">
            <Container>
              <RevealGroup className="mb-8 md:mb-10">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.45rem,4vw,2.1rem)] font-bold tracking-tight text-ink">
                    {c.solution.title}
                  </h2>
                </RevealItem>
                <RevealItem className="mt-3">
                  <p className="max-w-[60ch] text-[1.02rem] leading-relaxed text-soft">
                    {c.solution.lead}
                  </p>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="grid gap-4 lg:grid-cols-2">
                {c.solution.pillars.map((pillar, idx) => (
                  <RevealItem key={pillar.title}>
                    <motion.article
                      className="flex h-full flex-col border border-surface-line bg-surface-raised/35 p-5 sm:p-6"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[12px] font-bold text-accent">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-[17px] font-bold text-ink">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-soft">
                        {pillar.text}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-surface-line/50 pt-4">
                        {pillar.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-surface-line px-2 py-0.5 text-[11px] text-muted"
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
          <section className="border-y border-surface-line/60 bg-surface-raised/20 py-section-y">
            <Container>
              <RevealGroup className="mb-8 md:mb-12">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.45rem,4vw,2.1rem)] font-bold tracking-tight text-ink">
                    Fluxo do lead
                  </h2>
                </RevealItem>
                <RevealItem className="mt-3">
                  <p className="max-w-[58ch] text-[1.02rem] leading-relaxed text-soft">
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
          <section className="py-section-y">
            <Container>
              <RevealGroup className="mb-8">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.45rem,4vw,2.1rem)] font-bold tracking-tight text-ink">
                    Dashboard de observabilidade
                  </h2>
                </RevealItem>
                <RevealItem className="mt-3">
                  <p className="max-w-[62ch] text-[1.02rem] leading-relaxed text-soft">
                    Métricas do funil (Meta Ads → GreatPages → Sheets → ManyChat),
                    registros com status e módulo de Data Cleansing para o suporte
                    reprocessar leads com e-mail inválido sem duplicar Deal.
                  </p>
                </RevealItem>
                <RevealItem className="mt-8">
                  <ObservabilityDashboard />
                </RevealItem>
              </RevealGroup>
            </Container>
          </section>

          {/* Resultados */}
          <section className="border-t border-surface-line/60 bg-surface-raised/25 py-section-y">
            <Container>
              <RevealGroup className="mb-8">
                <RevealItem>
                  <h2 className="font-display text-[clamp(1.45rem,4vw,2.1rem)] font-bold tracking-tight text-ink">
                    {c.results.title}
                  </h2>
                </RevealItem>
              </RevealGroup>

              <RevealGroup className="grid gap-4 md:grid-cols-3">
                {c.results.items.map((item) => (
                  <RevealItem key={item.title}>
                    <article className="h-full border border-accent/25 bg-accent/[0.04] p-5 sm:p-6">
                      <h3 className="font-display text-[16px] font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-soft">
                        {item.text}
                      </p>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>

              <RevealItem className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonPrimary
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  className="w-full sm:w-auto"
                >
                  Falar no WhatsApp
                </ButtonPrimary>
                <ButtonSecondary href="/#casos" className="w-full sm:w-auto">
                  Voltar aos casos
                </ButtonSecondary>
              </RevealItem>
            </Container>
          </section>
        </main>

        <footer className="border-t border-surface-line py-8">
          <Container className="flex flex-wrap items-center justify-between gap-3 text-[13px] text-muted">
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
