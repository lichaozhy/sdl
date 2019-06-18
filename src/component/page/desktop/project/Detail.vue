<template>

<div id="app-project-detail">
	<b-breadcrumb
		:items="[
			{ text: '项目总览', href: '#/desktop/overview' },
			{ text: `当前项目：${project.name}`, active: true }
		]"
	/>

	<h3 class="mt-3">属性</h3>
	<b-row>
		<b-col cols="9">
			<b-row>
				<b-col>
					<b-form-group label="项目名称" >
						<b-form-input trim size="sm"
							value="手机银行"
						></b-form-input>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group label="当前版本" >
						<b-form-input value="v1.4.4" size="sm" readonly></b-form-input>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group label="负责人" >
						<b-form-input value="罗惠" size="sm" readonly></b-form-input>
					</b-form-group>
				</b-col>
			</b-row>
			<b-form-group label="SVN地址" >
				<b-form-input
					size="sm"
					value="svn://192.168.136.33/svn/app-bank"
				></b-form-input>
			</b-form-group>
			<b-row>
				<b-col>
					<b-form-group label="开发语言" >
						<b-form-select size="sm" value="java">
							<option value="java">Java</option>
						</b-form-select>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group label="项目类型" >
						<b-form-select value="java" size="sm">
							<option value="java">一类</option>
						</b-form-select>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group label="用户" >
						<b-form-select value="java" size="sm">
							<option value="java">客户</option>
						</b-form-select>
					</b-form-group>
				</b-col>
			</b-row>
		</b-col>
		<b-col>
			<b-card no-body>
				<b-card-title class="px-2 py-2 m-0"><small>成员</small></b-card-title>
				<b-card-text class="p-1 m-0" style="height:120px;overflow:auto">
					<b-img
						v-for="index in 5"
						:key="index"
						class="m-1 rounded"
						:src="`/assets/${index-1}.jpeg`"
						width="48"
					/>
				</b-card-text>
				<b-card-footer>
					<b-button size="sm" variant="success">增加成员</b-button>
				</b-card-footer>
			</b-card>
		</b-col>
	</b-row>

	<h3 class="mt-3">阶段跟踪</h3>
	<b-row class="mb-1">
		<b-col>
			<b-button
				@click="isFull=true"
				size="sm"
				variant="info"
			>全屏</b-button>
		</b-col>
	</b-row>
	<div id="stage-track"
		:class="{
			'position-relative': !isFull,
			full: isFull
		}">
		<div id="stage-track-wrap"
			class="border h-100">
			<b-table
				small
				bordered
				class="w-auto mb-0"
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
			</b-table>
		</div>
		<b-button
			v-if="isFull"
			variant="info"
			class="position-absolute m-2"
			size="sm"
			@click="isFull=false"
			style="top:0;left:0"
		>还原</b-button>
	</div>
</div>

</template>

<script>
function Project() {
	return {
		name: '手机银行'
	}
}

export default {
	data() {
		return {
			project: Project(),
			isFull: false
		};
	}
}
</script>

<style lang="less">
#app-project-detail {
	.project-property {
		.card-body {
		}
	}

	#stage-track {
		#stage-track-wrap {
			overflow-x: scroll;
			background-color: #f6f6f6;
		}

		height: 600px;

		&.full {
			padding: 15px;
			background: #fff;
			position: fixed;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
		}
	}

	table{
		height: 100%;
		background: #fff;

		th {
			text-align: center;
		}

		td {
			padding: 0;

			> div {
				width: 360px;
				height: 100%;
				padding: 5px;
				overflow-y: scroll;
			}
		}
		
	}
}
</style>
