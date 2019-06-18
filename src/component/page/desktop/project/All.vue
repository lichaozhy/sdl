<template>
	
<div>
	<b-breadcrumb
		:items="[
			{ text: '我的项目', href: '#/desktop/overview' },
			{ text: '全部列表', active: true }
		]"
	/>
	<h3>我是负责人</h3>
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
	<h3>我参与的</h3>
	<b-table
		small
		bordered
		:fields="[
			{ key: 'name', label: '名称', class: 'project-name' },
			{ key: 'version', label: '当前版本', class: 'project-version' },
			{ key: 'owner', label: '创建者', class: 'project-owner' },
			{ key: 'description', label: '描述', class: 'project-description' },
			{ key: 'joinedAt', label: '加入时间', class: 'project-created-at' },
			{ key: 'tag', label: '分类标签' },
		]"
		:items="project.joined.list"
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
				},
				joined: {
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