const webpackBase = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const axios = require('axios');
const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');

const NTU_BACKEND = 'http://52.82.100.75:8000';

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
			'/api': 'http://127.0.0.1:8080',
			'/ntu': 'http://127.0.0.1:4000',
			'/v1/upload/': 'http://39.100.239.154:8000'
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

axios.post(`${NTU_BACKEND}/v1/rest-auth/login/`, {
	email: 'test1@scantist.com',
	password: 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f'
}).then(res => {
	const token = res.data.token;

	new Koa().use(new Router({
		prefix: '/ntu'
	})
		.get('/login', async ctx => {
			const response = await axios.post(`${NTU_BACKEND}/v1/rest-auth/login/`, {
				email: 'test1@scantist.com',
				password: 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f'
			});
			
			ctx.body = response.data;
		})
		.get('/scan/:projectId', async ctx => {
			const { projectId } = ctx.params;
	
			const response = await axios.post(`${NTU_BACKEND}/v1/projects/${projectId}/scans/`, {
				scan_type: 'binary'
			}, {
				headers: {
					Authorization: `Token ${token}`
				},
				params: {
					branch: 'master'
				}
			});
			
			ctx.body = response.data;
		})
		.get('/project/:projectId', async ctx => {
			const { projectId } = ctx.params;
	
			const response = await axios.get(`${NTU_BACKEND}/v1/projects/${projectId}`, {
				headers: {
					Authorization: `Token ${token}`
				}
			});
			
			ctx.body = response.data;
		})
		.get('/scanlist/:projectId', async ctx => {
			const { projectId } = ctx.params;
	
			const response = await axios.get(`${NTU_BACKEND}/v1/projects/${projectId}/scans/`, {
				headers: {
					Authorization: `Token ${token}`
				}
			});
			
			ctx.body = response.data;
		})
		.get('/filenow/:projectId', async ctx => {
			const { projectId } = ctx.params;
	
			const response = await axios.get(`${NTU_BACKEND}/v1/projects/${projectId}/uploads/`, {
				headers: {
					Authorization: `Token ${token}`
				}
			});
			
			ctx.body = response.data;
		})
		.post('/upload/:projectId', KoaBody(), async ctx => {
			const { projectId } = ctx.params;
			const { downloadlink, filemodified, filesize, filename } = ctx.request.body;
	
			const response = await axios.post(`${NTU_BACKEND}/v1/projects/${projectId}/uploads/`, {
				download_link: downloadlink,
				file_modified: filemodified,
				file_size: filesize,
				filename: filename
			}, {
				headers: {
					Authorization: `Token ${token}`
				}
			});
			
			ctx.body = response.data;
		})
		.routes()).listen(4000);
});