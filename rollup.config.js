import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify'
 
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
         sourceMap: false
      })
   ]
}