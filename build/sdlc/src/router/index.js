const Router = require('koa-router');

const AccountRouter = require('./account');
const AdminRouter = require('./admin');
const ProjectRouter = require('./project');

function DEFAULT_UPDATE_PERSON(attributes) {
	return attributes;
}

module.exports = function createApiRouter(options) {
	const {
		updatePerson = DEFAULT_UPDATE_PERSON,
		getPersonByName
	} = options;

	const router = {
		account: AccountRouter({
			updatePerson
		}),
		admin: AdminRouter({
			updatePerson
		}),
		project: ProjectRouter()
	};

	return new Router({
		prefix: '/api'
	})
		.use(router.account.routes())
		.use(router.admin.routes())
		.use(router.project.routes());
};