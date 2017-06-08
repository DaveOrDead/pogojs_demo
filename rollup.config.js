import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';


export default {
   entry:  'src/main.js',
   dest:   'assets/main.min.js',
   format: 'iife',
   plugins:
   [
      babel({
         exclude: 'node_modules/**'
      }),
      uglify({
         compress: {
            screw_ie8: true,
            warnings: false
         },
         output: {
            comments: false
         },
         sourceMap: true
      }),
      resolve({
      // use "main" field or index.js, even if it's not an ES6 module
      // (needs to be converted from CommonJS to ES6
      // – see https://github.com/rollup/rollup-plugin-commonjs
      main: true
    })
   ]
}