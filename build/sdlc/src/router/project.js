const Router = require('koa-router');

const StageRouter = new Router({
	prefix: '/stage'
}).get('/', ctx => {

}).post('/', ctx => {

}).delete;

const StageSchemaRouter = new Router({
	prefix: '/stage/schema'
}).get('/', ctx => {
	
}).post('/', ctx => {

}).get('/:id', ctx => {
	const stage = ctx.project.stageList.get(ctx.params.id);

	if (stage === null) {
		ctx.throw(404, 'Stage is NOT found.');
	}

	ctx.body = stage;
});

const ProjectTeamRouter = new Router({
	prefix: '/team/person'
}).param('personId', async (id, ctx, next) => {
	const person = await ctx.model.getPersonById(id);

	if (person === null) {
		return ctx.throw(404, 'Person is NOT found.');
	}

	return next();
}).post('/:personId', ctx => {
	ctx.project.team.append(ctx.person.id);
	ctx.body = ctx.person;
}).delete('/:personId', ctx => {
	ctx.project.team.remove(ctx.person.id);
	ctx.body = ctx.person;
});

const ProjectRouter = new Router({
	prefix: '/project'
}).post('/', ctx => {

}).get('/', ctx => {

}).param('projectId', (id, ctx, next) => {
	const projectData = ctx.project = options.getProjectById(id);

	if (projectData === null) {
		return ctx.throw(404, 'Project is NOT found');
	}

	return next();
}).get('/:projectId', ctx => {

}).put('/:projectId', ctx => {

}).delete('/projectId', ctx => {

}).use(stageRouter.routes());
