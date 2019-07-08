<template>
	<div>
		<b-breadcrumb
			:items="[
				{ text: '管理', active: true },
				{ text: '数据概览', href: '#/desktop/admin/overview' },
				{ text: '项目组漏洞排名', active: true },
			]"
		/>

		<chart-canvas
			style="height:800px"
			:options="{
				credits: { enabled: false },
				chart: { type: 'bar' },
				title: { text: null },
				xAxis: {
					categories: groupList,
					title: {
						text: '项目组'
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: '记录数',
					}
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true,
						}
					}
				},
				legend: false,
				series: [{
					colorByPoint: true,
					data: [
						{ y: groupInfo[0].vul },
						{ y: groupInfo[1].vul },
						{ y: groupInfo[2].vul },
						{ y: groupInfo[3].vul },
						{ y: groupInfo[4].vul },
						{ y: groupInfo[5].vul },
						{ y: groupInfo[6].vul },
						{ y: groupInfo[7].vul }
					]
				}]
			}"
		/>
	</div>
</template>

<script>
import bocData from '../../../../../plugin/backend/boc.json';

export default {
	data() {
		return {
			bocData,
			groupInfo: [],
			groupList: []
		}
	},
	created() {
		this.getgroupInfo();
		this.getGroupList();
	},
	methods: {
		getgroupInfo() {
			this.bocData.forEach(bocEle => {
				const even = this.groupInfo.some(group => {
					return group.name === bocEle.projectGroup;
				});

				if (!even) {
					this.groupInfo.push({
						name: bocEle.projectGroup,
						vul: 1
					});
				} else {
					this.groupInfo.forEach(group => {
						if (group.name === bocEle.projectGroup) {
							group.vul++;
						}
					});
				}
			});

			this.groupInfo.sort((a, b) => {
				return b.vul - a.vul;
			});
		},
		getGroupList() {
			this.groupList = this.groupInfo.map(group => {
				return group.name;
			});
		}
	}
}
</script>

<style>

</style>
