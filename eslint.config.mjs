import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    env: {
      es2022: true,
      node: true,
    },
  },
});

const eslintConfig = [
  {
    ignores: [".next/*", "node_modules/*"],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    rules: {
      // Add any TypeScript-specific rules here
    },
  },
  {
    rules: {
      // Disable the rule that's causing issues
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-unescaped-entities": "off"
    },
  },
];

export default eslintConfig;