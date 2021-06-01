# Using Try Catch

Simplify the use of try-catch

![Main Branch](https://github.com/oda2/using-try-catch/actions/workflows/main.yml/badge.svg?branch=main)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/46b647bc48d54dc09d0b31e84fa2644f)](https://app.codacy.com/gh/Oda2/using-try-catch?utm_source=github.com&utm_medium=referral&utm_content=Oda2/using-try-catch&utm_campaign=Badge_Grade_Settings)
[![Coverage Status](https://coveralls.io/repos/github/Oda2/using-try-catch/badge.svg)](https://coveralls.io/github/Oda2/using-try-catch)
[![GitHub license](https://img.shields.io/github/license/Oda2/using-try-catch)](https://github.com/Oda2/using-try-catch/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Oda2/using-try-catch)](https://github.com/Oda2/using-try-catch/issues)
[![GitHub stars](https://img.shields.io/github/stars/Oda2/using-try-catch)](https://github.com/Oda2/using-try-catch/stargazers)

## Installation

```sh
$ npm add using-try-catch

// OR

$ yarn add using-try-catch

// OR

$ pnpm add using-try-catch
```

### Examples

```js
import usingTryCatch from 'using-try-catch';

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
    <script src="https://cdn.jsdelivr.net/npm/using-try-catch@0.1.2"></script>
  </head>
  <body>

    <h1>Exemplo</h1>

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


### NPM Statistics

[![NPM](https://nodei.co/npm/using-try-catch.png)](https://nodei.co/npm/using-try-catch/)

### License
Licensed under [MIT](https://github.com/Oda2/using-try-catch/blob/master/LICENSE)
