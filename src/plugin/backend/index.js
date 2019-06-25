import personData from './account.json';
import categoryData from './category.json';
import projectData from './project.json';

import axios from 'axios';
import Cookies from 'js-cookie';

function transformData(res) {
	return res.data;
}

export default function install(Vue) {
	return Vue.prototype.$backend = Vue.$backend = {
		async signin(certificate) {
			const principal = personData.find(person => {
				return person.name === certificate.username &&
					person.password === certificate.password;
			});

			if (!principal) {
				throw new Error('Sign in fail.');
			}

			Cookies.set('principalId', principal.id);

			return principal;
		},
		async signout() {
			Cookies.remove('principalId');
		},
		principal: {
			get() {
				const principalId = Number(Cookies.get('principalId'));

				if (!principalId) {
					return null;
				}

				return personData.find(person => person.id === principalId) || null;
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
		},
		ntu: {
			scan(projectId) {
				return axios.get(`/ntu/scan/${projectId}`).then(transformData);
			},
			project(projectId) {
				return axios.get(`/ntu/project/${projectId}`).then(transformData);
			},
			scanList(projectId) {
				return axios.get(`/ntu/scanlist/${projectId}`).then(transformData);
			},
			upload(projectId, downloadLink, fileModified, fileSize, fileName, formData) {
				return axios.get(`/ntu/upload/${projectId}`, {
					headers: {
						downloadlink: downloadLink,
						filemodified: fileModified,
						filesize: fileSize,
						filename: fileName,
						formdata: formData
					}
				}).then(transformData);
			}
		}
	};
}