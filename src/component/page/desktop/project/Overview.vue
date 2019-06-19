<template>

<div>
	<b-breadcrumb
		:items="[
			{ text: '我的项目', active: true }
		]"
	/>
	<h3 class="mt-3">基础统计</h3>
	<b-card-group>
    <b-card no-body>
			<chart-canvas
				style="height:210px"
				:options="{
					credits: { enabled: false },
					chart: { type: 'pie' },
					title: { text: null },
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: { enabled: false },
							showInLegend: true
						}
					},
					series: [{
						name: '数量',
						colorByPoint: true,
						data: [
							{ name: 'Java', y: 12 },
							{ name: 'PHP', y: 3 },
							{ name: 'JavaScript', y: 1 },
							{ name: 'C#', y: 1 },
							{ name: 'Other', y: 2 }
						]
					}]
				}"
			/>
      <div slot="header">语言分布</div>
    </b-card>

    <b-card no-body>
      <b-card-text><visual-number value="50" /></b-card-text>
      <div slot="header">我的项目数量</div>
    </b-card>

    <b-card no-body>
      <b-card-text>
				<b-button
					v-for="(name, index) in watching"
					:key="index"
					size="md"
					variant="primary"
					href="#/desktop/project/1"
					class="m-2"
				>{{name}}</b-button>
			</b-card-text>
      <div slot="header">我的关注</div>
    </b-card>
  </b-card-group>

	<h3 class="mt-3">漏洞</h3>
	<b-card-group>

    <b-card no-body>
      <b-card-text><visual-number value="25" /></b-card-text>
      <div slot="header">高度危险</div>
    </b-card>

    <b-card no-body>
      <b-card-text><visual-number value="214" /></b-card-text>
      <div slot="header">中等危险</div>
    </b-card>

    <b-card no-body>
      <b-card-text><visual-number value="101" /></b-card-text>
      <div slot="header">低等危险</div>
    </b-card>
    <b-card no-body>
			<chart-canvas
				style="height:200px"
				:options="{
					credits: { enabled: false },
					chart: { type: 'pie' },
					title: { text: null },
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: { enabled: false },
							showInLegend: true
						}
					},
					series: [{
						name: '数量',
						colorByPoint: true,
						data: [
							{ name: '高危', y: 25 },
							{ name: '中危', y: 214 },
							{ name: '低危', y: 101 }
						]
					}]
				}"
			/>
      <div slot="header">等级分布</div>
    </b-card>
  </b-card-group>
	<b-button variant="link" href="#/desktop/project/vulnerability">查看漏洞分析&amp;报告</b-button>
	
	<h3 class="mt-3">阶段分布</h3>
	<b-card-group>
    <b-card no-body>
      <b-card-text><visual-number value="32" /></b-card-text>
      <div slot="header">安全需求分析阶段</div>
    </b-card>

    <b-card no-body>
      <b-card-text><visual-number value="4" /></b-card-text>
      <div slot="header">安全设计阶段</div>
    </b-card>

    <b-card no-body>
      <b-card-text><visual-number value="10" /></b-card-text>
      <div slot="header">安全开发阶段</div>
    </b-card>
		
    <b-card no-body>
      <b-card-text><visual-number value="3" /></b-card-text>
      <div slot="header">安全测试阶段</div>
    </b-card>

    <b-card no-body>
      <b-card-text><visual-number value="1" /></b-card-text>
      <div slot="header">安全运营阶段</div>
    </b-card>
  </b-card-group>
</div>

</template>

<script>
const data = {
	owned: 5,
	joined: 16,
	language: {
		java: 13,
		php: 7,
		other: 1
	}
};

export default {
	name: 'page-desktop-project-overview',
	data() {
		return {
			project: {
				owned: {
					list: [{}, {}, {}, {}]
				},
				joined: {
					list: [{}, {}, {}, {}]
				}
			},
			watching: [
				'手机银行', '新版个人网银', '云盘系统', '直销银行手机银行'
			]
		}
	},
	async mounted() {
	}
}
</script>

<style lang="less">
#project-overview-statistics th {
	width: 33.3333%;
	text-align: center;
}
</style>

