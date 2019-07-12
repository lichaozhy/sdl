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
					'#CF5863', '#FF704B', '#FFA96D', '#F7DD6F',
					'#AAE7B0', '#84E1E5', '#E4D5F6', '#8BCBEA',
					'#F6A4EB', '#8FEFFB', '#AFF1B6'
				]
			}));
		}
	}
}
</script>
