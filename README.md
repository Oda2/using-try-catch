# Using Try Catch

Simplify the use of try-catch.
Avoid writing code that contains high scope decoupling with using-try-catch.

![Main Branch](https://github.com/oda2/using-try-catch/actions/workflows/main.yml/badge.svg?branch=main)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/46b647bc48d54dc09d0b31e84fa2644f)](https://app.codacy.com/gh/Oda2/using-try-catch?utm_source=github.com&utm_medium=referral&utm_content=Oda2/using-try-catch&utm_campaign=Badge_Grade_Settings)
[![Coverage Status](https://coveralls.io/repos/github/Oda2/using-try-catch/badge.svg)](https://coveralls.io/github/Oda2/using-try-catch)
[![GitHub license](https://img.shields.io/github/license/Oda2/using-try-catch)](https://github.com/Oda2/using-try-catch/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Oda2/using-try-catch)](https://github.com/Oda2/using-try-catch/issues)
[![GitHub stars](https://img.shields.io/github/stars/Oda2/using-try-catch)](https://github.com/Oda2/using-try-catch/stargazers)
[![CDN jsdelivr](https://img.shields.io/badge/cdn%20jsdelivr-0.3.0-green)](https://cdn.jsdelivr.net/npm/using-try-catch@0.3.0/dist/usingTryCatch.js)
[![Vulnerability](https://img.shields.io/snyk/vulnerabilities/github/oda2/using-try-catch)](https://github.com/Oda2/using-try-catch)
[![npm](https://img.shields.io/npm/v/using-try-catch?color=green)](https://www.npmjs.com/package/using-try-catch)
![npm](https://img.shields.io/npm/dy/using-try-catch)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FOda2%2Fusing-try-catch.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FOda2%2Fusing-try-catch?ref=badge_shield)

### SonarCloud

[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Oda2_using-try-catch&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=Oda2_using-try-catch)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Oda2_using-try-catch&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Oda2_using-try-catch)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Oda2_using-try-catch&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Oda2_using-try-catch)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Oda2_using-try-catch&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Oda2_using-try-catch)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Oda2_using-try-catch&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Oda2_using-try-catch)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Oda2_using-try-catch&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Oda2_using-try-catch)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=Oda2_using-try-catch&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Oda2_using-try-catch)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Oda2_using-try-catch&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Oda2_using-try-catch)


## Installation

```sh
$ npm add using-try-catch

// OR

$ yarn add using-try-catch

// OR

$ pnpm add using-try-catch
```

## The problem

Several times we need to scope our async/await as follows:

```js
const axios = require('axios');

const fetchDog = async () => {
  const { data } = await axios('https://dog.ceo/api/breeds/image/random');
  return data;
}

const example = async () => {
  let promise1;
  let promise2;
  let err = false;

  try {
    promise1 = await fetchDog();
  } catch {
    err = true;
  }

  try {
    promise2 = await fetchDog();
  } catch {
    err = true;
  }

  if (err) {
    return 'Boom'
  }

  return {
    dog1: promise1,
    dog2: promise2
  }
};

example();
```

> With using-try-catch we can simplify this operation as follows

```js
const axios = require('axios');

const fetchDog = async () => {
  const { data } = await axios('https://dog.ceo/api/breeds/image/random');
  return data;
}

const example = async () => {
  const promise1 = await usingTryCatch(fetchDog());
  const promise2 = await usingTryCatch(fetchDog());

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

> Or you can group all promises

```js
const axios = require('axios');

const fetchDog = async () => {
  const { data } = await axios('https://dog.ceo/api/breeds/image/random');
  return data;
}

const example = async () => {
  const _promise = [
    fetchDog(),
    fetchDog(),
    fetchDog()
  ]

  const promise = await usingTryCatch(_promise);

  if promise.err {
    return 'Boom';
  }

  return {
    promise1: promise.data[0],
    promise2: promise.data[1],
    promise3: promise.data[2],
  };
}

example();
```

## Live Demo

In order to carry out a test without cloning or installing the repository, you can test directly through CodeSandbox in an example I created.

[![Edit admiring-sun-5qry6](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/using-try-catch-zul50)

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
    <p id="loading">Loading...</p>
    <img id="dog-1" />
    <img id="dog-2" />

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/using-try-catch@0.3.0/dist/usingTryCatch.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function loaded() {

        const fetchDog = async () => {
          const res = await fetch('https://dog.ceo/api/breeds/image/random');
          const data = await res.json();

          return data;
        };

        const bootstrap = async () => {
          const result = await usingTryCatch([fetchDog(), fetchDog()]);
          
          if (result.error) {
            document.getElementById('loading').innerText = result.error;
          } else {
            document.querySelector('[id="dog-1"]').src = result.data[0].message;
            document.querySelector('[id="dog-2"]').src = result.data[1].message;
            document.querySelector('[id="loading"]').innerText = '';
          }
        };
        
        bootstrap();
      });
    </script>
  </body>
</html>
```

### Fetch Example

```js
const https = require('https');
const { usingTryCatch } = require('using-try-catch');

const fetchDog = () => new Promise((resolve, reject) => {
  const options = {
    host: 'dog.ceo', //Xdog.ceo
    path: '/api/breeds/image/random',
    method: 'GET',
    port: 443
  };

  const request = https.request(options, (res) => {
    res.setEncoding('utf-8');

    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => resolve(JSON.parse(body)));
    res.on('error', (error) => reject(error));
  });

  request.on('error', (error) => reject(`Error in request: ${error}`));
  request.end();
});

const fetchData = async () => {
  const { data, error } = await usingTryCatch(fetchDog());

  if (error) {
    return console.log('Error => ', error); // Error in request: Error: getaddrinfo ENOTFOUND Xdog.ceo
  }

  return console.log('Data => ', data); // { message: 'https://images.dog.ceo/breeds/terrier-fox/n02095314_3189.jpg', status: 'success' }
};

fetchData();
```

### Promise example

```js
const usingTryCatch = require('using-try-catch');

const example = async () => {
  const promise = new Promise((resolve) => resolve('exemple'));

  const result = await usingTryCatch(promise);
  console.log(result.data); // 'example'
};

example();
```

### NPM Statistics

[![NPM](https://nodei.co/npm/using-try-catch.png)](https://nodei.co/npm/using-try-catch/)
### License
Licensed under [MIT](https://github.com/Oda2/using-try-catch/blob/master/LICENSE)


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FOda2%2Fusing-try-catch.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FOda2%2Fusing-try-catch?ref=badge_large)
