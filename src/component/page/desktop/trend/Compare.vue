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
						title: '漏洞总数对比分析',
						yTitle: '数量',
						categories: ['项目1', '项目2'],
						series: [{
							name: '漏洞总数',
							data: [180, 120]
						}]
					}, {
						colors: ['#FFA96D', '#FF704B', '#CF5863'],
						title: '风险值对比分析',
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
					}]
				},
				average: {
					title: '平均值对比分析',
					content: [{
						colors: ['#CF5863', '#FF704B', '#FFA96D'],
						title: '漏洞数对比分析',
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
					}]
				},
				handle: {
					title: '处置状态对比分析',
					content: [{
						title: '处置状态对比分析',
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
					}]
				},
				retest: {
					title: '复测状态对比分析',
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
					}]
				}
			}
		};
	}
};
</script>