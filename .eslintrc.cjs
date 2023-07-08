const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@antfu'],
  // root: true,
  // extends: ['eslint:recommended'],
  // plugins: ['@typescript-eslint'],
  // parser: '@typescript-eslint/parser',
  rules: {
    indent: ['error', 2],
  },
  //   'no-console': ['warn', { allow: ['warn', 'error'] }],
  //   '@typescript-eslint/consistent-type-imports': 'error',
  //   'no-undef': 'off',
  //   'no-var': 'error',
  //   'prefer-const': 'error',
  //   indent: ['error', 2],
  //   'key-spacing': ['error', { mode: 'strict' }],
  //   "comma-dangle": ["error", "always-multiline"],
  //   'no-use-before-define': [
  //     'error',
  //     {
  //       variables: true,
  //       functions: false,
  //       classes: false,
  //       allowNamedExports: false,
  //     },
  //   ],
  // },
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      extends: ['plugin:astro/recommended'],
      env: {
        'node': true,
        'astro/astro': true,
        'es2020': true,
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
      },
    },
    {
      files: ['*.tsx'],
      env: {
        browser: true,
        es2020: true,
      },
      plugins: ['solid'],
      extends: ['eslint:recommended', 'plugin:solid/typescript'],
      parserOptions: {
        sourceType: 'module',
        extraFileExtensions: ['.ts', '.tsx'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {},
    },
  ],
})
