import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    ignores: ['node_modules', 'public', 'build', '.vite', '.env', '*.config.js']
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': 'error',
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
    },
  }
])