"use client";

import CountUp from "../ui/CountUp";
import { KPIS } from "../../lib/content";

export default function KpiStrip() {
  return (
    <section
      aria-label="Indicadores de operação"
      className="relative z-10 border-y border-surface-line bg-surface/80"
    >
      <div className="grid grid-cols-2 divide-x divide-y divide-surface-line md:grid-cols-4 md:divide-y-0">
        {KPIS.map((kpi) => (
          <div key={kpi.id} className="px-6 py-7">
            <p className="font-display text-3xl font-bold tracking-tight text-accent tabular-nums md:text-4xl">
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
    </section>
  );
}
