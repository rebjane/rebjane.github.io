/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    quotes: [0, "single"],
    // we want to force semicolons
    semi: ["error", "always"],
    // we use 2 spaces to indent our code
    indent: ["error", 2],
    // we want to avoid extraneous spaces
    "no-multi-spaces": ["error"],
    "no-unused-vars": "off",
  },
};
