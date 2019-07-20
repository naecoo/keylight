const path = require('path')
const typescript = require('rollup-plugin-typescript')
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'

module.exports = {
	input: path.resolve(__dirname, './src/index.ts'),
	output: {
		file: path.resolve(__dirname, './dist/kl.js'),
		format: 'iife',
		name: 'keylight',
	},
	plugins: [
		typescript(),
		buble(),
    terser({
    	compress: {
    		pure_getters: true,
    		unsafe: true,
    		unsafe_comps: true,
    		warnings: false
    	}
    })
	],
}