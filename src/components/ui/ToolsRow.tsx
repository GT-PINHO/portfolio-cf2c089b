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
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ToolsRow() {
  return (
    <div className="py-6">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
        Ferramentas mais utilizadas
      </p>

      <motion.div
        className="grid grid-cols-5 md:grid-cols-9"
        style={{ gap: "24px" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {TOOLS.map((t) => (
          <motion.div
            key={t.name}
            variants={itemVariants}
            title={t.name}
            className="group flex flex-col items-center gap-2"
            style={{ opacity: 1 }}
          >
            <div className="relative flex items-center justify-center">
              <img
                src={t.src}
                alt={t.name}
                width={36}
                height={36}
                loading="lazy"
                className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110 sm:h-9 sm:w-9"
                style={{ opacity: 1 }}
              />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-surface-line bg-surface-raised px-2.5 py-1 text-[11px] text-ink opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                {t.name}
              </span>
            </div>

            <span
              className="max-w-[64px] text-center leading-tight text-muted"
              style={{ fontSize: "11px", opacity: 0.6 }}
            >
              {t.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
