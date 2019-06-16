const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const session = require('koa-session');
const static = require('koa-static');

const ApiRouter = require('./src/router');
const SdlContext = require('./src/context');

const DEFAULT_KEYS = ['DEFAULT KEYS'];

exports.createServer = function createServer(options) {
	const {
		keys = DEFAULT_KEYS,
	} = options;

	const app = new Koa();

	app.context.sdl = SdlContext();
	app.keys = keys;
	app.use(bodyparser());
	// app.use(static(process.cwd()))
	app.use(session(app));
	app.use(ApiRouter({}).routes());

	return app;
};