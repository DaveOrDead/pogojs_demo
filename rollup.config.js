import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'src/main.js',
    dest: 'assets/main.min.js',
    format: 'iife',
    plugins: [
        resolve({
            jsnext: true,
            // use "main" field or index.js, even if it's not an ES6 module
            // (needs to be converted from CommonJS to ES6
            // – see https://github.com/rollup/rollup-plugin-commonjs
            main: true
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ]
};
