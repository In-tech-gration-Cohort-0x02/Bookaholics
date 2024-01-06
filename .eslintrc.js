module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": "warn",
    "no-unused-vars": "error",
    eqeqeq: "error",
    "no-var": "error",
  },
};
