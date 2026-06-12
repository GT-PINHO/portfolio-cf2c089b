import { motion } from "framer-motion";

type Tool = { name: string; src: string };

const TOOLS: Tool[] = [
  { name: "Meta Ads",           src: "/icons/meta.svg" },
  { name: "Google Ads",         src: "/icons/googleads.svg" },
  { name: "Google Tag Manager", src: "/icons/googletagmanager.svg" },
  { name: "Cursor",             src: "/icons/cursor.svg" },
  { name: "Claude",             src: "/icons/claude.svg" },
  { name: "Figma",              src: "/icons/figma.svg" },
  { name: "Vercel",             src: "/icons/vercel.svg" },
  { name: "Lovable",            src: "/icons/lovable.svg" },
  { name: "GitHub",             src: "/icons/github.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function ToolsRow() {
  return (
    <div className="py-4">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
        Ferramentas mais utilizadas
      </p>

      <motion.div
        className="flex flex-wrap gap-2.5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {TOOLS.map((t) => (
          <motion.div
            key={t.name}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group flex items-center gap-2 rounded-lg border border-surface-line bg-surface-raised/50 px-3 py-2 transition-colors hover:border-accent/30"
          >
            <img
              src={t.src}
              alt=""
              aria-hidden
              className="h-5 w-5 shrink-0 object-contain"
              loading="lazy"
            />
            <span className="whitespace-nowrap text-[12.5px] text-muted transition-colors group-hover:text-ink">
              {t.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
