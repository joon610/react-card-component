import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from "rollup-plugin-terser";

export default {
  input: './src/index.ts',
  output: {
    file: pkg.main,
    format: 'es'
  },
  plugins: [
    peerDepsExternal(),
    typescript(),
    terser(),
  ]
}