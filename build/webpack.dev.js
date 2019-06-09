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
		hot: true,
		inline: true,
		disableHostCheck: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, './index.html')
		})
	]
});