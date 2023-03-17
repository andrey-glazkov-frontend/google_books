/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable quotes */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": ["error", "never"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "no-console": 0,
    "import/no-cycle": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": 0,
    "linebreak-style": 0,
  },
};
