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
        "on-accent": "var(--on-accent)",
        warn: "rgb(var(--warn-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        soft: "rgb(var(--soft-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
      },
      fontSize: {
        xs: ["var(--fs-xs)", { lineHeight: "1.4" }],
        sm: ["var(--fs-sm)", { lineHeight: "1.5" }],
        base: ["var(--fs-base)", { lineHeight: "1.6" }],
        md: ["var(--fs-md)", { lineHeight: "1.5" }],
        lg: ["var(--fs-lg)", { lineHeight: "1.3" }],
        xl: ["var(--fs-xl)", { lineHeight: "1.2" }],
        "2xl": ["var(--fs-2xl)", { lineHeight: "1.1" }],
        "3xl": ["var(--fs-3xl)", { lineHeight: "1.05" }],
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
