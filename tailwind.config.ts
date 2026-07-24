import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "rgb(var(--bg-rgb) / <alpha-value>)",
          raised: "rgb(var(--bg-2-rgb) / <alpha-value>)",
          line: "rgb(var(--line-rgb) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
          dim: "var(--accent-dim)",
        },
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        soft: "rgb(var(--soft-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
      },
      maxWidth: {
        page: "1200px",
      },
      spacing: {
        gutter: "var(--page-gutter)",
        "section-y": "var(--section-y)",
        header: "var(--header-h)",
      },
    },
  },
  plugins: [],
} satisfies Config;
