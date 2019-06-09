import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import backend from './plugin/backend';

Vue.use(BootstrapVue);
Vue.use(backend);

import App from './component/App';
import router from './router';

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');