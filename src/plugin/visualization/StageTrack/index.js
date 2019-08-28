import './wrap.scss';
import './tree.scss';

import StageTrackWrap from './Wrap';
import StageTrackTree from './Tree';

export default function install(Vue) {
	Vue.component('stage-track-wrap', StageTrackWrap);
	Vue.component('stage-track-tree', StageTrackTree);
}