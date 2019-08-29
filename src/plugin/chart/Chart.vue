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
	props: ['options', 'myStyle'],
	data() {
		return {
			chart: null,
			style: this.myStyle
		};
	},
	mounted() {
		this.initChart();
	},
	methods: {
		initChart() {
			if (this.style === undefined || this.style.colors === undefined) {
				this.style = {
					colors: [
						'#CF5863', '#FF704B', '#FFA96D', '#F7DD6F',
						'#AAE7B0', '#84E1E5', '#E4D5F6', '#8BCBEA',
						'#F6A4EB', '#8FEFFB', '#AFF1B6'
					]
				};
			}

			this.chart = new Highcharts.Chart(this.$el, Object.assign({}, this.options, this.style));
		}
	}
}
</script>
