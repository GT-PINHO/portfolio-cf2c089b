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
          DEFAULT: "#080808",
          raised: "#111111",
          line: "#222222",
        },
        accent: {
          DEFAULT: "#06b6d4",
          dim: "#0891b2",
        },
        ink: "#f5f5f5",
        muted: "#737373",
      },
    },
  },
  plugins: [],
} satisfies Config;
