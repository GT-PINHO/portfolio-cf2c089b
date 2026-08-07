"use client";

import { useRef } from "react";
import { ButtonPrimary, ButtonSecondary } from "../ui/Button";
import Container from "../ui/Container";
import HeroBackground from "./HeroBackground";
import HeroPortrait from "./HeroPortrait";
import { HERO, PROFILE } from "../../lib/content";
import { CV_FILENAME } from "../../lib/cv";
import { whatsappUrl } from "../../lib/contact";
import { useAmbientMode } from "../../lib/ambient-intensity";

export default function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  useAmbientMode("hero", "hero", rootRef);

  const primaryHref =
    HERO.cta.primary.href === "whatsapp" ? whatsappUrl() : HERO.cta.primary.href;

  return (
    <header
      ref={rootRef}
      id="top"
      className="relative flex min-h-[clamp(560px,80svh,780px)] flex-col justify-center pb-6 pt-[5.5rem] sm:pb-8 sm:pt-24"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Above-the-fold sem opacity:0 — legível com JS off / aba em background */}
          <div className="order-1 lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {PROFILE.location}
            </p>

            <div className="mt-3 max-w-[40ch] text-xs leading-snug text-accent">
              <p>{PROFILE.role}</p>
              {PROFILE.specialty ? (
                <p className="mt-0.5 text-accent/80">{PROFILE.specialty}</p>
              ) : null}
            </div>

            <h1
              className="mt-4 font-display font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:mt-5 sm:leading-[1.06]"
              style={{ fontSize: "clamp(1.85rem, 7.2vw, 3.45rem)" }}
            >
              {HERO.headline}
            </h1>

            <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-soft sm:mt-5">
              {HERO.subheadline}
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
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
            </div>

            <p className="mt-6 text-sm text-muted">{PROFILE.availability}</p>
          </div>

          <div className="order-2 mx-auto w-full max-w-[220px] sm:max-w-[280px] lg:col-span-5 lg:mx-0 lg:max-w-none lg:justify-self-end lg:pl-4">
            <div className="lg:ml-auto lg:w-full lg:max-w-[340px]">
              <HeroPortrait />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
