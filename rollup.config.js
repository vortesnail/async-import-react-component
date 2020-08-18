import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/asyncComponent.tsx',
  external: ['react'],
  output: [
    {
      // esm
      file: pkg.main,
      format: 'esm',
      name: 'getAsyncComponent',
      globals: {
        react: 'React',
      },
    },
  ],
  watch: { include: 'src/**' },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      extensions,
      include: ['src/**/*'],
      exclude: /node_modules/,
    }),
    commonjs({ include: /node_modules/ }),
    nodeResolve(),
    terser(),
  ],
}
