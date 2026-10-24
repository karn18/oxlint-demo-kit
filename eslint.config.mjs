import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: { globals: { ...globals.browser } },
    rules: {
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "prefer-const": "error",
      "no-var": "error",
    },
  },
  { ignores: ["dist/**", "node_modules/**"] },
];
