<template>
	<div class="stage-track-wrap">
		<div class="wrap-header" ref="wrap-header">
			<table class="wrap-table">
				<thead class="wrap-table-header">
					<tr class="wrap-table-header-row">
						<th class="wrap-table-header-cell"></th>
						<th
							v-for="(header, index) in stageList"
							:key="index"
							class="wrap-table-header-cell"
						>{{ stageMapping[header] }}</th>
					</tr>
				</thead>
			</table>
		</div>

		<!-- 固定侧边 -->
		<div class="wrap-side">
			<div class="wrap-side-header">
				<table class="wrap-table">
					<thead class="wrap-table-header">
						<tr class="wrap-table-header-row">
							<th class="wrap-table-header-cell">&nbsp;</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="wrap-side-body" ref="wrap-side">
				<table class="wrap-table">
					<tbody class="wrap-table-body">
						<tr	
							v-for="(trace, index) in wrapDataList"
							:key="index"
							class="wrap-table-body-row"
						>
							<td class="wrap-table-body-cell">{{ trace.version }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- 内容 -->
		<div 
			class="wrap-body" 
			ref="wrap-body"
			@mousedown="wrapBodyDragBegin($event)"
			@mouseup="wrapBodyDragOver"
			@mouseleave="wrapBodyDragOver"
		>
			<table class="wrap-table">
				<tbody class="wrap-table-body">
					<tr
						v-for="(stage, index) in wrapDataList"
						:key="index" 
						class="wrap-table-body-row"
					>
						<td class="wrap-table-body-cell">{{ stage.version }}</td>
						<td
							v-for="(trace, index) in stage.traceList" 
							:key="index"
							:class="{
								'wrap-table-body-cell': true,
								'wrap-cell-hover': true,
								'own-trace': trace.hash !== '',
								'trace-active': trace.hash === active
							}"
							@click="setTraceActive(trace.hash, 'wrap')"
						></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		traceData: Array,
		stageList: Array,
		stageMapping: Object,
		active: String,
		traceChanger: String
	},
	data() {
		return {
			wrapDataList: [],
			mousePosition: {},
		};
	},
	watch: {
		active(val) {
			if (this.traceChanger === 'tree') {
				const trace = this.traceData.find(ele => {
					return ele.hash === val;
				});

				const wrapRow = this.wrapDataList.findIndex(data => {
					return data.version === trace.version;
				});

				const wrapCol = this.stageList.findIndex(stage => {
					return stage === trace.stage;
				});

				this.$refs['wrap-body'].scrollTop = 44 * (wrapRow - 2);
				this.$refs['wrap-body'].scrollLeft = 120 * (wrapCol - 1) - 75;
			}
			this.syncWrapHeaderAndSide();
		}
	},
	mounted() {
		this.getDataList();
	},
	methods: {
		wrapBodyDragBegin(event) {
			window.addEventListener('mousemove', this.onDrag);
			this.mousePosition['x'] = event.pageX;
			this.mousePosition['y'] = event.pageY;
		},
		wrapBodyDragOver() {
			window.removeEventListener('mousemove', this.onDrag);
			this.mousePosition = {};
		},
		onDrag(event) {
			this.$refs['wrap-body'].scrollLeft = this.$refs['wrap-body'].scrollLeft + (this.mousePosition['x'] - event.pageX);
			this.$refs['wrap-body'].scrollTop = this.$refs['wrap-body'].scrollTop + (this.mousePosition['y'] - event.pageY);
			this.syncWrapHeaderAndSide();
			this.mousePosition['x'] = event.pageX;
			this.mousePosition['y'] = event.pageY;
		},
		syncWrapHeaderAndSide() {
			this.$refs['wrap-header'].scrollLeft = this.$refs['wrap-body'].scrollLeft;
			this.$refs['wrap-side'].scrollTop = this.$refs['wrap-body'].scrollTop;
		},
		getDataList() {
			this.traceData.forEach(trace => {
				const stageVersionIndex = this.wrapDataList.findIndex(wrapTrace => {
					return wrapTrace.version === trace.version;
				});
				
				if (stageVersionIndex !== -1) {
					this.wrapDataList[stageVersionIndex].traceList[
						this.stageList.findIndex(wrapStage => {
							return wrapStage === trace.stage;
						})
					].hash = trace.hash;
				} else {
					this.wrapDataList.push({
						version: trace.version,
						traceList: this.stageList.map(stage => {
							if (stage === trace.stage) {
								return {
									hash: trace.hash,
									stage: stage
								};
							} else {
								return {
									hash: '',
									stage: stage
								};
							}
						})
					});
				}
			});
		},
		setTraceActive(hash, name) {
			if (hash !== '') {
				this.$emit('update:active', hash);
				this.$emit('update:traceChanger', name);
			}
		}
	},
};
</script>
