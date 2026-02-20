# using-try-catch

<img src="assets/logo.png" alt="using-try-catch" width="200" />

A tiny utility that simplifies try-catch handling in JavaScript/TypeScript. No more repetitive try-catch blocks for every async operation.

![npm](https://img.shields.io/npm/v/using-try-catch)
![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue)
![Browser](https://img.shields.io/badge/Browser-ready-green)

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
<script src="https://cdn.jsdelivr.net/npm/using-try-catch/dist/usingTryCatch.js"></script>
<script>
  const { data, error } = await usingTryCatch(fetch('/api/data'));
</script>
```

## License

MIT - See [LICENSE](LICENSE) for details.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.
