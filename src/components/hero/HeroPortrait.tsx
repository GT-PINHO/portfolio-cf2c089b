import { motion } from "framer-motion";
import { scaleIn } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function HeroPortrait() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(225,29,36,.45),rgba(225,29,36,.12)_45%,transparent_70%)] blur-2xl"
        animate={reduced ? undefined : { opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-raised">
        <div className="aspect-[4/5] w-full">
          <img
            src="/david.png"
            alt="David Pinho — gestor de tráfego pago"
            width={480}
            height={600}
            className="h-full w-full object-cover object-[center_15%] contrast-[1.05]"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,transparent_55%,rgba(225,29,36,.18))]" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <p className="font-display text-base font-bold tracking-tight text-white">
              David Pinho
            </p>
            <p className="text-[12.5px] text-white/60">
              Gestor de Tráfego · Americana, SP
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10.5px] font-medium text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Disponível
          </span>
        </div>
      </div>
    </motion.div>
  );
}
