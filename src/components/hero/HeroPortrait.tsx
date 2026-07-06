import { motion } from "framer-motion";
import { scaleIn } from "../../lib/motion";

export default function HeroPortrait() {
  return (
    <motion.div
      className="relative w-full"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
    >
      <div
        className="w-full overflow-hidden md:aspect-[4/5]"
        style={{
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <img
          src="/david.png"
          alt="David Pinho"
          className="h-full w-full object-cover brightness-[0.95] contrast-[1.04]"
          style={{ objectPosition: "top center" }}
          loading="eager"
          decoding="async"
        />
      </div>
    </motion.div>
  );
}
