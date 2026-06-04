import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bricolage Grotesque", "system-ui", "sans-serif"],
        sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#05050f",
          raised: "#0d0d1a",
          line: "#1a1a2e",
        },
        accent: {
          DEFAULT: "#06b6d4",   // cyan-500
          bright: "#22d3ee",    // cyan-400
          dim: "#0891b2",       // cyan-600
        },
        violet: {
          DEFAULT: "#7c3aed",   // violet-700
          bright: "#8b5cf6",    // violet-500
          dim: "#6d28d9",       // violet-800
        },
        ink: "#f0f0ff",
        muted: "#8888aa",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%)",
        "gradient-brand-text":
          "linear-gradient(90deg, #22d3ee 0%, #8b5cf6 50%, #22d3ee 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
