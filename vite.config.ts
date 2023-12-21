import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'usingTryCatch',
      fileName: (format) => `usingTryCatch.${format}.js`
    }
  },
  test: {
    coverage: {
      all: false,
      enabled: true,
      reporter: ['text', 'lcov']
    }
  }
});
