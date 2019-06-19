<template>
	
<div>
	<b-breadcrumb
		:items="[
			{ text: '项目总览', href: '#/desktop/overview' },
			{ text: `当前项目：${project.name}`, href: '#/desktop/project/1' },
			{ text: `版本：${semver}`, active: true },
		]"
	/>
	<h3 class="mt-3">摘要</h3>
	<b-row>
		<b-col cols="9">
			<b-row>
				<b-col>
					<b-form-group label="当前阶段:">
						<b-form-input trim size="sm" value="需求分析阶段" readonly></b-form-input>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group label="当前版本:">
						<b-form-input value="v1.1.0" size="sm" readonly></b-form-input>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group label="演进时间:">
						<b-form-input value="2018-12-04T13:21:44Z" size="sm" readonly></b-form-input>
					</b-form-group>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-form-group label="上一个阶段:">
						<b-form-input trim size="sm" value="运行&监控阶段" readonly></b-form-input>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group label="上一个版本:">
						<b-form-input value="v1.0.2" size="sm" readonly></b-form-input>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group label="下一个阶段:">
						<b-form-input value="N/A" size="sm" readonly></b-form-input>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group label="下一个版本:">
						<b-form-input value="N/A" size="sm" readonly></b-form-input>
					</b-form-group>
				</b-col>
			</b-row>
		</b-col>
		<b-col>
			<b-form-group label="总结:">
				<b-form-textarea
					style="height:109px"
					size="sm"
					value="增加信用卡快捷还款功能，推进第二次公测"
				></b-form-textarea>
			</b-form-group>
		</b-col>
	</b-row>
	<b-row>
		<b-col cols="3"></b-col>
		<b-col cols="2"><b-button
			class="w-100"
			size="sm"
			variant="primary"
		>上一个版本</b-button></b-col>
		<b-col cols="2"><b-button
			class="w-100"
			size="sm"
			variant="success"
		>保存</b-button></b-col>
		<b-col cols="2"><b-button
			class="w-100"
			size="sm"
			variant="primary"
		>下一个版本</b-button></b-col>
		<b-col cols="3"></b-col>
	</b-row>

	<h3 class="mt-3">资源</h3>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="需求分析阶段" active>
				<b-button
					size="sm"
					variant="success"
				><i
					class="fas fa-plus mr-2"
				/>功能需求分析</b-button>
				<b-button
					size="sm"
					variant="primary"
					@click="openCreateSecurityRequirement"
				><i
					class="fas fa-plus mr-2"
				/>安全需求分析</b-button>
				<b-button
					size="sm"
					variant="info"
				><i
					class="fas fa-upload mr-2"
				/>上传自定义文档</b-button>
				<b-table
					class="mt-3"
					small
					:items="resource.requirement"
					:fields="[
						{ key: 'typeName', label: '资源类型'},
						{ key: 'id', label: '标识'},
						{ key: 'createdAt', label: '创建时间'},
						{ key: 'show_details', label: ''},
					]"
				>
					<template slot="show_details" slot-scope="row">
						<b-button size="sm"
							@click="row.toggleDetails"
						>{{ row.detailsShowing ? '隐藏' : '显示'}}详情</b-button>
					</template>
					<template slot="row-details" slot-scope="row">
						<component
							:is="resComp[row.item.type]"
							:row="row"
						></component>
					</template>
				</b-table>
      </b-tab>
			<b-tab title="设计阶段">
				<b-button
					size="sm"
					variant="primary"
					@click="createFeatureDesign"
				><i
					class="fas fa-plus mr-2"
				/>生成功能设计</b-button>
				<b-button
					size="sm"
					variant="primary"
					@click="createSecurityDesign"
				><i
					class="fas fa-shield-alt mr-2"
				/>生成安全设计</b-button>
				<b-button
					size="sm"
					variant="info"
				><i
					class="fas fa-upload mr-2"
				/>上传自定义文档</b-button>
				<b-table
					class="mt-3"
					small
					:items="resource.design"
					:fields="[
						{ key: 'typeName', label: '资源类型'},
						{ key: 'id', label: '标识'},
						{ key: 'createdAt', label: '创建时间'},
						{ key: 'show_details', label: ''},
					]"
				>
					<template slot="show_details" slot-scope="row">
						<b-button size="sm"
							@click="row.toggleDetails"
						>{{ row.detailsShowing ? '隐藏' : '显示'}}详情</b-button>
					</template>
					<template slot="row-details" slot-scope="row">
						<div>
							<b-button
								variant="link"
								v-for="(a, index) in row.item.download"
								:key="index"
								:href="a.href"
							>{{a.text}}</b-button>
						</div>
					</template>
				</b-table>
			</b-tab>
    </b-tabs>
  </b-card>

	<b-modal
		ref="createSecurityRequirement"
		title="创建安全需求分析"
		size="lg"
		ok-title="确定"
		cancel-title="取消"
		@ok="addSecurityRequirement"
	>
		<div class="d-block">
			<b-tabs card>
				<b-tab
					v-for="(feature, key) in security"
					:key="key"
					:title="feature.name">
					<b-card-text>
						<b-form-checkbox-group v-model="selected">
							<b-table
								small
								:items="feature.list"
								:fields="[
									{ key: 'checkbox', label: '' },
									{ key: 'category', label: '需求分类' },
									{ key: 'subCategory', label: '子类' },
									{ key: 'description', label: '描述', class: 'security-description' },
								]"
							>
								<template slot="checkbox" slot-scope="data">
									<b-form-checkbox :value="`${key}-${data.index}`"></b-form-checkbox>
								</template>
							</b-table>
						</b-form-checkbox-group>
					</b-card-text>
				</b-tab>
			</b-tabs>
		</div>
	</b-modal>
</div>

</template>

<script>
import FeatureRequirement from './resource/FeatureRequirement';
import SecurityRequirement from './resource/SecurityRequirement';
import security from './security.json';

function Project() {
  return {
		name: "手机银行",
  };
}

export default {
  data() {
    return {
			resComp: {
				FeatureRequirement,
				SecurityRequirement
			},
      project: Project(),
			resource: {
				requirement: [
					{
						typeName: '功能需求分析',
						type: 'FeatureRequirement',
						id: 'requirement_feature_project_1_version_v1.1.0_0',
						createdAt: new Date('2018-12-06').toLocaleDateString(),
						_showDetails: false,
						elementList: [
							'登录', '注册', '注销', '修改密码', '挂失', '账户详情',
							'转账', '缴费', '交易明细'
						],
					},
				],
				design: []
			},
			security,
			selected: []
    };
  },
	computed: {
		semver() {
			return this.$route.params.semver;
		}
	},
	methods: {
		openCreateSecurityRequirement() {
			this.$refs.createSecurityRequirement.show();
		},
		addSecurityRequirement() {
			this.resource.requirement.push({
				typeName: '安全需求分析',
				type: 'SecurityRequirement',
				id: 'requirement_security_project_1_version_v1.1.0_0',
				createdAt: new Date('2018-12-06').toLocaleDateString(),
				_showDetails: false,
			});
		},
		createSecurityDesign() {
			this.resource.design.push({
				typeName: '安全需求与设计',
				type: 'SecurityRequirement',
				id: 'requirement_security_project_1_version_v1.1.0_0',
				createdAt: new Date('2018-12-06').toLocaleDateString(),
				_showDetails: false,
				download: [
					{ text: 'security_design.docx', href: '/assets/resources/security_design.docx'}
				]
			}, {
				typeName: '安全开发参考',
				type: 'SecurityRequirement',
				id: 'requirement_security_project_1_version_v1.1.0_0',
				createdAt: new Date('2018-12-06').toLocaleDateString(),
				_showDetails: false,
				download: [
					{ text: '会话标识符.docx', href: '/assets/resources/signin/会话标识符.docx' },
					{ text: '加密传输数据.docx', href: '/assets/resources/signin/加密传输数据.docx' },
					{ text: '口令暴力猜解.docx', href: '/assets/resources/signin/口令暴力猜解.docx' },
					{ text: '多重并发会话.docx', href: '/assets/resources/signin/多重并发会话.docx' },
					{ text: '密码明文回显.docx', href: '/assets/resources/signin/密码明文回显.docx' },
					{ text: '敏感信息脱敏.docx', href: '/assets/resources/signin/敏感信息脱敏.docx' },
					{ text: '日志管理.docx', href: '/assets/resources/signin/日志管理.docx' },
					{ text: '登录重放攻击.docx', href: '/assets/resources/signin/登录重放攻击.docx' },
					{ text: '记录日志.docx', href: '/assets/resources/signin/记录日志.docx' },
					{ text: '输入验证.docx', href: '/assets/resources/signin/输入验证.docx' },
					{ text: '错误处理.docx', href: '/assets/resources/signin/错误处理.docx' },
				]
			});
		},
		createFeatureDesign() {
			this.resource.design.push({
				typeName: '业务分析与威胁建模',
				type: 'SecurityRequirement',
				id: 'requirement_security_project_1_version_v1.1.0_0',
				createdAt: new Date('2018-12-06').toLocaleDateString(),
				_showDetails: false,
				download: [
					{ text: 'feature_prototype_design.docx', href: '/assets/resources/feature_prototype_design.docx'}
				]
			});
		}
	}
}
</script>

<style lang="less">
.security-description{
	width: 32em;
}
</style>
