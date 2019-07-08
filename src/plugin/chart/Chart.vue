<template>
	
<div class="highcharts"></div>

</template>

<script>
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import TreeMap from 'highcharts/modules/treemap';

HighchartsMore(Highcharts);
TreeMap(Highcharts);

export default {
	name: 'chart-pie',
	props: ['options'],
	data() {
		return {
			chart: null
		}
	},
	mounted() {
		this.initChart();
	},
	methods: {
		initChart() {
			this.chart = new Highcharts.Chart(this.$el, Object.assign({}, this.options, {
				colors: [
					'#dc3545', '#ffc107', '#17a2b8', '#DDDF00',
					'#24CBE5', '#64E572', '#FF9655', '#FFF263',
					'#6AF9C4', '#4949C5', '#12FF00'
				]
			}));
		}
	}
}
</script>
