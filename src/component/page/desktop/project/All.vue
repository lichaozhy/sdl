<template>
	
<div class="project-all">
	<b-breadcrumb
		:items="[
			{ text: '我的项目', active: true }
		]"
	/>
	<h3>我是负责人</h3>
	<b-table
		small
		bordered
		:fields="[
			{ key: 'name', label: '名称', class: 'project-name' },
			{ key: 'version', label: '当前版本', class: 'project-version' },
			{ key: 'general', label: '总署', class: 'project-general' },
			{ key: 'branch', label: '分属', class: 'project-branch' },
			{ key: 'createdAt', label: '创建时间', class: 'project-created-at' },
		]"
		:items="project.owned.list"
		class="text-center project-all-mine"
	>
		<template
			slot="name"
			slot-scope="data"
		>
			<b-link :href='`#/desktop/project/${data.item.id}`'>{{ data.item.name }}</b-link>
		</template>
	</b-table>
	<h3>我参与的</h3>
	<b-table
		small
		bordered
		:fields="[
			{ key: 'name', label: '名称', class: 'project-name' },
			{ key: 'version', label: '当前版本', class: 'project-version' },
			{ key: 'owner', label: '创建者', class: 'project-owner' },
			{ key: 'general', label: '总署', class: 'project-general' },
			{ key: 'branch', label: '分属', class: 'project-branch' },
			{ key: 'joinedAt', label: '加入时间', class: 'project-created-at' },
		]"
		:items="project.joined.list"
		class="text-center"
	>
		<template
			slot="name"
			slot-scope="data"
		>
			<b-link>{{ data.item.name }}</b-link>
		</template>
	</b-table>
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
						{ id: 1, name: '手机银行', version: 'v1.1.0', general: '事业部', branch: '信用卡中心', createdAt: '2018-10-20' },
						{ id: 2, name: '移动催收系统', version: 'v1.3.0', general: '事业部', branch: '信用卡中心', createdAt: '2018-7-6' },
						{ id: 3, name: '信用卡中心', version: 'v1.2.0', general: '事业部', branch: '信用卡中心', createdAt: '2018-3-15' },
						{ id: 5, name: '信用卡中心-支付网关', version: 'v1.0.1', general: '事业部', branch: '信用卡中心', createdAt: '2017-11-4' },
						{ id: 2, name: '信用卡中心-人才招聘', version: 'v1.1.0', general: '事业部', branch: '信用卡中心', createdAt: '2017-9-22' },
						{ id: 3, name: '大连分行微信银行', version: 'v2.2.1', general: '分行', branch: '大连分行', createdAt: '2017-6-20' },
						{ id: 1, name: '合肥分行微信系统', version: 'v2.0.0', general: '分行', branch: '合肥分行', createdAt: '2017-3-27' },
						{ id: 2, name: '南昌分行微信公众号', version: 'v2.2.0', general: '分行', branch: '南昌分行', createdAt: '2016-9-5' },
					]
				},
				joined: {
					list: [
						{ id: 4, name: '金融租赁', version: 'v1.1.0', general: '事业部', branch: '金融租赁', joinedAt: '2018-9-6', owner: '张三' },
						{ id: 6, name: '金融租赁邮箱系统', version: 'v1.3.0', general: '事业部', branch: '金融租赁', joinedAt: '2018-7-10', owner: '李四' },
						{ id: 7, name: '人事服务平台', version: 'v3.0.0', general: '分行', branch: '总行内网', joinedAt: '2017-5-22', owner: '陈六' },
						{ id: 2, name: '金融租赁手机OA系统', version: 'v1.2.0', general: '事业部', branch: '金融市场部', joinedAt: '2018-5-10', owner: '王五' },
						{ id: 3, name: '资金交易管理系统', version: 'v2.3.0', general: '事业部', branch: '金融市场部', joinedAt: '2017-11-5', owner: '张三' },
						{ id: 1, name: 'IT运维管理系统', version: 'v2.0.0', general: '总行', branch: '总行内网', joinedAt: '2017-8-6', owner: '李四' },
					]
				}
			}
		}
	}
}
</script>
<style lang="less">

.project-all {
	.project-name {
		width: 20%;
	}
}

</style>
