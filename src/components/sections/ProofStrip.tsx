import { PROOF_STRIP } from "../../lib/content";
import Container from "../ui/Container";
import { ButtonSecondary } from "../ui/Button";

export default function ProofStrip() {
  const link = PROOF_STRIP.links[0];

  return (
    <section
      id="codigo"
      aria-label="Código público"
      className="relative z-10 border-y border-surface-line py-7 md:py-8"
    >
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="min-w-0 max-w-[52ch]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {PROOF_STRIP.label}
            </p>
            <p className="mt-3 font-display text-lg font-bold tracking-tight text-ink">
              {link.title}
            </p>
            {link.description ? (
              <p className="mt-1.5 text-sm leading-snug text-soft">
                {link.description}
              </p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {PROOF_STRIP.note}
            </p>
          </div>

          <div className="shrink-0">
            <ButtonSecondary
              href={link.href}
              external
              className="w-full px-5 py-2.5 text-sm sm:w-auto"
            >
              Ver no GitHub{" "}
              <span className="link-arrow" aria-hidden>
                ↗
              </span>
            </ButtonSecondary>
          </div>
        </div>
      </Container>
    </section>
  );
}
