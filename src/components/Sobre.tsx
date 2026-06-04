import { motion } from "framer-motion";
import Section from "./ui/Section";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import ToolsRow from "./ui/ToolsRow";
import { scaleIn } from "../lib/motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

const HIGHLIGHTS = [
  "+R$18 milhões em mídia gerenciada",
  "400 mil+ pessoas captadas para eventos nacionais",
  "3+ anos com Meta Ads em operação de alta escala",
  "Rastreamento server-side: GTM, API de Conversão e Stape",
  "Construo sistemas e automações com IA",
  "Google Ads em nível básico (Search & Display)",
];

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
  const reduced = useReducedMotion();
  const mask = "radial-gradient(120% 100% at 60% 30%, #000 52%, transparent 88%)";

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-none"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Glow suave cyan/violet atrás da foto */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,.28), rgba(6,182,212,.12) 55%, transparent 75%)" }}
        animate={reduced ? undefined : { opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative aspect-[4/5] w-full">
        <img
          src="/david.png"
          alt="David Pinho"
          className="h-full w-full object-cover object-[center_15%] brightness-[0.93] contrast-[1.06]"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
          loading="lazy"
          decoding="async"
        />
        {/* Toque violet nas bordas — muito subtil */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_55%_40%,transparent_55%,rgba(124,58,237,.10))]"
        />
      </div>
    </motion.div>
  );
}

export default function Sobre() {
  return (
    <Section
      id="sobre"
      index="01"
      kicker="Quem sou eu"
      title="De origem simples a R$18 milhões em mídia."
    >
      {/* Layout: checklist/bio esquerda · foto direita */}
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <RevealGroup className="mb-9 flex flex-col gap-3">
            {HIGHLIGHTS.map((h) => (
              <RevealItem key={h} className="flex items-start gap-3">
                <Check />
                <span className="text-[15px] leading-snug text-ink">{h}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="space-y-4 text-[1.02rem] leading-relaxed text-muted">
            <p>
              Sou o <strong className="text-ink">David Pinho</strong>. Comecei{" "}
              <strong className="text-ink">do zero em 2023</strong>: mudei para
              Americana–SP atrás de uma oportunidade e construí, do começo, uma
              carreira em gestão de tráfego pago.
            </p>
            <p>
              Hoje conduzo campanhas nacionais de Meta Ads no{" "}
              <strong className="text-ink">Legacy Eco Group</strong>, com cases como{" "}
              <strong className="text-ink">R$100 mil faturados em um único dia</strong>{" "}
              e mentalidade orientada a resultado antes de qualquer coisa.
            </p>
            <p>
              O que me move é resolver de ponta a ponta. Quando a operação precisa
              de uma ferramenta, eu{" "}
              <strong className="text-ink">construo com IA</strong> — frontend,
              backend, automações e hardcode. Não tenho diploma em programação; tenho{" "}
              <strong className="text-ink">problemas resolvidos em produção</strong>.
            </p>
          </Reveal>
        </div>

        <Portrait />
      </div>

      <div className="mt-16 border-t border-surface-line pt-12">
        <ToolsRow />
      </div>
    </Section>
  );
}
