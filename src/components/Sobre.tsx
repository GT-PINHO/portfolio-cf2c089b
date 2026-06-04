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

  return (
    <motion.div
      className="relative w-full"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Glow suave atrás da foto */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,.28), rgba(6,182,212,.12) 55%, transparent 75%)" }}
        animate={reduced ? undefined : { opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Foto: 350px em mobile, aspect 4/5 em desktop */}
      <div
        className="w-full overflow-hidden md:aspect-[4/5]"
        style={{
          height: undefined,
          borderRadius: "12px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)",
        }}
      >
        <img
          src="/david.png"
          alt="David Pinho"
          className="h-full w-full object-cover brightness-[0.95] contrast-[1.04]"
          style={{
            objectPosition: "top center",
            height: "inherit",
          }}
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
      index="01"
      kicker="Quem sou eu"
      title="De origem simples a R$18 milhões em mídia."
      className="pt-8 md:pt-12 pb-12 md:pb-20"
    >
      {/* Desktop: 2 colunas 50/50 | Mobile: foto em cima, texto em baixo */}
      <div className="grid items-start gap-10 [grid-template-columns:1fr] [grid-template-rows:350px_auto] md:[grid-template-columns:1fr_1fr] md:[grid-template-rows:auto]">
        {/* Mobile: foto aparece primeiro (order-1 no mobile, order-2 no desktop) */}
        <div className="order-1 md:order-2 md:h-auto">
          <Portrait />
        </div>

        {/* Texto: order-2 no mobile, order-1 no desktop */}
        <div className="order-2 md:order-1">
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
              Sou o <strong className="text-ink">David Pinho</strong>. Em 2023,
              saí de <strong className="text-ink">Senador Camará — Rio de Janeiro</strong>{" "}
              e fui para Americana, SP, atrás de uma oportunidade que eu ainda estava
              construindo. Sem rede, sem histórico, do zero.
            </p>
            <p>
              Hoje conduzo campanhas nacionais de Meta Ads no{" "}
              <strong className="text-ink">Legacy Eco Group</strong>, com cases como{" "}
              <strong className="text-ink">R$100 mil faturados em um único dia</strong>{" "}
              e mais de <strong className="text-ink">R$18M gerenciados</strong>. Resultado
              construído na prática, sem atalho.
            </p>
            <p>
              O que me diferencia é não parar no tráfego. Quando a operação precisa
              de uma ferramenta, eu <strong className="text-ink">construo com IA</strong>{" "}
              — interfaces, sistemas internos e automações do zero. Não tenho diploma
              em programação; tenho{" "}
              <strong className="text-ink">problemas resolvidos em produção</strong>.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-10 border-t border-surface-line pt-10">
        <ToolsRow />
      </div>
    </Section>
  );
}
