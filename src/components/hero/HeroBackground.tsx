/** Fundo do Hero — gradiente subtil, sem blobs, sem animação */
export default function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden
    >
      {/* Vinheta suave no topo */}
      <div className="absolute inset-x-0 top-0 h-px bg-surface-line" />
      {/* Leve gradiente radial a apontar para o conteúdo */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.07) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
