<template>
	<div>
		<b-breadcrumb
			:items="[
				{ text: '我的项目', href: '#/desktop/project' },
				{ text: '扫描任务概览', active: true }
			]"
		/>
		<h3 class="mt-3">扫描任务概览</h3>

		<b-card-group class="text-center">
			<b-card no-body>
				<b-card-text><visual-number value="124" style="color:#72B422;"/></b-card-text>
				<b-link slot="header">正在进行的扫描任务</b-link>
			</b-card>
			<b-card no-body>
				<b-card-text><visual-number value="40" style="color:#020C7E;"/></b-card-text>
				<b-link slot="header">已完成的扫描任务</b-link>        
			</b-card>
			<b-card no-body>
				<b-card-text><visual-number value="15" style="color:#A1051B;"/></b-card-text>
				<b-link slot="header">失败任务</b-link>                
			</b-card>
			<b-card no-body>
				<b-card-text><visual-number value="15" /></b-card-text>
				<b-link slot="header">在线扫描器</b-link>
			</b-card>
		</b-card-group>

		<b-table
			bordered
			small
			class="text-center mt-4"
			:items="[
				{ group: '项目组1', project: '40' },
				{ group: '项目组2', project: '10' },
				{ group: '项目组3', project: '0' },
			]"
			:fields="[
				{ key: 'group', label: '项目组' },
				{ key: 'project', label: '提交项目' },
			]"
		>
		</b-table>

		<h3 class="mt-3">
			<b-link>项目执行概览</b-link>
		</h3>

		<b-card-group class="text-center">
			<b-card
				v-for="(item, index) in projectComplyOverview"
				:key="index"
				no-body
			>
				<b-link slot="header" to="">{{ item.header }}</b-link>
				<b-progress 
					:max="item.max" 
					height="40px"
					class="rounded-0"
					:variant="item.variant"
				>
					<b-progress-bar :value="item.value">
						正在扫描/总项目数: <strong>{{ item.value }} / {{ item.max }}</strong>
					</b-progress-bar>
				</b-progress>
			</b-card>
		</b-card-group>
		
		<b-table
			bordered
			small
			class="text-center mt-4"
			:items="[
				{ name: '项目组1', group: '40', time: '', result: '' },
				{ name: '项目组2', group: '10', time: '', result: '' },
				{ name: '项目组3', group: '5', time: '', result: '' },
			]"
			:fields="[
				{ key: 'name', label: '项目名称' },
				{ key: 'group', label: '提交团队' },
				{ key: 'time', label: '时间' },
				{ key: 'result', label: '检测结果' },
				{ key: 'action', label: '插队' },
			]"
		>
			<template
				slot="action"
				slot-scope="data"
			>
				<b-link>立即检测</b-link>
			</template>
		</b-table>

	</div>
</template>

<script>
export default {
	data() {
		return {
			projectComplyOverview: [
				{ header: '白盒扫描CheckMarx' ,max: 20, value: 10, variant: 'success' },
				{ header: '黑盒漏洞扫描' ,max: 30, value: 22, variant: 'info' },
				{ header: 'App漏洞扫描' ,max: 25, value: 20, variant: 'warning' },
				{ header: '开源库漏洞扫描' ,max: 18, value: 15, variant: 'primary' },
				{ header: '扫描器1' ,max: 11, value: 10, variant: 'danger' },
			]
		}
	}
}
</script>

<style>

</style>
