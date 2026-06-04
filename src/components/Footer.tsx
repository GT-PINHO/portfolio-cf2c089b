export default function Footer() {
  return (
    <footer className="border-t border-surface-line py-10">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="font-display text-sm font-bold tracking-tight text-ink">
          David <span className="text-accent">Pinho</span>
        </p>
        <p className="text-[13px] text-muted">
          Gestor de Tráfego Pago · Meta Ads & Sistemas com IA · Americana — SP
        </p>
        <p className="text-[13px] text-muted">© 2026</p>
      </div>
    </footer>
  );
}
