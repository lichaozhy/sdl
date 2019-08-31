<template>

<div>
	<b-breadcrumb
		:items="[
		{ text: '态势', active: true },
		{ text: '趋势分析', active: true }
	]"
	/>

	<h3 class="my-3">趋势分析</h3>

	<b-tabs 
		content-class="mt-3" 
		justified
	>
		<b-tab 
			v-for="(trend, index) in trendList"
			:key="index"
			:title="trend.title"
		>
			<b-row
				v-for="(item, index) in trend.content"
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
								type: 'line'
							},
							title: {
								text: item.title
							},
							xAxis: {
								categories: item.categories
							},
							yAxis: {
								title: {
									text: item.yTitle
								}
							},
							plotOptions: {
								line: {
									dataLabels: {
										enabled: true
									}
								}
							},
							series: item.series
						}"
					></chart-canvas>
				</b-col>
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
									}
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
			trendList: {
				complex: {
					title: '综合趋势分析',
					content: [{
						colors: ['#CF5863', '#FF704B', '#FFA96D'],
						title: '漏洞总数变化趋势分析',
						yTitle: '数量',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '漏洞总数',
							data: [180, 120, 0]
						}]
					}, {
						colors: ['#F6A4EB', '#8BCBEA', '#FFA96D'],
						title: '产品漏洞数变化趋势分析',
						yTitle: '数量',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '项目1',
							data: [100, 70, 0]
						}, {
							name: '项目2',
							data: [80, 50, 0]
						}]
					},{
						colors: ['#CF5863', '#FF704B', '#FFA96D'],
						title: '部门漏洞数变化趋势分析',
						yTitle: '数量',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '开发1部',
							data: [60, 30, 0]
						}, {
							name: '开发2部',
							data: [70, 45, 0]
						}, {
							name: '开发3部',
							data: [50, 35, 0]
						}]
					},{
						colors: ['#F6A4EB', '#8BCBEA', '#FFA96D'],
						title: '批次漏洞数变化趋势分析',
						yTitle: '数量',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '批次30',
							data: [45, 30, 0]
						}, {
							name: '批次31',
							data: [40, 25, 0]
						}, {
							name: '批次32',
							data: [30, 20, 0]
						}, {
							name: '批次33',
							data: [25, 20, 0]
						}]
					}, {
						colors: ['#CF5863', '#FF704B', '#FFA96D'],
						title: '风险值变化趋势分析',
						yTitle: '数量',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '高危漏洞',
							data: [40, 25, 0]
						}, {
							name: '中危漏洞',
							data: [60, 35, 0]
						}, {
							name: '低危漏洞',
							data: [80, 60, 0]
						}]
					}, {
						colors: ['#F6A4EB'],
						title: '风险值变化趋势分析',
						yTitle: '值',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '风险值',
							data: [820.5, 500.3, 0]
						}]
					}]
				},
				average: {
					title: '平均值趋势分析',
					content: [{
						title: '平均值变化趋势分析',
						yTitle: '值',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '平均值',
							data: [100, 60, 0]
						}]
					}]
				},
				handle: {
					title: '处置状态趋势分析',
					content: [{
						title: '处置状态变化趋势分析',
						yTitle: '数量',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '未处理',
							data: [63, 41, 0]
						}, {
							name: '已加固',
							data: [44, 28, 0]
						}, {
							name: '已接受',
							data: [68, 49, 0]
						}, {
							name: '误报',
							data: [5, 2, 0]
						}]
					}]
				},
				retest: {
					title: '复测状态趋势分析',
					content: [{
						title: '复测状态变化趋势分析',
						yTitle: '数量',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '未复测',
							data: [60, 30, 0]
						}, {
							name: '复测成功',
							data: [40, 20, 0]
						}, {
							name: '复测失败',
							data: [30, 10, 0]
						}]
					}]
				},
				find: {
					title: '发现状态趋势分析',
					content: [{
						title: '发现状态变化趋势分析',
						yTitle: '数量',
						categories: ['2019/4', '2019/5', '2019/6'],
						series: [{
							name: '交叉发现',
							data: [100, 70, 0]
						}, {
							name: '单一发现',
							data: [80, 50, 0]
						}]
					}]
				}
			}
		};
	}
};
</script>