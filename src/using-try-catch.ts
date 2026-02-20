interface DataResult<T> {
  data: T | Array<T> | null;
  error: unknown;
}

export const usingTryCatch = async <T>(
  promise: Promise<T> | Array<Promise<T>>,
): Promise<DataResult<T>> => {
  try {
    const data = Array.isArray(promise) ? await Promise.all(promise) : await promise;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export default usingTryCatch;
