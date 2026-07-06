import { motion } from "framer-motion";
import Section from "./ui/Section";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import ToolsRow from "./ui/ToolsRow";
import { scaleIn } from "../lib/motion";
import { CONTACT, SOBRE_HIGHLIGHTS, SOBRE_BIO } from "../lib/content";

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Portrait() {
  return (
    <motion.div
      className="relative w-full"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div
        className="w-full overflow-hidden md:aspect-[4/5]"
        style={{
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <img
          src="/david.png"
          alt="David Pinho"
          className="h-full w-full object-cover brightness-[0.95] contrast-[1.04]"
          style={{ objectPosition: "top center" }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </motion.div>
  );
}

export default function Sobre() {
  return (
    <Section
      id="sobre"
      index="05"
      kicker="Sobre"
      title="De origem simples a R$7M em mídia."
    >
      <div className="grid items-start gap-10 [grid-template-columns:1fr] [grid-template-rows:350px_auto] md:[grid-template-columns:1fr_1fr] md:[grid-template-rows:auto]">
        <div className="order-1 md:order-2 md:h-auto">
          <Portrait />
        </div>

        <div className="order-2 md:order-1">
          <RevealGroup className="mb-9 flex flex-col gap-3">
            {SOBRE_HIGHLIGHTS.map((h) => (
              <RevealItem key={h} className="flex items-start gap-3">
                <Check />
                <span className="text-[15px] leading-snug text-ink">{h}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="space-y-4 text-[1.02rem] leading-relaxed text-muted">
            {SOBRE_BIO.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="mt-5">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13.5px] text-muted transition-colors hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              github.com/GT-PINHO
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mt-10 border-t border-surface-line pt-10">
        <ToolsRow />
      </div>
    </Section>
  );
}
