import { motion } from "framer-motion";
import { containerStagger, fadeUp } from "../../lib/motion";
import { ButtonPrimary, ButtonSecondary } from "../ui/Button";
import HeroBackground from "./HeroBackground";
import HeroStats from "./HeroStats";

export default function HeroSection() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100vh] flex-col justify-center pt-20 pb-8"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 sm:px-8">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="w-full max-w-full"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Gestor de Tráfego Pago · Meta Ads
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 font-display font-extrabold leading-[1.05] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.25rem)" }}
          >
            Transformo verba
            <br />
            em{" "}
            <span className="text-gradient">resultado</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-[52ch] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-muted"
          >
            Mais de <span className="text-ink">R$18M</span> em mídia gerenciada e{" "}
            <span className="text-ink">400 mil+</span> pessoas captadas para eventos
            nacionais. Tráfego pago, mensuração server-side e sistemas construídos
            com IA quando a operação precisa ir além da planilha.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3.5"
          >
            <ButtonPrimary href="#contato">Vamos conversar</ButtonPrimary>
            <ButtonSecondary href="#sobre">Quem sou eu</ButtonSecondary>
          </motion.div>

          <HeroStats />
        </motion.div>
      </div>
    </header>
  );
}
