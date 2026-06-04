import { motion } from "framer-motion";
import { containerStagger } from "../../lib/motion";

type Tool = { name: string; src: string };

const TOOLS: Tool[] = [
  { name: "Meta Ads",          src: "/icons/meta.svg" },
  { name: "Google Ads",        src: "/icons/googleads.svg" },
  { name: "Google Tag Manager",src: "/icons/googletagmanager.svg" },
  { name: "Cursor",            src: "/icons/cursor.svg" },
  { name: "Claude",            src: "/icons/claude.svg" },
  { name: "Figma",             src: "/icons/figma.svg" },
  { name: "Vercel",            src: "/icons/vercel.svg" },
  { name: "Lovable",           src: "/icons/lovable.svg" },
  { name: "GitHub",            src: "/icons/github.svg" },
];

const itemVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ToolsRow() {
  return (
    <div>
      <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
        Ferramentas mais utilizadas
      </p>

      <motion.div
        className="flex flex-wrap items-center gap-x-9 gap-y-7"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {TOOLS.map((t) => (
          <motion.div
            key={t.name}
            variants={itemVariants}
            className="group relative flex items-center justify-center"
            title={t.name}
          >
            <img
              src={t.src}
              alt={t.name}
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8 object-contain transition-all duration-300 group-hover:scale-110"
            />
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-surface-line bg-surface-raised px-2.5 py-1 text-[11px] text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {t.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
