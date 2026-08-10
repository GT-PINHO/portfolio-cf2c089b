"use client";

import { useRef } from "react";
import Section from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { EXPERIENCE } from "../lib/content";
import { useAmbientMode } from "../lib/ambient-intensity";

export default function Experiencia() {
  const rootRef = useRef<HTMLDivElement>(null);
  useAmbientMode("ambient", "experiencia", rootRef);

  return (
    <div ref={rootRef}>
      <Section
        id="experiencia"
        index="03"
        kicker={EXPERIENCE.kicker}
        title={EXPERIENCE.title}
        lead={EXPERIENCE.lead}
      >
        <RevealGroup className="relative ml-1 border-l border-surface-line pl-8 sm:pl-10">
          {EXPERIENCE.roles.map((r, i) => (
            <RevealItem key={r.title} className="relative pb-8 last:pb-0" as="div" delay={i * 0.07}>
              <span className="absolute -left-[41px] top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-[49px]">
                <span className="h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-surface" />
                {r.current && (
                  <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-accent/50" />
                )}
              </span>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {r.title}
                </h3>
                {r.current && (
                  <span className="rounded-full border border-accent/35 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-accent">
                    Atual
                  </span>
                )}
                {"highlight" in r && r.highlight ? (
                  <span className="font-display text-lg font-bold tracking-tight text-accent tabular-nums">
                    {r.highlight}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 font-medium text-accent">{r.org}</p>
              <p className="mt-1 text-sm text-muted">{r.meta}</p>

              <ul className="mt-5 max-w-[65ch] space-y-2.5">
                {r.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-5 text-sm leading-relaxed text-soft before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/45"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </div>
  );
}
