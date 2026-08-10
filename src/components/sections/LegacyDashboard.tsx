"use client";

import { LEGACY_DASHBOARD as D } from "../../lib/legacy-dashboard";

const MAX = D.funnel[0].value;

export default function LegacyDashboard() {
  return (
    <figure
      id="painel"
      className="section-anchor m-0 overflow-hidden border border-surface-line bg-surface-raised/25"
    >
      {/* Barra de janela: sinaliza que é interface de produto, não gráfico solto. */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-surface-line px-5 py-3">
        <span className="font-display text-sm font-bold tracking-tight text-ink">
          {D.name}
        </span>

        <span className="flex items-center gap-1" role="presentation">
          {D.tabs.map((tab) => (
            <span
              key={tab}
              className={`rounded-full px-2.5 py-1 text-xs ${
                tab === D.activeTab
                  ? "bg-accent/15 font-semibold text-accent"
                  : "text-muted"
              }`}
            >
              {tab}
            </span>
          ))}
        </span>

        <span className="ml-auto flex flex-wrap items-center gap-1.5">
          {D.filters.map((f) => (
            <span
              key={f}
              className="border border-surface-line px-2 py-0.5 text-[0.6875rem] text-muted"
            >
              {f}
            </span>
          ))}
        </span>
      </div>

      <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <div>
          <dl className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3">
            {D.kpis.map((k) => (
              <div key={k.label} className="min-w-0">
                <dt className="text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                  {k.label}
                </dt>
                <dd
                  className={`mt-1 font-display text-base font-bold tracking-tight tabular-nums ${
                    "tone" in k && k.tone === "success" ? "text-accent" : "text-ink"
                  }`}
                >
                  {k.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 border-t border-surface-line pt-5">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted">
              {D.originTitle}
            </p>
            <dl className="mt-3 grid grid-cols-3 gap-4">
              {D.origins.map((o) => (
                <div key={o.source} className="min-w-0">
                  <dt className="truncate text-xs text-soft">{o.source}</dt>
                  <dd className="mt-0.5 font-display text-sm font-bold tabular-nums text-ink">
                    {o.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs leading-relaxed text-muted">{D.originNote}</p>
          </div>
        </div>

        <div>
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted">
            {D.funnelTitle}
          </p>

          {/* Barras proporcionais: a queda entre etapas é a informação. */}
          <ol className="mt-4 list-none space-y-2.5">
            {D.funnel.map((s) => {
              const pct = Math.max((s.value / MAX) * 100, 6);
              return (
                <li key={s.stage}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-xs text-soft">{s.stage}</span>
                    <span className="shrink-0 font-display text-sm font-bold tabular-nums text-ink">
                      {s.display}
                      {s.rate ? (
                        <span className="ml-2 text-xs font-medium text-muted">
                          {s.rate}
                        </span>
                      ) : null}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full bg-surface-line">
                    <div
                      className="h-full bg-accent/70"
                      style={{ width: `${pct}%` }}
                      aria-hidden
                    />
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mt-4 text-xs leading-relaxed text-muted">{D.funnelNote}</p>
        </div>
      </div>

      <figcaption className="border-t border-surface-line px-5 py-3.5 text-xs leading-relaxed text-muted sm:px-6">
        {D.disclaimer}
      </figcaption>
    </figure>
  );
}
