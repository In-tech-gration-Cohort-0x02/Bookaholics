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
    indent: ["error", 2], // Use 2 spaces for indentation
    quotes: ["error", "single"], // Use single quotes for strings
    semi: ["error", "always"], // Require semicolons at the end of statements
    "no-console": "warn", // Disallow the use of console (warn instead of error)
    "no-unused-vars": "error", // Disallow unused variables
    eqeqeq: "error", // Require strict equality (===)
    "no-var": "error", // Enforce the no-var rule
  },
};
