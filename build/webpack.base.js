const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
	entry: {
		bundle: [
			'@babel/polyfill/dist/polyfill.js',
			path.resolve('src/index.js')
		]
	},
	resolve: {
		extensions: ['.js', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					outputPath: 'images/'
				}
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'fonts/'
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test:/\.yaml$/,
				use: [
					'json-loader',
					'yaml-loader'
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};