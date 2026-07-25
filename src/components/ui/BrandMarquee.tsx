"use client";

import { STACK_BRANDS } from "@/lib/stack-brands";

type BrandMarqueeProps = {
  className?: string;
};

function LogoRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
      aria-hidden={ariaHidden}
    >
      {STACK_BRANDS.map((brand) => (
        <li
          key={`${brand.name}-${ariaHidden ? "dup" : "main"}`}
          className="flex items-center gap-2.5 opacity-[0.72] transition-opacity hover:opacity-100"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.src}
            alt=""
            width={22}
            height={22}
            className="h-[22px] w-[22px] object-contain"
            loading="lazy"
            decoding="async"
          />
          <span className="whitespace-nowrap text-[12.5px] font-medium tracking-wide text-soft">
            {brand.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Faixa infinita de logos da stack (inspirada em marquee do 21st). */
export default function BrandMarquee({ className = "" }: BrandMarqueeProps) {
  return (
    <div
      className={`relative overflow-hidden border border-surface-line bg-surface-raised/25 py-4 ${className}`}
      role="region"
      aria-label="Ferramentas da stack em produção"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[var(--bg)] to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[var(--bg)] to-transparent sm:w-16"
        aria-hidden
      />

      <div className="brand-marquee flex w-max">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}
