import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },

    plugins: {
      "@typescript-eslint": tseslint,
    },

    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
];
