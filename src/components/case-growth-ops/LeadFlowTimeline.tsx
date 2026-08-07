"use client";

import { GROWTH_OPS_CASE } from "@/lib/case-growth-ops";
import { RevealGroup, RevealItem } from "../ui/Reveal";

export default function LeadFlowTimeline() {
  const steps = GROWTH_OPS_CASE.flowSteps;

  return (
    <RevealGroup className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <RevealItem key={step.id}>
          <div className="h-full rounded-lg border border-surface-line bg-surface-raised/40 p-3.5">
            <p className="font-mono text-xs text-accent/90">{step.id}</p>
            <p className="mt-1 font-display text-sm font-semibold text-ink">
              {step.label}
            </p>
            <p className="mt-1 text-xs leading-snug text-soft">{step.detail}</p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
