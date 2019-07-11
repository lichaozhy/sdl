<template>
	<div class="scan-overview">
		<b-breadcrumb
			:items="[
				{ text: '工具', active: true },
				{ text: '项目执行概览', active: true }
			]"
		/>

		<h3 class="mt-3">项目执行概览</h3>

		<b-card-group class="text-center mb-3">
			<b-card
				v-for="(item, index) in projectComplyOverview"
				:key="index"
				no-body
			>
				<div slot="header" to="">{{ item.header }}</div>
				<b-progress 
					:max="item.max" 
					height="40px"
					class="rounded-0"
					:variant="item.variant"
				>
					<b-progress-bar :value="item.value">
						<div style="color:#000;">正在扫描/总数:</div>
						<strong>{{ item.value }} / {{ item.max }}</strong>
					</b-progress-bar>
				</b-progress>
			</b-card>
		</b-card-group>

		<b-tabs 
			content-class="mt-3" 
			justified
		>
			<b-tab
				v-for="(team, index) in scanTeamsClone"
				:key="index"
				:title="team.scaner"
			>
				<b-table
					bordered
					small
					striped
					class="text-center mt-4"
					:items="team.teams"
					:fields="[
						{ key: 'group', label: '提交团队' },
						{ key: 'name', label: '项目名称' },
						{ key: 'version', label: '版本' },
						{ key: 'time', label: '提交时间' },
						{ key: 'action', label: '插队' },
					]"
				>
					<template
						slot="action"
						slot-scope="data"
					>
						<b-link 
							v-if="data.index !== 0"
							@click="cutLine(index, data.index)"
						>插队</b-link>
					</template>
				</b-table>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			projectComplyOverview: [
				{ header: '开源库漏洞扫描' ,max: 20, value: 15, variant: 'primary' },
				{ header: '白盒扫描CheckMarx' ,max: 10, value: 10, variant: 'success' },
				{ header: '黑盒漏洞扫描' ,max: 20, value: 12, variant: 'info' },
				{ header: 'App漏洞扫描' ,max: 25, value: 16, variant: 'warning' },
				{ header: '扫描器1' ,max: 20, value: 15, variant: 'danger' },
			],
			scanTeams: [
				{ scaner: '开源库漏洞扫描' , teams: [] },
				{ scaner: '白盒扫描CheckMarx' , teams: [
					{ group: '开发一部', name: '人事服务平台', version: 'v2.3', time: '3小时10分钟前' },
					{ group: '开发六部', name: '信用卡中心', version: 'v2.3', time: '2小时前' },
					{ group: '开发三部', name: '移动催收管理系统', version: 'v3.0', time: '1小时前' },
					{ group: '开发二部', name: '手机银行信用卡专版', version: 'v1.3', time: '51分钟前' },
				] },
				{ scaner: '黑盒漏洞扫描' , teams: [] },
				{ scaner: 'App漏洞扫描' , teams: [] },
				{ scaner: '扫描器1' , teams: []},
			]
		}
	},
	computed: {
		scanTeamsClone() {
			return this.scanTeams;
		}
	},
	methods: {
		cutLine(index, teamIndex) {
			const team = this.scanTeamsClone[index].teams[teamIndex];
			this.scanTeamsClone[index].teams.splice(teamIndex, 1);
			this.scanTeamsClone[index].teams.unshift(team);
		}
	}
}
</script>

<style lang='less'>
.scan-overview {
	.scan-task-table {
		td {
			width: 20%;
		}
	}
}
</style>
