import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const BLOBS = [
  {
    color: "#06b6d4",
    animate: {
      x: ["-10%", "25%", "5%", "-10%"],
      y: ["-10%", "15%", "-20%", "-10%"],
      scale: [1, 1.15, 0.9, 1],
    },
    duration: 18,
    className: "absolute h-[55%] w-[55%]",
  },
  {
    color: "#7c3aed",
    animate: {
      x: ["55%", "20%", "50%", "55%"],
      y: ["5%", "-15%", "25%", "5%"],
      scale: [1.1, 0.85, 1.2, 1.1],
    },
    duration: 22,
    className: "absolute h-[50%] w-[50%]",
  },
  {
    color: "#0891b2",
    animate: {
      x: ["25%", "-5%", "35%", "25%"],
      y: ["45%", "25%", "5%", "45%"],
      scale: [0.9, 1.25, 1, 0.9],
    },
    duration: 26,
    className: "absolute h-[45%] w-[45%]",
  },
];

export default function HeroBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{ filter: "blur(80px) saturate(1.6)" }}
      >
        {BLOBS.map((b, i) => (
          <motion.div
            key={i}
            className={b.className}
            animate={reduced ? undefined : b.animate}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
              opacity: 0.45,
            }}
          />
        ))}
      </div>

      {/* Vinheta para texto legível */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,rgba(5,5,15,0.75)_80%)]" />
      {/* Gradiente base no topo para o nav */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#05050f] to-transparent" />
    </div>
  );
}
