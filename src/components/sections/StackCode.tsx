"use client";

import Section from "../ui/Section";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { IconExternal } from "../ui/icons";
import { STACK } from "../../lib/content";
import { LEGACY_DASHBOARD } from "../../lib/legacy-dashboard";
import LegacyDashboard from "./LegacyDashboard";

export default function StackCode() {
  return (
    <Section
      id="stack"
      index="04"
      kicker={STACK.kicker}
      title={STACK.title}
      lead={STACK.lead}
    >
      <div className="space-y-10">
        <RevealGroup>
          <RevealItem>
            <p className="max-w-[62ch] text-base leading-relaxed text-soft">
              {LEGACY_DASHBOARD.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {LEGACY_DASHBOARD.stack.map((t) => (
                <li
                  key={t}
                  className="border border-surface-line px-2 py-0.5 text-xs text-soft"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <LegacyDashboard />
            </div>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="grid gap-5 lg:grid-cols-2 lg:auto-rows-fr lg:items-stretch">
          {STACK.projects.map((project, i) => (
            <RevealItem
              key={project.id}
              as="article"
              delay={i * 0.07}
              className="card-lift flex h-full flex-col border border-surface-line bg-surface-raised/35 p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-base font-bold leading-snug tracking-tight text-ink">
                  {project.title}
                </h3>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {project.status}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-soft">
                {project.description}
              </p>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-surface-line px-2 py-0.5 text-xs text-soft"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Ver {project.title} no GitHub
                <IconExternal className="h-4 w-4" aria-hidden />
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="grid gap-x-8 gap-y-7 border-t border-surface-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.groups.map((group, i) => (
            <RevealItem key={group.label} delay={i * 0.05}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.chips.map((chip) => {
                  const className = chip.featured
                    ? "border border-accent/35 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                    : "border border-surface-line px-2 py-0.5 text-xs text-soft";

                  return (
                    <li key={chip.name}>
                      {chip.href ? (
                        <a
                          href={chip.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${className} inline-flex items-center gap-1 transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface`}
                        >
                          {chip.name}
                          <IconExternal className="h-3 w-3" aria-hidden />
                        </a>
                      ) : (
                        <span className={`${className} inline-block`}>{chip.name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
