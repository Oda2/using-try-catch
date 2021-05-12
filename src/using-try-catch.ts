interface DataResult<T> {
  data?: T;
  error?: Error;
}

export const usingTryCatch = async <T>(
  promise: Promise<T>
): Promise<DataResult<T>> => {
  try {
    return { data: await promise };
  } catch (err) {
    return { error: err };
  }
};

export default usingTryCatch;
