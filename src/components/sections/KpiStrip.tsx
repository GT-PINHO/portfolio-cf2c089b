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
        <div className="grid grid-cols-2 divide-x divide-y divide-surface-line md:grid-cols-4 md:divide-y-0">
          {KPIS.map((kpi) => (
            <div
              key={kpi.id}
              className="px-5 py-5 first:pl-0 last:pr-0 md:px-6 md:py-6 md:first:pl-0 md:last:pr-0"
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
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
