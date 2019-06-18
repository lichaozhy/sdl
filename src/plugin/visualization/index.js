import VisualNumber from './Number';
import VisualProgress from './Progress';

export default function install(Vue) {
	Vue.component('visual-number', VisualNumber);
	Vue.component('visual-progress', VisualProgress);
}