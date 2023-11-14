# ESLint (and Prettier) configuration

[![npm version](https://badge.fury.io/js/eslint-config-standard-ng.svg)](https://badge.fury.io/js/eslint-config-standard-ng)
![NPM downloads](https://img.shields.io/npm/dm/eslint-config-standard-ng)
[![GitHub issues](https://img.shields.io/github/issues/codertapsu/eslint-standard-ng)](https://github.com/codertapsu/eslint-standard-ng/issues)
![Code Style Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/codertapsu/eslint-standard-ng/blob/main/LICENSE)

ESLint configuration based on recommended best practices for an Angular project

## What it does

This setup lints your JavaScript code based on practices. Check the [.eslintrc.js](https://github.com/codertapsu/eslint-standard-ng/blob/main/.eslintrc.js) file to see what is included. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
npm i -D eslint-config-standard-ng # or yarn install --dev eslint-config-standard-ng
npx install-peerdeps --dev eslint-config-standard-ng
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    'standard-ng'
  ]
}
```

3. Copy the [.prettierrc.js](https://github.com/codertapsu/eslint-standard-ng/blob/main/.prettierrc.js) file from this repository into your project folder
