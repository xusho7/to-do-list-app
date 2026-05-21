// ESLint config file --> Spell Checker but for code

import js from '@eslint/js' // basic JavaScript rules
import globals from 'globals' // knows what *window", "document" etc are
import reactHooks from 'eslint-plugin-react-hooks' // rules for React
import reactRefresh from 'eslint-plugin-react-refresh' // rules for Vite
import tseslint from 'typescript-eslint' // rules for typeScript
import { defineConfig, globalIgnores } from 'eslint/config' // don't check the dist folder (thats Vites output)


// Main setting block of ESLint
export default defineConfig([
  globalIgnores(['dist']), // ignore the dist folder
  {
    files: ['**/*.{ts,tsx}'], // check these files
    extends: [ // use these rules
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020, // my code is modern JavaScript
      globals: globals.browser, // my code runs in a browswer
    },
  },
])
