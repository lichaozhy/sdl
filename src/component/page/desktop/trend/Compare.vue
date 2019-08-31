<template>

<div>
	<b-breadcrumb
		:items="[
		{ text: '态势', active: true },
		{ text: '对比分析', active: true }
	]"
	/>

	<h3 class="my-3">对比分析</h3>

	<b-tabs 
		content-class="mt-3" 
		justified
	>
		<b-tab 
			v-for="(compare, index) in compareList"
			:key="index"
			:title="compare.title"
		>
			<b-row
				v-for="(item, index) in compare.content"
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
			compareList: {
				complex: {
					title: '综合对比分析',
					content: [{
						colors: ['#F6A4EB', '#8BCBEA', '#FFA96D'],
						colorByPoint: true,
						title: '产品漏洞总数对比分析',
						yTitle: '数量',
						categories: ['项目1', '项目2'],
						series: [{
							name: '漏洞总数',
							data: [180, 120]
						}]
					}, {
						colors: ['#FFA96D', '#FF704B', '#CF5863'],
						title: '产品风险值对比分析',
						yTitle: '数量',
						categories: ['项目1', '项目2'],
						series: [{
							name: '0-4',
							data: [80, 60]
						}, {
							name: '4-8',
							data: [60, 50]
						}, {
							name: '8-10',
							data: [20, 25]
						}]
					}, {
						colors: ['#F6A4EB', '#8BCBEA', '#FFA96D'],
						colorByPoint: true,
						title: '部门漏洞总数对比分析',
						yTitle: '数量',
						categories: ['开发1部', '开发2部', '开发3部'],
						series: [{
							name: '漏洞总数',
							data: [130, 70, 100]
						}]
					}, {
						colors: ['#FFA96D', '#FF704B', '#CF5863'],
						title: '部门风险值对比分析',
						yTitle: '数量',
						categories: ['开发1部', '开发2部', '开发3部'],
						series: [{
							name: '0-4',
							data: [20, 30, 35]
						}, {
							name: '4-8',
							data: [40, 20, 30]
						}, {
							name: '8-10',
							data: [30, 25, 10]
						}]
					}, {
						colors: ['#F6A4EB', '#8BCBEA', '#FFA96D', '#AFF1B6'],
						colorByPoint: true,
						title: '批次漏洞总数对比分析',
						yTitle: '数量',
						categories: ['批次30', '批次31', '批次32', '批次33'],
						series: [{
							name: '漏洞总数',
							data: [50, 68, 54, 32]
						}]
					}, {
						colors: ['#FFA96D', '#FF704B', '#CF5863'],
						title: '批次风险值对比分析',
						yTitle: '数量',
						categories: ['批次30', '批次31', '批次32', '批次33'],
						series: [{
							name: '0-4',
							data: [15, 25, 35, 10]
						}, {
							name: '4-8',
							data: [30, 15, 25, 20]
						}, {
							name: '8-10',
							data: [15, 25, 10, 15]
						}]
					}]
				},
				average: {
					title: '平均值对比分析',
					content: [{
						colors: ['#CF5863', '#FF704B', '#FFA96D'],
						title: '产品漏洞数对比分析',
						yTitle: '数量',
						categories: ['项目1', '项目2'],
						series: [{
							name: '高危漏洞',
							data: [30, 20]
						}, {
							name: '中危漏洞',
							data: [40, 35]
						}, {
							name: '低危漏洞',
							data: [80, 70]
						}]
					}, {
						colors: ['#CF5863', '#FF704B', '#FFA96D'],
						title: '部门漏洞数对比分析',
						yTitle: '数量',
						categories: ['开发1部', '开发2部', '开发3部'],
						series: [{
							name: '高危漏洞',
							data: [10, 20, 10]
						}, {
							name: '中危漏洞',
							data: [20, 20, 35]
						}, {
							name: '低危漏洞',
							data: [50, 40, 60]
						}]
					}, {
						colors: ['#CF5863', '#FF704B', '#FFA96D', '#AFF1B6'],
						title: '批次数对比分析',
						yTitle: '数量',
						categories: ['批次30', '批次31', '批次32', '批次33'],
						series: [{
							name: '高危漏洞',
							data: [13, 14, 10, 20]
						}, {
							name: '中危漏洞',
							data: [25, 20, 15, 10]
						}, {
							name: '低危漏洞',
							data: [45, 40, 35, 30]
						}]
					}]
				},
				handle: {
					title: '处置状态对比分析',
					content: [{
						title: '产品处置状态对比分析',
						yTitle: '数量',
						categories: ['项目1', '项目2'],
						series: [{
							name: '未处理',
							data: [63, 41]
						}, {
							name: '已加固',
							data: [44, 28]
						}, {
							name: '已接受',
							data: [68, 49]
						}, {
							name: '误报',
							data: [5, 2]
						}]
					}, {
						colors: ['#F6A4EB', '#8BCBEA', '#FFA96D', '#AFF1B6'],
						title: '部门处置状态对比分析',
						yTitle: '数量',
						categories: ['开发1部', '开发2部', '开发3部'],
						series: [{
							name: '未处理',
							data: [43, 38, 22]
						}, {
							name: '已加固',
							data: [24, 28, 20]
						}, {
							name: '已接受',
							data: [38, 49, 30]
						}, {
							name: '误报',
							data: [2, 2, 3]
						}]
					}, {
						title: '批次处置状态对比分析',
						yTitle: '数量',
						categories: ['批次30', '批次31', '批次32', '批次33'],
						series: [{
							name: '未处理',
							data: [30, 30, 23, 21]
						}, {
							name: '已加固',
							data: [20, 15, 18, 19]
						}, {
							name: '已接受',
							data: [35, 30, 28, 24]
						}, {
							name: '误报',
							data: [2, 3, 1, 1]
						}]
					}]
				},
				retest: {
					title: '产品复测状态对比分析',
					content: [{
						title: '复测状态对比分析',
						yTitle: '数量',
						categories: ['项目1', '项目2'],
						series: [{
							name: '未复测',
							data: [60, 30]
						}, {
							name: '复测成功',
							data: [40, 20]
						}, {
							name: '复测失败',
							data: [30, 10]
						}]
					}, {
						title: '部门复测状态对比分析',
						yTitle: '数量',
						categories: ['开发1部', '开发2部', '开发3部'],
						series: [{
							name: '未复测',
							data: [25, 35, 30]
						}, {
							name: '复测成功',
							data: [22, 20, 18]
						}, {
							name: '复测失败',
							data: [15, 10, 15]
						}]
					}, {
						title: '批次复测状态对比分析',
						yTitle: '数量',
						categories: ['批次30', '批次31', '批次32', '批次33'],
						series: [{
							name: '未复测',
							data: [30, 23, 20, 17]
						}, {
							name: '复测成功',
							data: [10, 10, 15, 20]
						}, {
							name: '复测失败',
							data: [10, 10, 13, 7]
						}]
					}]
				},
				find: {
					title: '发现状态对比分析',
					content: [{
						title: '发现状态对比分析',
						yTitle: '数量',
						categories: ['项目1', '项目2'],
						series: [{
							name: '交叉发现',
							data: [100, 70]
						}, {
							name: '单一发现',
							data: [80, 50]
						}]
					}, {
						title: '发现状态对比分析',
						yTitle: '数量',
						categories: ['开发1部', '开发2部', '开发3部'],
						series: [{
							name: '交叉发现',
							data: [50, 70, 50]
						}, {
							name: '单一发现',
							data: [38, 50, 42]
						}]
					}, {
						title: '发现状态对比分析',
						yTitle: '数量',
						categories: ['批次30', '批次31', '批次32', '批次33'],
						series: [{
							name: '交叉发现',
							data: [40, 55, 41, 34]
						}, {
							name: '单一发现',
							data: [37, 30, 36, 27]
						}]
					}]
				}
			}
		};
	}
};
</script>