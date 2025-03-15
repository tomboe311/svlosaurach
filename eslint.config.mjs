import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";

export default {
  languageOptions: { globals: {...globals.browser, ...globals.node} },
  ...pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginReactConfig,
  plugins: {
    'jsx-a11y': pluginJsxA11y,
    'import': pluginImport,
    'prettier': pluginPrettier,
  },
};