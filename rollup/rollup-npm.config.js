import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const outputDir = 'dist';

export default {
  input: {
    'cistercian-numerals': 'src/cistercian-clock.js',
  },
  output: {
    dir: outputDir,
    sourcemap: true,
  },
  plugins: [
    resolve(),
    clear({
      targets: [outputDir],
    }),
    terser({
      output: { comments: false },
    }),
    babel({
      plugins: [
        // Minify HTML inside lit-html and LitElement html`` templates
        // Minify CSS inside LitElement css`` templates
        [
          'template-html-minifier',
          {
            modules: {
              'lit': [
                'html',
                { name: 'css', encapsulation: 'style' },
              ],
            },
            htmlMinifier: {
              caseSensitive: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
              removeComments: true,
              removeRedundantAttributes: true,
              // This clearly DOES NOT work well with template strings and lit-element
              sortAttributes: false,
              sortClassName: true,
              minifyCSS: { level: 2 },
            },
          },
        ],
      ],
    }),
  ],
};
