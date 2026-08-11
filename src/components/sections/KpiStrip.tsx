"use client";

import CountUp from "../ui/CountUp";
import Container from "../ui/Container";
import { KPIS } from "../../lib/content";

export default function KpiStrip() {
  return (
    <section
      aria-label="Indicadores de operação"
      className="relative z-10 border-y border-surface-line bg-surface/80"
    >
      <Container>
        {/*
          Três itens: no celular ficam 2 + 1, com o último ocupando a linha
          inteira em vez de deixar meia célula vazia.
        */}
        <div className="grid grid-cols-2 divide-x divide-y divide-surface-line md:grid-cols-3 md:divide-y-0">
          {KPIS.map((kpi, i) => (
            <div
              key={kpi.id}
              className={`px-5 py-5 first:pl-0 last:pr-0 md:px-6 md:py-6 md:first:pl-0 md:last:pr-0 ${
                i === KPIS.length - 1 && KPIS.length % 2 === 1
                  ? "col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <p className="font-display text-lg font-bold tracking-tight text-accent tabular-nums md:text-xl">
                {typeof kpi.countTo === "number" ? (
                  <CountUp
                    to={kpi.countTo}
                    fallback={kpi.value}
                    prefix={kpi.prefix}
                    suffix={kpi.suffix}
                    format={kpi.format ?? "plain"}
                    durationMs={1200}
                  />
                ) : (
                  kpi.value
                )}
              </p>
              {/* Tracking largo estoura a célula de 2 colunas no celular. */}
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-muted md:tracking-[0.18em]">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
