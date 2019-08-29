<template>

<div>
	<b-breadcrumb
		:items="[
		{ text: '态势', active: true },
		{ text: '统计分析', active: true }
	]"
	/>

	<h3 class="my-3">统计分析</h3>

	<b-tabs 
		content-class="mt-3" 
		justified
	>
		<b-tab 
			v-for="(statistic, index) in statisticList"
			:key="index"
			:title="statistic.title"
		>
			<b-row
				v-for="(item, index) in statistic.content"
				:key="index"
			>
				<b-col>
					<chart-canvas
						style="height:400px"
						:myStyle="{
							colors: item.colors
						}"
						:options="{
							credits: { enabled: false },
							chart: {
								type: 'column'
							},
							title: {
								text: item.title
							},
							legend: {
								enabled: false
							},
							xAxis: {
								categories: item.categories
							},
							yAxis: {
								min: 0,
								title: {
									text: item.yTitle
								}
							},
							plotOptions: {
								column: {
									dataLabels: {
										enabled: true
									},
									colorByPoint: item.colorByPoint,
									colors: item.colors
								}
							},
							series: item.series
						}"
					></chart-canvas>
				</b-col>
			</b-row>
		</b-tab>
	</b-tabs>

	
</div>

</template>

<script>
export default {
	data() {
		return {
			statisticList: {
				complex: {
					title: '综合统计分析',
					content: [{
						colors: ['#CF5863', '#FF704B', '#FFA96D'],
						colorByPoint: true,
						title: '漏洞数量统计分析',
						yTitle: '数量',
						categories: ['高危漏洞', '中危漏洞', '低危漏洞'],
						series: [{
							data: [30, 50, 120]
						}]
					}, {
						colors: ['#FFA96D', '#FF704B', '#CF5863'],
						colorByPoint: true,
						title: '风险值统计分析',
						yTitle: '数量',
						categories: ['0-4', '4-8', '8-10'],
						series: [{
							data: [80, 50, 20]
						}]
					}]
				},
				average: {
					title: '平均值统计分析',
					content: [{
						colors: ['#CF5863', '#FF704B', '#FFA96D'],
						colorByPoint: true,
						title: '平均值统计分析',
						yTitle: '数量',
						categories: ['高危漏洞', '中危漏洞', '低危漏洞'],
						series: [{
							data: [15, 25, 60]
						}]
					}]
				},
				handle: {
					title: '处置状态统计分析',
					content: [{
						title: '处置状态统计分析',
						colors: ['#CF5863', '#FF704B', '#FFA96D', '#F6A4EB'],
						colorByPoint: true,
						yTitle: '数量',
						categories: ['未处理', '已加固', '已接受', '误报'],
						series: [{
							data: [104, 72, 117, 7]
						}]
					}]
				},
				retest: {
					title: '复测状态统计分析',
					content: [{
						title: '复测状态统计分析',
						colors: ['#FF704B', '#AFF1B6', '#CF5863'],
						colorByPoint: true,
						yTitle: '数量',
						categories: ['未复测', '复测成功', '复测失败'],
						series: [{
							data: [90, 60, 40]
						}]
					}]
				},
				find: {
					title: '发现状态统计分析',
					content: [{
						title: '发现状态统计分析',
						colors: ['#8FEFFB', '#F6A4EB', '#8BCBEA'],
						colorByPoint: true,
						yTitle: '数量',
						categories: ['交叉发现', '单一发现'],
						series: [{
							data: [170, 130]
						}]
					}]
				}
			}
		};
	}
};
</script>