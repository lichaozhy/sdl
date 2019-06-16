<template>

<div>
	<h2>我的项目</h2>
	<b-table
		small
		:fields="[
			{ key: 'name', label: '名称', class: 'project-name' },
			{ key: 'version', label: '当前版本', class: 'project-version' },
			{ key: 'description', label: '描述', class: 'project-description' },
			{ key: 'createdAt', label: '创建时间', class: 'project-created-at' },
			{ key: 'tag', label: '分类标签' },
		]"
		:items="project.owned.list"
	></b-table>
	<h2>我参与的项目</h2>
	<b-table
		small
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
export default {
	name: 'page-desktop-project-overview',
	data() {
		return {
			project: {
				owned: {
					list: [{}, {}, {}, {}]
				},
				joined: {
					list: [{}, {}, {}, {}]
				}
			}
		}
	},
	async mounted() {
	}
}
</script>
