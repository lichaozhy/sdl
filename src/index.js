import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import backend from './plugin/backend';

Vue.use(BootstrapVue);
Vue.use(backend);

import App from './component/App';
import router from './router';
import store from './store';
import './compatibility';

(async function bootstrap() {
	const principal = Vue.$backend.principal.get();

	if (principal !== null) {
		store.commit('setPrincipal', {
			administrator: principal.administrator,
			name: principal.name
		});
	}

	router.beforeEach((to, from, next) => {
		const { signedin } = store.state;

		if (to.matched.length === 0) {
			return next('/');
		}

		if (signedin) {
			if (to.matched.find(match => match.meta.unsignedIn)) {
				return next('/desktop');
			}

			const { administrator } = store.state.principal;

			if (!administrator && to.matched.find(match => match.meta.administratorRequired)) {
				return next('/desktop');
			}
		}

		if (!signedin && to.matched.find(match => match.meta.signedIn)) {
			return next('/signin');
		}

		next();
	});

	document.title = 'SDLC 安全开发管控平台';

	new Vue({
		router,
		store,
		render: h => h(App)
	}).$mount('#app');
}());