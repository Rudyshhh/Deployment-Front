import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable all ESLint rules
      "no-console": "off",
      "no-debugger": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-redeclare": "off",
      "no-alert": "off",
      "no-eval": "off",
      "no-duplicate-imports": "off",
      "no-implicit-coercion": "off",
      "no-new-func": "off",
      "no-shadow": "off",
      "no-empty": "off",
      "eqeqeq": "off",
      "curly": "off",
      "consistent-return": "off",
      "semi": "off",
      "quotes": "off",
      "indent": "off",
      "linebreak-style": "off",
      "react/react-in-jsx-scope": "off", // for React 18 or higher
      // Add any other specific rules you want to disable
    },
  },
];

export default eslintConfig;
