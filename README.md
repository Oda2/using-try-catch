<div align="center">
  <img src="assets/logo.png" alt="using-try-catch" width="200" />
  <h1>using-try-catch</h1>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/using-try-catch">
    <img src="https://img.shields.io/npm/v/using-try-catch?color=EA4335&label=npm&style=flat-square" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/using-try-catch">
    <img src="https://img.shields.io/npm/dt/using-try-catch?color=28A745&style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/Oda2/using-try-catch/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/Oda2/using-try-catch/ci.yml?color=9B59B6&label=CI&style=flat-square" alt="tests" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/using-try-catch?color=A32E27&style=flat-square" alt="license" />
  </a>
</p>

> A tiny utility that simplifies try-catch handling in JavaScript/TypeScript. No more repetitive try-catch blocks for every async operation.

## Why?

Handling errors with async/await often leads to verbose code:

```js
const fetchData = async () => {
  let data;
  let error;

  try {
    data = await api.get('/user');
  } catch (err) {
    error = err;
  }

  if (error) return handleError(error);
  return processData(data);
};
```

## Quick Start

```bash
npm install using-try-catch
```

```js
import usingTryCatch from 'using-try-catch';

const fetchData = async () => {
  const { data, error } = await usingTryCatch(api.get('/user'));

  if (error) return handleError(error);
  return processData(data);
};
```

That's it! Returns `{ data, error }` - always.

## Features

- **Zero dependencies** - Ultra lightweight
- **TypeScript support** - Fully typed out of the box
- **Universal** - Works in Node.js and browsers
- **Flexible** - Handles single or multiple promises

## Usage

### Single Promise

```js
const { data, error } = await usingTryCatch(fetchUser());

if (error) {
  console.log('Failed:', error.message);
  return;
}

console.log('User:', data.name);
```

### Multiple Promises (Parallel)

```js
const { data, error } = await usingTryCatch([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);

if (error) {
  console.log('One or more requests failed');
  return;
}

const [user, posts, comments] = data;
```

## API

```ts
usingTryCatch<T>(promise: Promise<T> | Promise<T>[]): Promise<{
  data: T | T[] | null;
  error: unknown;
}>
```

- Returns an object with `data` and `error` properties
- `error` is `null` on success, unknown on failure
- Works with single promises or arrays of promises

## TypeScript

Fully typed out of the box:

```ts
import usingTryCatch from 'using-try-catch';

const { data, error } = await usingTryCatch(fetchUser());
// data is typed as User | User[] | null
// error is typed as unknown
```

## Requirements

- Node.js >= 18

## Browser

Load via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/using-try-catch/dist/esm/using-try-catch.js"></script>
<script>
  const { data, error } = await usingTryCatch(fetch('/api/data'));
</script>
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

<a href="https://github.com/Oda2/using-try-catch/issues">
  <img src="https://img.shields.io/github/issues/Oda2/using-try-catch?color=FF6B6B&style=flat-square" alt="issues" />
</a>

## License

MIT - See [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with ❤️ by <a href="https://twitter.com/renato_oda">Renato Oda</a>
</p>
