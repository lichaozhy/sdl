<template>
	
<div>
	<b-breadcrumb
		:items="[
			{ text: '我的项目', href: '#/desktop/overview' },
			{ text: '我创建的', active: true }
		]"
	/>
	<h3>项目列表</h3>
	<b-table
		small
		bordered
		:fields="[
			{ key: 'name', label: '名称', class: 'project-name' },
			{ key: 'version', label: '当前版本', class: 'project-version' },
			{ key: 'description', label: '描述', class: 'project-description' },
			{ key: 'createdAt', label: '创建时间', class: 'project-created-at' },
			{ key: 'tag', label: '分类标签' },
		]"
		:items="project.owned.list"
	></b-table>
</div>

</template>

<script>
const mockData = [
	{
		name: ''
	}
];

export default {
	name: 'page-project-joined',
	data() {
		return {
			project: {
				owned: {
					list: [
						{ name: '虚拟项目_0' },
						{ name: '虚拟项目_1' },
						{ name: '虚拟项目_2' },
						{ name: '虚拟项目_3' },
						{ name: '虚拟项目_4' },
						{ name: '虚拟项目_5' },
						{ name: '虚拟项目_6' },
						{ name: '虚拟项目_7' },
						{ name: '虚拟项目_8' },
						{ name: '虚拟项目_9' },
					]
				}
			}
		}
	}
}
</script>