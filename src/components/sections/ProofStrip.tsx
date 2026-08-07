import { PROOF_STRIP } from "../../lib/content";
import Container from "../ui/Container";

export default function ProofStrip() {
  return (
    <section
      id="codigo"
      aria-label="Código público"
      className="relative z-10 border-y border-surface-line py-5"
    >
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {PROOF_STRIP.label}
          </p>
          <div className="min-w-0 flex-1">
            <ul className="flex flex-col gap-1.5 text-sm text-soft sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
              {PROOF_STRIP.links.map((link, i) => (
                <li key={link.href} className="flex min-w-0 items-center gap-3">
                  {i > 0 && (
                    <span className="hidden text-muted sm:inline" aria-hidden>
                      ·
                    </span>
                  )}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    <span className="font-medium text-ink">{link.title}</span>
                    {link.description ? (
                      <span className="truncate text-muted">
                        — {link.description}
                      </span>
                    ) : null}
                    <span aria-hidden className="text-accent">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-muted">{PROOF_STRIP.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
