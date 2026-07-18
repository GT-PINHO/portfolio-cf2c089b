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
      className="relative flex min-h-[100svh] flex-col justify-center pb-section-y pt-24"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
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
              className="mt-5 whitespace-pre-line font-display font-extrabold leading-[1.06] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2rem, 5vw, 3.45rem)" }}
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-[44ch] text-[1.02rem] leading-relaxed text-soft"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.p
              variants={heroItem}
              className="mt-4 text-[13.5px] font-medium text-ink/90"
            >
              {PROFILE.proofLine}
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ButtonPrimary href={primaryHref}>
                {HERO.cta.primary.label}
              </ButtonPrimary>
              <ButtonSecondary href={HERO.cta.secondary.href} download={CV_FILENAME}>
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

          <div className="mx-auto w-full max-w-[300px] lg:col-span-5 lg:mx-0 lg:max-w-none lg:justify-self-end lg:pl-4">
            <div className="lg:ml-auto lg:w-full lg:max-w-[340px]">
              <HeroPortrait />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
