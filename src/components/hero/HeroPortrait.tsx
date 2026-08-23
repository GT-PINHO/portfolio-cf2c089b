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
            className="hero-portrait-img scale-105 object-cover object-top"
          />
          {/*
            A foto é escura sobre uma página escura e o card sumia. A separação
            vem do halo atrás (.hero-portrait-stage::before) e do anel da borda,
            não de camada por cima da imagem: overlay sobre o fundo chapado do
            retrato deixava um véu cinza com emenda visível.
          */}
          <span aria-hidden className="hero-portrait-rim" />
        </div>
      </div>
    </div>
  );
}
