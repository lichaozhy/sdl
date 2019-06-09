import accountData from './account.json';
import categoryData from './category.json';
import projectData from './project.json';

export default function install(Vue) {
	return Vue.prototype.$backend = {
		signin(username, password) {

		},
		signout() {

		},
		account: {
			setAdministrator(accountId) {

			},
			update(accountId, options) {

			},
			create(options) {

			},
			delete(accountId) {

			}
		},
		project: {
			create() {

			},
			update(projectId, options) {

			},
			assign(projectId, accountList) {

			},
			setOwner(projectId, accountId) {

			},
			delete(projectId) {

			},
			stage: {
				migrate(projectId, options) {

				},
				commit(projectId, options) {

				},
				revert(projectId) {

				}
			}
		}
	};
}