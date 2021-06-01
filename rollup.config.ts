import typescript from '@rollup/plugin-typescript';
import cleanup from 'rollup-plugin-cleanup';


export default {
  input: 'src/index.ts',
  output: {
    name: 'using-try-catch',
    dir: 'dist',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    typescript(),
    cleanup({ comments: 'none' })
  ]
};
