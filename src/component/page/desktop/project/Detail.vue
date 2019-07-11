<template>
	<div id="app-project-detail">
		<b-breadcrumb
			:items="[
			{ text: '项目总览', href: '#/desktop/overview' },
			{ text: `当前项目：${attributeData[hash-1].name}`, active: true }
		]"
		/>

		<h3 class="mt-3">属性</h3>
		<b-row>
			<b-col cols="9">
				<b-row>
					<b-col>
						<b-form-group label="项目名称">
							<b-form-input trim size="sm" :value='attributeData[hash-1].name'></b-form-input>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="当前版本">
							<b-form-input value="v1.1.0" size="sm" readonly></b-form-input>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="负责人">
							<b-form-input :value='attributeData[hash-1].owner' size="sm" readonly></b-form-input>
						</b-form-group>
					</b-col>
				</b-row>
				<b-form-group label="SVN地址">
					<b-form-input size="sm" :value='attributeData[hash-1].svn'></b-form-input>
				</b-form-group>
				<b-row>
					<b-col>
						<b-form-group label="开发语言">
							<b-form-select size="sm" value="java">
								<option value="java">Java</option>
							</b-form-select>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="项目类型">
							<b-form-select value="java" size="sm">
								<option value="java">一类</option>
							</b-form-select>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group label="用户">
							<b-form-select value="java" size="sm">
								<option value="java">客户</option>
							</b-form-select>
						</b-form-group>
					</b-col>
				</b-row>
			</b-col>
			<b-col>
				<b-card no-body>
					<b-card-title class="px-2 py-2 m-0">
						<small>成员</small>
					</b-card-title>
					<b-card-text class="p-1 m-0" style="height:120px;overflow:auto">
						<b-img
							v-for="(item, index) in attributeData[hash-1].member"
							:key="index"
							class="m-1 rounded"
							:src="`/assets/${item}.jpeg`"
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
				<b-button @click="isFull=true" size="sm" variant="info">全屏</b-button>
			</b-col>
		</b-row>
		<div id="stage-track" :class="{
			'position-relative': !isFull,
			full: isFull
		}">
			<div id="stage-track-wrap" class="border h-100">
				<b-table
					small
					bordered
					class="w-auto mb-0"
					:fields="[
					{ key: 'requirement', label: '需求分析阶段' },
					{ key: 'design', label: '设计阶段' },
					{ key: 'development', label: '开发阶段' },
					{ key: 'testing', label: '测试阶段' },
					{ key: 'acceptance', label: '运行&监控阶段' },
				]"
				>
					<template slot="bottom-row">
						<td v-for="(stage, index) in stageList" :key="index">
							<div>
								<b-card
									v-for="version in stage.versionList"
									:key="version.value"
									class="mb-2"
									:border-variant="version.active?'primary':'default'"
									no-body
								>
									<b-card-header
										class="py-1 px-2 rounded-0"
										:header-bg-variant="version.active?'primary':'default'"
										:header-text-variant="version.active?'light':'default'"
									>
										<strong class="mr-2">版本</strong>
										<small class="float-right">v{{version.value}}</small>
									</b-card-header>
									<b-card-text class="p-2 m-0">
										<b-form-group label="更新日期:">
											<b-form-input value="2018-12-04T13:21:44Z" size="sm" readonly></b-form-input>
										</b-form-group>
										<b-form-group label="总结:">
											<b-form-textarea
												size="sm"
												:readonly="!version.active"
												:value="version.message"
											></b-form-textarea>
										</b-form-group>
										<b-button size="sm" variant="success" v-if="version.active">保存</b-button>
										<hr class="my-2">
										<div class="project-icon">
											<b-button
												v-for="(value, type) in version.resource"
												:key="type"
												:variant="tagMap[type].variant"
												size="sm"
												class="m-1"
											>{{tagMap[type].text}}<b-badge
												variant="light"
												class="ml-2"
											>{{value}}</b-badge></b-button>
										</div>
									</b-card-text>
									<b-card-footer
										:footer-bg-variant="'light'"
										:footer-text-variant="version.active?'light':'default'"
										class="p-0"
									>
										<b-button size="sm" variant="link" v-if="version.active">回滚</b-button>
										<b-button size="sm" variant="link" v-if="version.active">演进</b-button>
										<b-button
											size="sm"
											variant="link"
											class="float-right"
											:href="`#/desktop/project/1/version/${version.value}`"
										>查看</b-button>
									</b-card-footer>
								</b-card>
							</div>
						</td>
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
import attributeData from './attribute.json';
// function Project() {
// 	return {
// 		name: "手机银行"
// 	};
// }

const stageList = [
	{
		name: "requirement",
		versionList: [
			{
				active: true,
				value: "1.1.0",
				message: "增加信用卡快捷还款功能，推进第二次公测",
			},
			{ value: "1.0.0", message: "正式版本规划，增强安全需求" },
			{ value: "0.3.0", message: "增加功能与第三方数据接口的规划功能" },
			{ value: "0.2.0", message: "重新定位产品和进一步确认用户画像" },
			{ value: "0.1.0", message: "第一次设计研讨" }
		]
	},
	{
		name: "design",
		versionList: [
			{
				value: "1.0.0",
				message: "考虑安全切面，加入安全设计流程。设计功能迁移方案"
			},
			{ value: "0.3.0", message: "继承第二版设计，引入数据共享设计" },
			{ value: "0.2.0", message: "第二版需求的设计" }
		]
	},
	{
		name: "development",
		versionList: [
			{ value: "1.0.2", message: "修正 兼容iPhone X的下方安全区域" },
			{ value: "1.0.1", message: "修正 一些错误；修正 补充CSS常量" },
			{
				value: "1.0.0",
				message: "使用OnsenUI重构，迁移功能，增加对刘海屏的兼容，引入安全开发框架"
			},
			{
				value: "0.3.4",
				message: "全面检查功能，确保基本功能正常可用。锁定UI控件版本"
			},
			{ value: "0.3.3", message: "引入二维码扫描插件，升级依赖" },
			{ value: "0.3.2", message: "更新UI框架" },
			{ value: "0.3.1", message: "更新前端依赖，升级Cordova" },
			{ value: "0.3.0", message: "从0.2.x,开始迁移。更换前端架构" }
		]
	},
	{
		name: "testing",
		versionList: [
			{ value: "1.0.2", message: "1.x交付前测试" },
			{ value: "0.3.4", message: "0.3.x的最终上线前测试" },
			{ value: "0.3.1", message: "新依赖测试" },
			{ value: "0.3.0", message: "迁移后，接入持续集成，尝试第一次测试" }
		]
	},
	{
		name: "acceptance",
		versionList: [
			{ value: "1.0.2", message: "完整功能的公测运行" },
			{ value: "0.3.4", message: "内测" }
		]
	}
];

stageList[0].versionList.forEach(version => {
	version.resource = {
		feature: 1,
		security: 1,
		docs: randomInt(0, 4),
	}
});

stageList[1].versionList.forEach(version => {
	version.resource = {
		docs: randomInt(1, 5),
		securityDesign: randomInt(0, 1),
	}
});

stageList[2].versionList.forEach(version => {
	version.resource = {
		commits: randomInt(6, 20),
		lint: randomInt(0, 15),
		source: randomInt(0, 35)
	}
});

stageList[3].versionList.forEach(version => {
	version.resource = {
		os: randomInt(1, 10),
		fail: randomInt(0, 12),
		vulner: randomInt(0, 12),
		jira: '已分配',
	}
});

stageList[4].versionList.forEach(version => {
	version.resource = {
		warning: randomInt(0, 3)
	}
});

const tagMap = {
	feature: { variant: 'success', text: '功能需求' },
	security: { variant: 'primary', text: '安全需求' },
	securityDesign: { variant: 'primary', text: '安全设计' },
	docs: { variant: 'info', text: '自定义文档' },
	commits: { variant: 'success', text: '提交' },
	lint: { variant: 'secondary', text: '不合规检查' },
	source: { variant: 'danger', text: '白盒漏洞' },
	os: { variant: 'info', text: '开源安全问题' },
	fail: { variant: 'dark', text: '测试失败用例' },
	vulner: { variant: 'danger', text: '漏洞' },
	warning: { variant: 'warning', text: '运行警告' },
	jira: { variant: 'success', text: 'jira' },
}

function randomInt(from, to) {
	return Math.floor(from + Math.random() * (to- from));
}

export default {
	data() {

		return {
			attributeData,
			project: '',
			owmer: '',
			svn: '',
			isFull: false,
			stageList: stageList,
			tagMap
		};
	},
	computed: {
		hash() {
			return this.$route.params.hash;
		}
	},
	mounted() {
	},
	methods: {
	}
};
</script>

<style lang="less">
#app-project-detail {
	.project-property {
		.card-body {
		}
	}

	.project-icon .btn-lg {
		position: relative;

		i {
			font-size: 36px;
		}

		.badge {
			font-size: 12px;
			position: absolute;
			top: 0;
			right: 0;
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

	table {
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
