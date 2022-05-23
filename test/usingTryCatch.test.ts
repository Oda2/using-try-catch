import usingTryCatch from '../src';

describe('using Try Catch', () => {
  it('Return Data after execution with Promise', async () => {
    const promise = new Promise<string>((resolve) => resolve('ola'));
    const result = await usingTryCatch<string>(promise);

    expect(result.data).toEqual('ola');
    expect(result.error).toBeNull();
  });

  it('Return Error after execution with Promise', async () => {
    const promise = new Promise<string>((_, reject) => reject('ola'));
    const result = await usingTryCatch<string>(promise);

    expect(result.data).toBeNull();
    expect(result.error).toEqual('ola');
  });

  it('Return Data after execution with Array Promisse', async () => {
    const promisses = [];
    promisses.push(new Promise<string>((resolve) => resolve('ola 1')));
    promisses.push(new Promise<string>((resolve) => resolve('ola 2')));
    promisses.push(new Promise<string>((resolve) => resolve('ola 3')));
    promisses.push(new Promise<string>((resolve) => resolve('ola 4')));
    promisses.push(new Promise<string>((resolve) => resolve('ola 5')));

    const result = await usingTryCatch<string>(promisses);

    expect(result.data).toHaveLength(5);
    expect(result.error).toBeNull();
    expect(result.data![0]).toEqual('ola 1');
    expect(result.data![1]).toEqual('ola 2');
    expect(result.data![2]).toEqual('ola 3');
    expect(result.data![3]).toEqual('ola 4');
    expect(result.data![4]).toEqual('ola 5');
  });

  it('Return Error after execution with Array Promisse', async () => {
    const promisses = [];
    promisses.push(new Promise<string>((resolve) => resolve('ola 1')));
    promisses.push(new Promise<string>((resolve) => resolve('ola 2')));
    promisses.push(new Promise<string>((_, reject) => reject('Boom')));
    promisses.push(new Promise<string>((resolve) => resolve('ola 4')));
    promisses.push(new Promise<string>((resolve) => resolve('ola 5')));

    const result = await usingTryCatch<string>(promisses);
    expect(result.data).toBeNull();
    expect(result.error).toEqual('Boom');
  });

  it.each(['string', 123, 10.9, true, false, null, undefined])(
    'Return %s error when passing it as rejected value',
    async (value) => {
      const promise = new Promise<string>((_, reject) => {
        const err: unknown = value;
        reject(err);
      });

      const result = await usingTryCatch<string>(promise);
      expect(result.data).toBeNull();
      expect(result.error).toEqual(value);
    }
  );
});
