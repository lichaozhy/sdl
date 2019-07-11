<template>
	<div class="scan-overview">
		<b-breadcrumb
			:items="[
				{ text: '工具', active: true },
				{ text: '扫描任务概览', active: true }
			]"
		/>
		<h3 class="mt-3">扫描任务概览</h3>

		<b-card-group class="text-center">
			<b-card no-body>
				<b-card-text><visual-number value="35" style="color:#72B422;"/></b-card-text>
				<b-link slot="header">正在进行的扫描任务</b-link>
			</b-card>
			<b-card no-body>
				<b-card-text><visual-number value="15" style="color:#020C7E;"/></b-card-text>
				<b-link slot="header">已完成的扫描任务</b-link>        
			</b-card>
			<b-card no-body>
				<b-card-text><visual-number value="5" style="color:#A1051B;"/></b-card-text>
				<b-link slot="header">失败任务</b-link>                
			</b-card>
			<b-card no-body>
				<b-card-text><visual-number value="5" /></b-card-text>
				<b-link slot="header">在线扫描器</b-link>
			</b-card>
		</b-card-group>

		<b-table
			bordered
			small
			striped
			class="text-center mt-4 scan-task-table"
			:items="[
				{ group: '开发三部', ing: '14', done: '10', fail: '2', total: '26'},
				{ group: '开发一部', ing: '11', done: '4', fail: '1', total: '16'},
				{ group: '开发六部', ing: '10', done: '1', fail: '2', total: '13'},
			]"
			:fields="[
				{ key: 'group', label: '项目组' },
				{ key: 'ing', label: '正在进行' },
				{ key: 'done', label: '已完成' },
				{ key: 'fail', label: '失败' },
				{ key: 'total', label: '总数' },
			]"
		>
		</b-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	computed: {

	},
	methods: {

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
