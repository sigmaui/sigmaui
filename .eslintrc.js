module.exports = {
  root: true,
  env: { browser: true, es6: true, node: true },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: ['./tsconfig.json'],
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: { project: './tsconfig.json' } },
  },
  rules: {
    'prettier/prettier': ['error', { semi: true, singleQuote: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    'prefer-const': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
    semi: ['error', 'always'],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    // ⚠️ Không tắt react/react-in-jsx-scope ở root
    // vì packages có thể build cho React 16 hoặc tool chưa inject React
  },
  ignorePatterns: [
    'dist/',
    'node_modules/',
    '.next/',
    '.turbo/',
    '.changeset/',
    '*.config.js',
    '*.config.ts',
  ],
};
