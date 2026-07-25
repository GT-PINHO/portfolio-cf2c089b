/** Linha do Hero: o glow global fica no AmbientField */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-x-0 top-0 h-px bg-surface-line" />
    </div>
  );
}
