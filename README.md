# Using Try Catch

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


### NPM Statistics

[![NPM](https://nodei.co/npm/using-try-catch.png)](https://nodei.co/npm/using-try-catch/)

### License
Licensed under [MIT](https://github.com/Oda2/using-try-catch/blob/master/LICENSE)