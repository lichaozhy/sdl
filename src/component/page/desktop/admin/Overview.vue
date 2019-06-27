<template>
	
<div>
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
			class="text-center mt-4 scan-task-table"
			:items="bocData"
			:fields="[
				{ key: 'general', label: '总属' },
				{ key: 'branch', label: '分属' },
				{ key: 'projectName', label: '项目名称' },
				{ key: 'projectGroup', label: '项目组' },
				{ key: 'vulnerabilityName', label: '漏洞名称' },
				{ key: 'vulnerabilityEntryTime', label: '漏洞录入时间' },
				{ key: 'vulnerabilityNumber', label: '漏洞编号' },
				{ key: 'level', label: '危害级别' },
				{ key: 'status', label: '修复情况' },
				{ key: 'version', label: '版本' },
				{ key: 'batch', label: '批次' },
				{ key: 'developer', label: '开发' },
				{ key: 'vulnerabilityRetestTime', label: '漏洞复测时间' },
				{ key: 'vulnerabilityRepairTime', label: '漏洞修复时间' },
				{ key: 'averageRepairTime', label: '平均修复时间' },
			]"
		>
			<template
				slot="vulnerabilityEntryTime"
				slot-scope="data"
			>{{ format(data.item.vulnerabilityEntryTime) }}</template>
			<template
				slot="vulnerabilityRetestTime"
				slot-scope="data"
			>{{ format(data.item.vulnerabilityRetestTime) }}</template>
			<template
				slot="vulnerabilityRepairTime"
				slot-scope="data"
			>{{ format(data.item.vulnerabilityRepairTime) }}</template>
		</b-table>
</div>

</template>

<script>
import bocData from '../../../../plugin/backend/boc.json';

export default {
	data() {
		return {
			bocData
		}
	},
	mounted() {
		
	},
	methods: {
		
	}
}
</script>

<style>

</style>
