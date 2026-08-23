import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

/**
 * `next lint` foi descontinuado (some no Next 16) e o projeto não tinha config
 * nenhuma: `npm run lint` era um script morto. Flat config + ESLint CLI.
 *
 * As skills instaladas (.cursor, .agents, .claude) são gitignored e se
 * reinstalam por manifesto, mesmo papel de node_modules, não são fonte daqui.
 */
const config = [
  {
    ignores: [
      ".next/**",
      ".cursor/**",
      ".agents/**",
      ".claude/**",
      "dist/**",
      "graphify-out/**",
      "node_modules/**",
      "scripts/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default config;
