import typescript from '@rollup/plugin-typescript';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: 'src/using-try-catch.ts',
  output: {
    name: 'usingTryCatch',
    dir: 'dist',
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
    cleanup({ comments: 'none' })
  ]
};
