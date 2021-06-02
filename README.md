# Using Try Catch

Simplify the use of try-catch.
Avoid writing code that contains high scope decoupling with using-try-catch.

![Main Branch](https://github.com/oda2/using-try-catch/actions/workflows/main.yml/badge.svg?branch=main)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/46b647bc48d54dc09d0b31e84fa2644f)](https://app.codacy.com/gh/Oda2/using-try-catch?utm_source=github.com&utm_medium=referral&utm_content=Oda2/using-try-catch&utm_campaign=Badge_Grade_Settings)
[![Coverage Status](https://coveralls.io/repos/github/Oda2/using-try-catch/badge.svg)](https://coveralls.io/github/Oda2/using-try-catch)
[![GitHub license](https://img.shields.io/github/license/Oda2/using-try-catch)](https://github.com/Oda2/using-try-catch/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Oda2/using-try-catch)](https://github.com/Oda2/using-try-catch/issues)
[![GitHub stars](https://img.shields.io/github/stars/Oda2/using-try-catch)](https://github.com/Oda2/using-try-catch/stargazers)
[![CDN jsdelivr](https://img.shields.io/badge/cdn%20jsdelivr-0.1.5-green)](https://cdn.jsdelivr.net/npm/using-try-catch@0.1.5/dist/index.js)
[![NPM Size](https://img.shields.io/bundlephobia/min/using-try-catch)](https://www.npmjs.com/package/using-try-catch)
[![Vulnerability](https://img.shields.io/snyk/vulnerabilities/github/oda2/using-try-catch)](https://github.com/Oda2/using-try-catch)

## Installation

```sh
$ npm add using-try-catch

// OR

$ yarn add using-try-catch

// OR

$ pnpm add using-try-catch
```

## Examples

### Typescript

```js
import usingTryCatch from 'using-try-catch';

const example = async () => {
  const promise = new Promise((resolve) => resolve('exemple'));

  const result = await usingTryCatch(promise);
  console.log(result.data); // 'example'
};

example();
```

### CommonJS

```js
const usingTryCatch = require('using-try-catch');

const example = async () => {
  const promise = new Promise((resolve) => resolve('exemple'));

  const result = await usingTryCatch(promise);
  console.log(result.data); // 'example'
};

example();
```

### Browser Examples

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>Example using-try-catch</title>
  </head>
  <body>
    <h1>Example</h1>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/using-try-catch@0.1.5/dist/index.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function loaded() {

        const example = async () => {
          const promise = new Promise((resolve) => resolve('exemple'));

          const result = await usingTryCatch(promise);
          console.log(result.data); // 'example'
        };
        
        example();
      });
    </script>
  </body>
</html>
```

## The problem

Several times we need to scope our async/await as follows:

```js
const example = async () => {
  let promise1;
  let promise2;
  let err = false;

  try {
    promise1 = await new Promise((resolve) => resolve('exemple 1'));
  } catch {
    err = true;
  }

  try {
    promise2 = await new Promise((resolve) => resolve('exemple 2'));
  } catch {
    err = true;
  }

  if (err) {
    return 'Boom'
  }

  return {
    text1: promise1,
    text2: promise2
  }
};

example();
```

With using-try-catch we can simplify this operation as follows

```js
const example = async () => {
  const promise1 = await usingTryCatch(await new Promise((resolve) => resolve('exemple 1')));
  const promise2 = await usingTryCatch(await new Promise((resolve) => resolve('exemple 2')));

  if (promise1.err || promise2.err) {
    return 'Boom';
  }

  return {
    text1: promise1.data,
    text2: promise2.data
  }
};

example();
```

### NPM Statistics

[![NPM](https://nodei.co/npm/using-try-catch.png)](https://nodei.co/npm/using-try-catch/)

### License
Licensed under [MIT](https://github.com/Oda2/using-try-catch/blob/master/LICENSE)
