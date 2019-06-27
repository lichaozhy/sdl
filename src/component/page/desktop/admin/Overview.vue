<template>
	
<div class="admin-overview">
	<b-breadcrumb
			:items="[
				{ text: '管理', active: true },
				{ text: '数据概览', active: true }
			]"
		/>

		<b-button variant="primary" href="#/desktop/admin/overview/groupvulrank">项目组漏洞排名</b-button>
		<b-button variant="primary" href="#/desktop/admin/overview/batchvulrank">批次漏洞排名</b-button>
		<b-button variant="primary" href="#/desktop/admin/overview/vulrepairduration">漏洞修复时长</b-button>
		<b-button variant="primary" href="#/desktop/admin/overview/vulappeartimes">漏洞出现频率</b-button>
		<b-button variant="primary" href="#/desktop/admin/overview/projectvulrank">项目漏洞排名</b-button>

		<b-table
			bordered
			small
			striped
			overflow:hidden
			id="admin-overview-table"
			:items="bocData"
			:per-page="perPage"
      :current-page="currentPage"
			class="text-center mt-4 overview-table"
			:fields="[
				{ key: 'general', label: '总属' },
				{ key: 'branch', label: '分属' },
				{ key: 'projectName', label: '项目名称' },
				{ key: 'projectGroup', label: '项目组' },
				{ key: 'vulnerabilityName', label: '漏洞名称' },
				{ key: 'level', label: '危害级别' },
				{ key: 'status', label: '修复情况' },
				{ key: 'batch', label: '批次' },
				{ key: 'developer', label: '开发' },
				{ key: 'averageRepairTime', label: '平均修复时间' },
				{ key: 'show_details', label: '' },
			]"
		>
			<template slot="show_details" slot-scope="row">
				<b-button size="sm"
					@click="row.toggleDetails"
				>{{ row.detailsShowing ? '隐藏' : '显示'}}详情</b-button>
			</template>

			<template slot="row-details" slot-scope="row">
				<span>版本:&nbsp;{{ row.item.version }}</span>
				<span class="ml-5">漏洞录入时间:&nbsp;{{ format(row.item.vulnerabilityEntryTime) }}</span>
				<span class="ml-5">漏洞编号:&nbsp;{{ row.item.vulnerabilityNumber }}</span>
				<span class="ml-5">漏洞复测时间:&nbsp;{{ format(row.item.vulnerabilityRetestTime) }}</span>
				<span class="ml-5">漏洞修复时间:&nbsp;{{ format(row.item.vulnerabilityRepairTime) }}</span>
			</template>
			
			<template
				slot="averageRepairTime"
				slot-scope="data"
			>{{ data.item.averageRepairTime }}个工作日</template>
		</b-table>

		<div class="mt-3">
			<b-pagination 
				v-model="currentPage" 
				:total-rows="rows" 
				align="center"
				:per-page="perPage"
				aria-controls="admin-overview-table"
			></b-pagination>
		</div>
</div>

</template>

<script>
import bocData from '../../../../plugin/backend/boc.json';

export default {
	data() {
		return {
			bocData,
			perPage: 10,
			currentPage: 1,
		}
	},
	computed: {
		rows() {
			return this.bocData.length;
		}		
	},
}
</script>

<style lang='less'>
.admin-overview {
	.overview-table {
		// table-layout:fixed;

		td {
			width: 10%;
			// word-break:keep-all;
			// white-space:nowrap;
			// overflow:hidden;
			// text-overflow:ellipsis;
		}
		td:nth-child(1) {
			width: 6%;
		}
		td:nth-child(4) {
			width: 7%;
		}
		td:nth-child(6) {
			width: 7%;
		}
		td:nth-child(7) {
			width: 7%;
		}
		td:nth-child(8) {
			width: 4%;
		}
		td:nth-child(9) {
			width: 5%;
		}
		td:nth-child(10) {
			width: 8%;
		}
		td:nth-child(11) {
			width: 7%;
		}
	}
}
</style>
