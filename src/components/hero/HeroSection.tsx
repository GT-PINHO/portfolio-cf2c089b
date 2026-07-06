import { motion } from "framer-motion";
import { heroContainer, heroItem } from "../../lib/motion";
import { ButtonPrimary, ButtonSecondary } from "../ui/Button";
import HeroBackground from "./HeroBackground";
import HeroPortrait from "./HeroPortrait";
import { HERO } from "../../lib/content";

export default function HeroSection() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100vh] flex-col justify-center pt-20 pb-10"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(280px,380px)] lg:gap-16 xl:grid-cols-[1fr_minmax(320px,420px)]">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={heroItem}>
              <span className="inline-flex items-center gap-2 rounded-full border border-surface-line bg-surface-raised px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {HERO.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroItem}
              className="mt-7 whitespace-pre-line font-display font-extrabold leading-[1.04] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
            >
              {HERO.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={heroItem}
              className="mt-6 max-w-[56ch] text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed text-muted"
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroItem}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <ButtonPrimary href="#contato">{HERO.cta.primary}</ButtonPrimary>
              <ButtonSecondary href="#servicos">{HERO.cta.secondary}</ButtonSecondary>
            </motion.div>

            {/* Proof points */}
            <motion.div
              variants={heroItem}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-2"
            >
              {HERO.proofPoints.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-2 text-[12.5px] text-muted"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                  {p}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <div className="mx-auto w-full max-w-[380px] lg:mx-0 lg:max-w-none">
            <HeroPortrait />
          </div>
        </div>
      </div>
    </header>
  );
}
