import typescript from '@rollup/plugin-typescript';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: 'src/index.ts',
  output: {
    name: 'usingTryCatch',
    dir: 'dist',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    typescript({
      module: 'ES2015',
      declaration: true,
      outDir: 'dist'
    }),
    cleanup({ comments: 'none' })
  ]
};
