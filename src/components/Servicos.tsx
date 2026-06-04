import { motion } from "framer-motion";
import Section from "./ui/Section";
import { RevealGroup } from "./ui/Reveal";
import { fadeUp } from "../lib/motion";

type Service = {
  iconSrc: string;
  iconBg: string;
  title: string;
  description: string;
  points: string[];
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    iconSrc: "/icons/meta.svg",
    iconBg: "rgba(24,119,242,0.18)",
    title: "Gestão de Tráfego Pago",
    description:
      "Estratégia de funil em Meta Ads — estruturação, testes A/B, lookalikes, remarketing e escala orientada a CPL e ROAS em operações de alto volume.",
    points: ["Meta Ads", "Funil completo", "Escala por dados"],
    featured: true,
  },
  {
    iconSrc: "/icons/googletagmanager.svg",
    iconBg: "rgba(66,193,110,0.18)",
    title: "Rastreamento & Mensuração",
    description:
      "GTM, Pixel, API de Conversão e Stape — tracking server-side com auditoria de sinal para o algoritmo otimizar com dados confiáveis.",
    points: ["Server-side", "API de Conversão", "Stape"],
  },
  {
    iconSrc: "/icons/cursor.svg",
    iconBg: "rgba(245,78,0,0.18)",
    title: "Sistemas & Automação com IA",
    description:
      "Soluções internas com IA no fluxo (Cursor, Claude): telas, integrações, backend e hardcode. EasyPanel, ManyChat e agentes próprios para dar autonomia à gestão.",
    points: ["Automação", "Hardcode", "Agentes IA"],
  },
];

export default function Servicos() {
  return (
    <Section
      id="servicos"
      index="02"
      kicker="Serviços"
      title="Como eu transformo verba em crescimento."
      lead='Da estratégia de mídia à ferramenta que sustenta a operação — entrega real, sem promessa de "dev fullstack".'
    >
      <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <motion.article
            key={s.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`group relative overflow-hidden rounded-2xl border border-surface-line bg-surface-raised/60 p-7 lg:p-8 ${
              s.featured ? "ring-1 ring-accent/20" : ""
            }`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: s.iconBg }}
            />

            <div className="relative">
              <div
                className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ background: s.iconBg }}
              >
                <img
                  src={s.iconSrc}
                  alt=""
                  aria-hidden
                  className="h-9 w-9 object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                {s.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-surface-line px-3 py-1 text-[11.5px] font-medium text-muted"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-accent-dim transition-all duration-500 group-hover:w-full"
            />
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  );
}
