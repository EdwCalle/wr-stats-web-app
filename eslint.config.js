import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      // parserOptions: { project: './tsconfig.json' },s
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // '@typescript-eslint/explicit-function-return-type': 'error', // already in use
    },
  },
  configPrettier, // Add prettier config (turns off conflicting rules)

  {
    settings: {
      // 'import/resolver': {
      //   typescript: {
      //     project: 'tsconfig.json',
      //   },
      // },
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
]
