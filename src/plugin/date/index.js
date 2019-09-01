import dateFormat from './dateFormat';

export default function install(Vue) {
	Vue.filter('dateFormat', dateFormat);
}