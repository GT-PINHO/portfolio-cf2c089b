"use client";

import Image from "next/image";
import { PROFILE } from "../../lib/content";
import { useParallaxOffset } from "../../hooks/useParallaxOffset";

const BADGE_ID = "availability-arc";

/** Retrato do hero — tilt CSS + parallax IO/rAF + badge de disponibilidade. */
export default function HeroPortrait() {
  const parallaxRef = useParallaxOffset<HTMLDivElement>();
  const arcText = `${PROFILE.availability} · `;

  return (
    <div ref={parallaxRef} className="will-change-transform">
      <div className="hero-portrait-stage relative w-full">
        <div
          className="hero-portrait-card relative w-full overflow-hidden"
          style={{ borderRadius: "12px", aspectRatio: "4 / 5" }}
        >
          <Image
            src="/david.png"
            alt="David Pinho"
            fill
            priority
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 340px"
            className="scale-105 object-cover object-top brightness-[0.95] contrast-[1.04]"
          />
        </div>

        <div
          className="availability-badge pointer-events-none absolute -bottom-3 -left-3 z-10 hidden h-[108px] w-[108px] md:block lg:h-[116px] lg:w-[116px]"
          aria-hidden="true"
        >
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-accent text-[#071216]">
            <svg
              viewBox="0 0 100 100"
              className="availability-badge__spin absolute inset-0 h-full w-full p-1.5"
            >
              <defs>
                <path
                  id={BADGE_ID}
                  d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                />
              </defs>
              <text
                className="fill-current text-[9px] font-semibold uppercase"
                style={{ letterSpacing: "0.16em" }}
              >
                <textPath href={`#${BADGE_ID}`} startOffset="0%">
                  {arcText}
                </textPath>
              </text>
            </svg>
            <span className="relative z-10 text-lg font-bold leading-none" aria-hidden>
              ↗
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
