import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginJest from 'eslint-plugin-jest';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: globals.jest, 
      },
      ecmaVersion: 2021,
    },
  },
  pluginJs.configs.recommended,
  eslintPluginJest.configs.recommended,
]