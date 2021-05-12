import usingTryCatch from '../src';

describe('using Try Catch', () => {
  it('Return Data after execution with Promise', async () => {
    const promise = new Promise<string>(resolve => resolve('ola'));
    const result = await usingTryCatch<string>(promise);
    
    expect(result.data).toEqual('ola');
    expect(result.error).toBeUndefined();
  });

  it('Return Error after execution with Promise', async () => {
    const promise = new Promise<string>((_, reject) => reject('ola'));
    const result = await usingTryCatch<string>(promise);
    
    expect(result.data).toBeUndefined();
    expect(result.error).toEqual('ola');
  });
});
