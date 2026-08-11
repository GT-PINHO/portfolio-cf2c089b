"use client";

import { useRef } from "react";
import Section from "../ui/Section";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { ButtonPrimary } from "../ui/Button";
import { OPERATION } from "../../lib/content";
import { useAmbientMode } from "../../lib/ambient-intensity";
import SystemFlow from "./SystemFlow";

export default function OperationPillars() {
  const rootRef = useRef<HTMLDivElement>(null);
  useAmbientMode("ambient", "operacao", rootRef);

  return (
    <div ref={rootRef}>
      <Section
        id="operacao"
        index="01"
        kicker={OPERATION.kicker}
        title={OPERATION.title}
        lead={OPERATION.lead}
      >
        <RevealGroup className="mb-10">
          <RevealItem>
            <SystemFlow />
          </RevealItem>
        </RevealGroup>

        <RevealGroup>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {OPERATION.pillars.map((pilar, i) => (
              <RevealItem key={pilar.id} as="li" delay={i * 0.07} className="h-full">
                <article className="card-lift flex h-full flex-col border border-surface-line bg-surface-raised/35 p-5 sm:p-6">
                  {/* A frente é a informação: separa a oferta de mídia da oferta de engenharia. */}
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {pilar.track}
                  </p>

                  <h3 className="mt-2.5 font-display text-base font-bold leading-snug tracking-tight text-ink lg:min-h-[2.75rem]">
                    {pilar.pillar}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted lg:min-h-[5rem]">
                    {pilar.description}
                  </p>

                  <div className="mt-5 lg:min-h-[5.25rem]">
                    <p className="pillar-metric font-display font-bold tracking-tight text-accent tabular-nums">
                      {pilar.proof.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted lg:min-h-[2rem]">
                      {pilar.proof.unit}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col pt-5">
                    <ul className="flex flex-wrap gap-1.5 lg:min-h-[2rem]">
                      {pilar.tools.map((tool) => (
                        <li
                          key={tool}
                          className="border border-surface-line px-2 py-0.5 text-xs text-soft"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>

                    {/*
                      A reserva de altura do CTA só existe para alinhar a grade
                      do desktop. Empilhado no celular ela vira espaço morto no
                      rodapé de todo card sem botão.
                    */}
                    {pilar.href ? (
                      <div className="mt-4">
                        <ButtonPrimary
                          href={pilar.href}
                          className="w-full px-4 py-2.5 text-xs sm:text-sm"
                        >
                          {pilar.cta ?? "Ver estudo de caso"}{" "}
                          <span className="link-arrow" aria-hidden>
                            →
                          </span>
                        </ButtonPrimary>
                      </div>
                    ) : (
                      <div aria-hidden className="hidden lg:mt-4 lg:block lg:min-h-[2.75rem]" />
                    )}
                  </div>
                </article>
              </RevealItem>
            ))}
          </ul>
        </RevealGroup>
      </Section>
    </div>
  );
}
