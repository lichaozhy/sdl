<template>
	<div>
		<b-breadcrumb
			:items="[
				{ text: '管理', active: true },
				{ text: '数据概览', href: '#/desktop/admin/overview' },
				{ text: '批次漏洞排名', active: true },
			]"
		/>

		<chart-canvas
			style="height:800px"
			:options="{
				chart: {
					type: 'bar'
				},
				title: {
					text: null
				},
				xAxis: {
					title: {
						text: '批次'
					},
					categories: batchList
				},
				yAxis: {
					min: 0,
					title: {
						text: '记录数'
					}
				},
				legend: {
					reversed: true 
				},
				plotOptions: {
					series: {
						stacking: 'normal'
					}
				},
				series: series
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
			batchInfo: [],
			batchList: [],
			series: []
		}
	},
	created() {
		this.getBatchInfo();
		this.getBatchList();
		this.getSeries();
	},
	methods: {
		getBatchInfo() {
			this.bocData.forEach(bocEle => {
				const batchEven = this.batchInfo.some(batchEle => {
					return batchEle.batch === bocEle.batch;
				});

				if (!batchEven) {
					this.batchInfo.push({
						batch: bocEle.batch,
						vul: 1,
						branch: [{
							name: bocEle.branch,
							vul: 1
						}]
					});
				} else {
					this.batchInfo.forEach(batchEle => {
						if (batchEle.batch === bocEle.batch) {
							batchEle.vul++;

							const branchEven = batchEle.branch.some(branchEle => {
								return branchEle.name === bocEle.branch;
							})

							if (!branchEven) {
								batchEle.branch.push({
									name: bocEle.branch,
									vul: 1
								});
							} else {
								batchEle.branch.forEach(branchEle => {
									if (branchEle.name === bocEle.branch) {
										branchEle.vul++;
									}
								});
							}
						}
					});
				}
			});

			this.batchInfo.sort((a, b) => {
				return b.vul - a.vul;
			});

			this.batchInfo.splice(10);
			// console.log(this.batchInfo);
		},
		getBatchList() {
			this.batchList = this.batchInfo.map(batchEle => {
				return batchEle.batch;
			});
		},
		getSeries() {
			this.batchInfo.forEach((batchEle, batchIndex) => {
				batchEle.branch.forEach((branchEle) => {
					const even = this.series.some(serie => {
						return serie.name === branchEle.name;
					});

					if (!even) {
						this.series.push({
							name: branchEle.name,
							data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
						});

						this.series[this.series.length - 1].data[batchIndex] += branchEle.vul;
					} else {
						this.series.forEach(serie => {
							if (serie.name === branchEle.name) {
								serie.data[batchIndex] += branchEle.vul;
							}
						});
					}
				});
			});

			// console.log(this.series);
		}
	}
}
</script>

<style>

</style>
