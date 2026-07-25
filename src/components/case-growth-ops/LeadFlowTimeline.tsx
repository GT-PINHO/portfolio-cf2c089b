"use client";

import { motion } from "framer-motion";
import { GROWTH_OPS_CASE } from "@/lib/case-growth-ops";
import { RevealGroup, RevealItem } from "../ui/Reveal";

export default function LeadFlowTimeline() {
  const steps = GROWTH_OPS_CASE.flowSteps;

  return (
    <RevealGroup className="relative space-y-3">
      <div
        className="pointer-events-none absolute left-[15px] top-4 bottom-4 hidden w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:left-1/2 md:block md:-translate-x-px"
        aria-hidden
      />

      {steps.map((step, i) => {
        const left = i % 2 === 0;
        return (
          <RevealItem key={step.id}>
            <div className="relative md:grid md:grid-cols-2 md:gap-10">
              <motion.div
                className={`flex gap-3 rounded-lg border border-surface-line bg-surface-raised/40 p-4 md:max-w-md ${
                  left ? "md:ml-auto" : "md:col-start-2"
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-[11px] font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] text-accent/90">{step.id}</p>
                  <p className="mt-0.5 font-display text-[15px] font-semibold text-ink">
                    {step.label}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-soft">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
