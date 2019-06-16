const Router = require('koa-router');

module.exports = function createAdminRouter(options) {
	const {
		updatePerson,
		getPersonByName,
	} = options;

	const personRouter = new Router({
		prefix: '/person'
	}).get('/', ctx => {

	}).post('/', ctx => {

	}).param('personId', async (id, ctx, next) => {
		const person = ctx.person = await getPersonByName(id);

		if (person === null) {
			return ctx.throw(404, 'Person is not found');
		}

		return next();
	}).get('/:personId', ctx => {
		ctx.body = ctx.person;
	}).put('/:personId', async ctx => {
		

	}).delete('/:personId', ctx => {

	});

	const projectRouter = new Router({
		prefix: '/project'
	}).get('/', async ctx => {

	}).get('/:projectId', ctx => {

	}).delete('/:projectId', ctx => {

	}).put('/:project', ctx => {
		
	});

	return new Router({
		prefix: '/admin'
	}).use((ctx, next) => {
		if (!ctx.session.administrator) {
			return ctx.throw(403);
		}

		return next();
	}).use(personRouter.routes());
}