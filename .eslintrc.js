/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      plugins: ['simple-import-sort'],
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              ['^@angular.*'],
              ['^'],
              ['^@.*'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ],
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowFunctionsWithoutTypeParameters: true,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'off',
              constructors: 'explicit',
              methods: 'explicit',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^[_]*$',
            varsIgnorePattern: '^[_]*$',
            caughtErrorsIgnorePattern: '^[_]*$',
          },
        ],
        '@typescript-eslint/no-explicit-any': [
          'warn',
          {
            fixToUnknown: true,
            ignoreRestArgs: true,
          },
        ],
      },
    },
  ],
};

module.exports = config;
