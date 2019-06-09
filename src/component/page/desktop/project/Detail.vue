<template>

<b-container
	fluid
	id="app-project-detail"
>
	<b-breadcrumb
		:items="[
			{ text: '项目总览', href: '#/desktop/overview' },
			{ text: `当前项目：${project.name}`, active: true }
		]"
	/>
	<h2>阶段总览</h2>
	<b-table
		small
		bordered
		:items="[{}]"
		:fields="[
			{ key: 'requirement', label: '需求分析阶段' },
			{ key: 'design', label: '设计阶段' },
			{ key: 'development', label: '开发阶段' },
			{ key: 'testing', label: '测试阶段' },
			{ key: 'acceptance', label: '验收阶段' },
		]">
		<template slot="requirement">
			<div>
				<b-card
					class="mb-2"
					border-variant="primary"
					no-body
				>
					<b-card-header
						class="py-1 px-2 rounded-0"
						header-bg-variant="primary"
						header-text-variant="light"
					><strong class="mr-2">版本</strong>v1.0.0</b-card-header>
					<b-card-text>
						更新时间 更新信息
					</b-card-text>
					<b-card-footer
						class="p-0"
					></b-card-footer>
				</b-card>
			</div>
		</template>
		<template slot="design">
			<div></div>
		</template>
		<template slot="development">
			<div></div>
		</template>
		<template slot="testing">
			<div></div>
		</template>
		<template slot="acceptance">
			<div></div>
		</template>
		<template slot="bottom-row">
			<td colspan="5">全屏</td>
		</template>
	</b-table>
</b-container>

</template>

<script>
function Project() {
	return {
		name: 'N/A'
	}
}

export default {
	data() {
		return {
			project: Project()
		};
	}
}
</script>

<style lang="less">
#app-project-detail {
	table{
		th {
			width: 20%;
			text-align: center;
		}

		td {
			padding: 0;

			& > div {
				padding: 5px;
				height: 500px;
				overflow-y: scroll;
			}
		}
		
	}
}
</style>
