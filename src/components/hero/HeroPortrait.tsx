"use client";

import Image from "next/image";
import { useParallaxOffset } from "../../hooks/useParallaxOffset";

/** Retrato do hero: tilt CSS + parallax IO/rAF. */
export default function HeroPortrait() {
  const parallaxRef = useParallaxOffset<HTMLDivElement>();

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
      </div>
    </div>
  );
}
