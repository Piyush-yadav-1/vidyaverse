import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    plugins: {
      "@typescript-eslint": nextTs,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      // 1. Turn off the strict unescaped quote entity checker
      "react/no-unescaped-entities": "off",
      // 2. Turn off the warning rule for defined variables that aren't used yet
      "@typescript-eslint/no-unused-vars": "off",
      // 3. Demote the explicit 'any' blockages to a warning instead of a hard build-crashing error
      "@typescript-eslint/no-explicit-any": "warn"
    }
  },
  // Override default ignores of eslint-config-next
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ]),
]);

export default eslintConfig;