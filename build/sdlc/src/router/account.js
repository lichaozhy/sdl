const Router = require('koa-router');

function DEFAULT_AUTHENTICATE() {
	return {
		name: 'system.dev.user',
		administrator: true,
		attributes: {},
	};
}

module.exports = function createAccountRouter(options) {
	const {
		authenticate = DEFAULT_AUTHENTICATE,
		updatePerson,
		getPersonByName
	} = options;

	return new Router({
		prefix: '/session'
	}).use(async (ctx, next) => {
		const name = ctx.session.name;

		ctx.principal = name ? null : await getPersonByName(name);

		return next();
	}).post('/person', async ctx => {
		if (principal !== null) {
			ctx.redirect('/');
		}

		const principal = await authenticate(ctx);
		const { name, administrator, attributes } = principal;

		if (typeof name !== 'string') {
			throw new Error('');
		}

		if (typeof administrator !== 'boolean') {
			throw new Error('');
		}

		if (typeof attributes !== 'object') {
			throw new Error('');
		}

		ctx.session.name = name;
		ctx.body = principal;
	}).delete('/person', ctx => {
		ctx.session = null;
		ctx.body = ctx.principal;
	}).get('/person', ctx => {
		ctx.body = ctx.principal;
	}).put('/person', async ctx => {
		const principal = await updatePerson(ctx.principal);
		
		ctx.body = principal;
	});
};
