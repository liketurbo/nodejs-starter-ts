module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "get-off-my-lawn",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    // fix: typescript
    "@typescript-eslint/explicit-function-return-type": "off",

    // enable: eslint-plugin-simple-import-sort
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": "error",

    // fix: tests
    "jest/valid-describe": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
}
