interface DataResult<T> {
  data: T | Array<T> | null;
  error: Error | unknown | null;
}

export const usingTryCatch = async <T>(
  promise: Promise<T> | Array<Promise<T>>
): Promise<DataResult<T>> => {
  try {
    if (Array.isArray(promise)) {
      return { data: await Promise.all(promise), error: null };
    }

    return { data: await promise, error: null };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: null, error: error as Error };
    }
    return { data: null, error };
  }
};

export default usingTryCatch;
