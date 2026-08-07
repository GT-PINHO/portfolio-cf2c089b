"use client";

import { GROWTH_OPS_CASE } from "@/lib/case-growth-ops";
import CountUp from "../ui/CountUp";

const toneClass = {
  success: "border-emerald-500/35 text-emerald-400 bg-emerald-500/[0.07]",
  warning: "border-amber-500/35 text-amber-400 bg-amber-500/[0.07]",
  danger: "border-red-500/35 text-red-400 bg-red-500/[0.07]",
  info: "border-sky-500/35 text-sky-400 bg-sky-500/[0.07]",
} as const;

const statusBadge = {
  success: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  success_with_warning: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  corrigido: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  ok: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
} as const;

function StatusPill({ status }: { status: keyof typeof statusBadge | string }) {
  const cls =
    statusBadge[status as keyof typeof statusBadge] ??
    "bg-white/5 text-soft border-white/10";
  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium lowercase tracking-wide ${cls}`}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}

export default function ObservabilityDashboard() {
  const d = GROWTH_OPS_CASE.dashboardDemo;

  return (
    <div className="space-y-3">
      <p className="text-xs leading-relaxed text-muted">{d.disclaimer}</p>

      <div className="overflow-hidden rounded-xl border border-surface-line bg-[#0c0e12] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3 sm:px-5">
          <div>
            <p className="font-display text-sm font-semibold text-ink">
              Dashboard de observabilidade
            </p>
            <p className="mt-0.5 text-xs text-muted">
              Monitoramento operacional do funil automatizado por produto
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted">
              IPR
            </span>
            <span className="rounded-full bg-sky-500 px-2.5 py-1 text-xs font-semibold text-white">
              {d.product}
            </span>
            <span className="hidden rounded-md border border-white/10 px-2.5 py-1 text-xs text-muted sm:inline">
              {d.period}
            </span>
          </div>
        </div>

        <div className="space-y-5 p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {d.kpis.map((kpi) => (
              <div
                key={kpi.key}
                className={`rounded-lg border px-3 py-3 ${toneClass[kpi.tone]}`}
                title={"legendKey" in kpi && kpi.legendKey === "warning" ? d.warningLegend : undefined}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] opacity-90">
                  {kpi.label}
                  {"legendKey" in kpi && kpi.legendKey === "warning" ? (
                    <span className="ml-1 cursor-help opacity-70" aria-label={d.warningLegend}>
                      ⓘ
                    </span>
                  ) : null}
                </p>
                <p className="mt-1.5 font-display text-xl font-bold leading-none tracking-tight">
                  <CountUp
                    to={kpi.countTo}
                    fallback={kpi.value}
                    format="pt"
                    durationMs={1600}
                  />
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-1 text-xs text-muted">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span>Último registro: {d.records[0]?.time}</span>
              <span>
                {d.successRateLabel}:{" "}
                <strong className="text-emerald-400">{d.successRate}</strong>
              </span>
            </div>
            <p className="font-mono text-xs text-soft/80">{d.successRateFormula}</p>
            <p className="text-xs text-muted/90">
              <span className="font-semibold text-amber-300/90">Com aviso:</span>{" "}
              {d.warningLegend}
            </p>
          </div>

          <div>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Funil de conversão
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {d.funnel.map((step) => (
                <div
                  key={step.stage}
                  className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {step.stage}
                  </p>
                  <p className="mt-1.5 font-display text-base font-bold text-ink">
                    {step.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{step.meta}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/[0.07]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] px-3 py-2.5">
              <p className="text-sm font-semibold text-ink">Registros recentes</p>
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-white/10 px-2 py-1 text-xs text-muted">
                  Buscar nome ou email
                </span>
                <span className="rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-1 text-xs text-sky-300">
                  Corrigido
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[640px] w-full text-left text-xs">
                <thead className="text-xs uppercase tracking-[0.12em] text-muted">
                  <tr className="border-b border-white/[0.06]">
                    <th className="px-3 py-2 font-medium">Data/Hora</th>
                    <th className="px-3 py-2 font-medium">Nome</th>
                    <th className="px-3 py-2 font-medium">Status</th>
                    <th className="px-3 py-2 font-medium">Email</th>
                    <th className="px-3 py-2 font-medium">Cidade</th>
                    <th className="px-3 py-2 font-medium">ManyChat</th>
                  </tr>
                </thead>
                <tbody>
                  {d.records.map((row) => (
                    <tr
                      key={`${row.time}-${row.city}`}
                      className="border-b border-white/[0.04] text-soft last:border-0"
                    >
                      <td className="whitespace-nowrap px-3 py-2.5 text-muted">
                        {row.time}
                      </td>
                      <td className="px-3 py-2.5 text-ink">{row.name}</td>
                      <td className="px-3 py-2.5">
                        <StatusPill status={row.status} />
                      </td>
                      <td className="px-3 py-2.5 font-mono text-xs text-muted">
                        {row.email}
                      </td>
                      <td className="px-3 py-2.5 uppercase tracking-wide">{row.city}</td>
                      <td className="px-3 py-2.5 font-mono text-xs text-muted">
                        {row.mcId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Atividade em tempo real
            </p>
            <ul className="space-y-2">
              {d.activity.map((item) => (
                <li
                  key={`${item.tag}-${item.time}`}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/[0.06] bg-white/[0.015] px-3 py-2.5"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-accent">
                      [{item.tag}]
                    </span>
                    <span className="truncate text-sm text-soft">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted">{item.time}</span>
                    <StatusPill status={item.status} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
