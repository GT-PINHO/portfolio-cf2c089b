import { motion } from "framer-motion";
import { heroContainer, heroItem } from "../../lib/motion";
import { ButtonPrimary, ButtonSecondary } from "../ui/Button";
import Container from "../ui/Container";
import HeroBackground from "./HeroBackground";
import HeroPortrait from "./HeroPortrait";
import { HERO, PROFILE } from "../../lib/content";
import { CV_FILENAME } from "../../lib/cv";
import { whatsappUrl } from "../../lib/contact";

export default function HeroSection() {
  const primaryHref =
    HERO.cta.primary.href === "whatsapp" ? whatsappUrl() : HERO.cta.primary.href;

  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center pb-10 pt-[5.5rem] sm:pb-section-y sm:pt-24"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <motion.p
              variants={heroItem}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted"
            >
              {PROFILE.location}
            </motion.p>

            <motion.p
              variants={heroItem}
              className="mt-3 max-w-[40ch] text-[12.5px] leading-snug text-accent"
            >
              {HERO.eyebrow}
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="mt-4 whitespace-pre-line font-display font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:mt-5 sm:leading-[1.06]"
              style={{ fontSize: "clamp(1.85rem, 7.2vw, 3.45rem)" }}
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-4 max-w-[44ch] text-[0.98rem] leading-relaxed text-soft sm:mt-5 sm:text-[1.02rem]"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.p
              variants={heroItem}
              className="mt-3 text-[13px] font-medium text-ink/90 sm:mt-4 sm:text-[13.5px]"
            >
              {PROFILE.proofLine}
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            >
              <ButtonPrimary href={primaryHref} className="w-full sm:w-auto">
                {HERO.cta.primary.label}
              </ButtonPrimary>
              <ButtonSecondary
                href={HERO.cta.secondary.href}
                download={CV_FILENAME}
                className="w-full sm:w-auto"
              >
                {HERO.cta.secondary.label}
              </ButtonSecondary>
            </motion.div>

            <motion.p variants={heroItem} className="mt-6 text-[13px] text-muted">
              {PROFILE.availability}
              {" · "}
              <a
                href={HERO.openSource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors hover:text-ink"
              >
                {HERO.openSource.label}
              </a>
            </motion.p>
          </motion.div>

          <div className="order-1 mx-auto w-full max-w-[220px] sm:max-w-[280px] lg:order-2 lg:col-span-5 lg:mx-0 lg:max-w-none lg:justify-self-end lg:pl-4">
            <div className="lg:ml-auto lg:w-full lg:max-w-[340px]">
              <HeroPortrait />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
