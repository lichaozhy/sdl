<template>
	
<div>
	<b-progress :max="max" show-value>
		<b-progress-bar
			v-for="(data, index) in list"
			:key="index"
			:value="data.value"
			:variant="data.variant||'success'"
		></b-progress-bar>
	</b-progress>
</div>

</template>

<script>
export default {
	name: 'visualization-progress',
	props: ['list'],
	computed: {
		max() {
			return this.list.reduce((sum, current) => sum + current.value, 0);
		}
	},
}
</script>

