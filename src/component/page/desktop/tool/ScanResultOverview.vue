<template>
	
<div>
	<b-breadcrumb
		:items="[
			{ text: '工具', active: true },
			{ text: '扫描结果', active: true }
		]"
	/>

	<h3>扫描结果概览</h3>

	<b-tabs 
		content-class="mt-3" 
		justified
	>
		<b-tab
			v-for="(team, index) in scanTeams"
			:key="index"
			:title="team.scaner"
		>	
			<b-table
				small
				bordered
				v-if="index === 0"
				:fields="[
					{ key: 'id', label: '扫描编号' },
					{ key: 'project', label: '所属项目' },
					{ key: 'time', label: '开始时间' },
					{ key: 'type', label: '扫描种类' },
					{ key: 'status', label: '状态'},
					{ key: 'vul', label: '漏洞' },
					{ key: 'license', label: '许可证' },
					{ key: 'library', label: '组件' },
				]"
				:items="scans"
				class="text-center"
			>
				<template
					slot="status"
					slot-scope="data"
				>
					<b-button
						v-if="data.item.status === 'finished'"
						squared 
						variant='success'
						size='sm'
					>完成</b-button>
					<b-button
						v-if="data.item.status === 'failed'"
						squared 
						variant='danger'
						size='sm'
					>失败</b-button>
					<b-button
						v-if="data.item.status === 'running'"
						squared 
						variant='warning'
						size='sm'
					>扫描中...</b-button>
				</template>

				<template
					slot="vul"
					slot-scope="data"
				>
					<b-button
						v-if="data.item.status === 'finished'"
						pill
						variant='primary'
						size='sm'
						:href='`http://52.82.100.75:8888/u/test1/org/test1/projects/38/scans/${data.item.id}`'
					>查看</b-button>
				</template>

				<template
					slot="license"
					slot-scope="data"
				>
					<b-button
						v-if="data.item.status === 'finished'"
						pill
						variant='primary'
						size='sm'
						:href='`http://52.82.100.75:8888/u/test1/org/test1/projects/38/scans/${data.item.id}/license`'
					>查看</b-button>
				</template>

				<template
					slot="library"
					slot-scope="data"
				>
					<b-button
						v-if="data.item.status === 'finished'"
						pill
						variant='primary'
						size='sm'
						:href='`http://52.82.100.75:8888/u/test1/org/test1/projects/38/scans/${data.item.id}/library`'
					>查看</b-button>
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
			scanTeams: [
				{ scaner: '开源库漏洞扫描' , teams: [] },
				{ scaner: '白盒扫描CheckMarx' },
				{ scaner: '黑盒漏洞扫描' , teams: [] },
				{ scaner: 'App漏洞扫描' , teams: [] },
				{ scaner: '扫描器1' , teams: []},
			],
			scans: [
				{id:18,project:'手机银行',time:'30分钟前',type:'二进制',status:'finished'},
				{id:17,project:'云盘系统',time:'3小时前',type:'二进制',status:'finished'},
				{id:16,project:'云盘系统',time:'3小时前',type:'二进制',status:'finished'},
				{id:15,project:'供应链',time:'4小时前',type:'二进制',status:'finished'},
				{id:14,project:'人力资源（实习专用）',time:'6小时前',type:'二进制',status:'finished'},
				{id:13,project:'手机银行',time:'7小时前',type:'二进制',status:'finished'},
				{id:12,project:'新版企业网银',time:'8小时前',type:'二进制',status:'finished'},
				{id:11,project:'供应链',time:'10小时前',type:'二进制',status:'finished'},
				{id:10,project:'供应链',time:'10小时前',type:'二进制',status:'failed'},
				{id:9,project:'新版个人网银',time:'11小时前',type:'二进制',status:'finished'},
				{id:8,project:'移动银行信用卡专版',time:'12小时前',type:'二进制',status:'finished'},
				{id:7,project:'云盘系统',time:'1天前',type:'二进制',status:'finished'},
				{id:6,project:'移动银行信用卡专版',time:'1天前',type:'二进制',status:'finished'},
				{id:5,project:'直销银行手机银行',time:'1天前',type:'二进制',status:'finished'},
				{id:4,project:'新版企业网银',time:'2天前',type:'二进制',status:'finished'},
				{id:3,project:'移动银行信用卡专版',time:'2天前',type:'二进制',status:'finished'},
				{id:2,project:'数据集市平台',time:'3天前',type:'二进制',status:'finished'},
				{id:1,project:'手机银行',time:'5天前',type:'二进制',status:'finished'},
			]
		}
	}
}
</script>

