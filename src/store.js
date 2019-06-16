import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		signedin: false,
		principal: {
			administrator: false,
			name: null
		}
	},
	mutations: {
		setPrincipal(state, { administrator, name }) {
			state.signedin = true;
			state.principal.administrator = administrator;
			state.principal.name = name;
		}
	}
});