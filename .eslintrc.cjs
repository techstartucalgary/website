/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("eslint").Linter.Config} */

const path = require("path");
const prettierConfig = require(path.join(__dirname, ".prettierrc.cjs"));

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:tailwindcss/recommended",
    "next",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "promise",
    "sort-keys",
    "sort-destructure-keys",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    eqeqeq: ["error", "smart"],
    "no-eval": "error",
    "no-var": "error",
    "prettier/prettier": ["error", prettierConfig],
    "react/display-name": "off",
    "react/jsx-sort-props": "error",
    "react/no-unknown-property": "error",
    "react/sort-comp": 0,
    "sort-destructure-keys/sort-destructure-keys": 2,
    // "no-restricted-imports": ["error", { patterns: [".*"] }],
    "sort-keys": "error",
    "sort-keys/sort-keys-fix": "error",
  },
};

module.exports = config;
