module.exports = {
  plugins: ["tailwindcss"],
  extends: [
    "@remix-run/eslint-config",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: [
    ".cache",
    "/node_modules",
  ],
  settings: {
    tailwindcss: {
      config: "twind.config.ts",
    },
  },
};
