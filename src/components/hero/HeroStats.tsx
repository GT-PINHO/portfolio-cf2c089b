import { motion } from "framer-motion";
import { containerStagger, fadeUp } from "../../lib/motion";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const STATS = [
  { prefix: "R$", to: 18,    suffix: "M+", decimals: 0, label: "Gerenciados em mídia"   },
  { prefix: "",   to: 400,   suffix: "k+", decimals: 0, label: "Captados p/ eventos"    },
  { prefix: "",   to: 2.7,   suffix: "M",  decimals: 1, label: "Alcance em lançamento"  },
  { prefix: "R$", to: 18.42, suffix: "",   decimals: 2, label: "CPL em 4.038 leads"     },
];

export default function HeroStats() {
  return (
    <motion.div
      className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 py-10 lg:grid-cols-4"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {STATS.map((s) => (
        <motion.div key={s.label} variants={fadeUp}>
          <p className="font-display text-[clamp(1.7rem,3.6vw,2.4rem)] font-extrabold leading-none tracking-tight text-ink">
            <AnimatedCounter
              from={0}
              to={s.to}
              decimals={s.decimals}
              prefix={s.prefix}
              suffix={s.suffix}
              duration={1800}
            />
          </p>
          <p className="mt-2.5 text-[12.5px] leading-snug text-muted">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
