const webpackBase = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBase, {
	mode: 'development',
	output: {
		filename: 'bundle.js'
	},
	devServer: {
		port: 3000,
		host: '0.0.0.0',
		// hot: false,
		// inline: false,
		disableHostCheck: true,
		proxy: {
			'/api': 'http://127.0.0.1:8080'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, './index.html')
		})
	]
});

// const sdl = require('./sdlc');

// sdl.createServer().listen(8080);