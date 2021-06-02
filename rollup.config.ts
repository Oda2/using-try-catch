import typescript from '@rollup/plugin-typescript';
import cleanup from 'rollup-plugin-cleanup';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/usingTryCatch.js',
    name: 'usingTryCatch',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    typescript({
      module: 'ES2015',
      target: 'ES6',
      declaration: true,
      outDir: 'dist'
    }),
    cleanup({ comments: 'none' }),
    terser()
  ]
};
