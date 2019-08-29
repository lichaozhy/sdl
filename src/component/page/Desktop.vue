<template>

<div>
	<b-navbar toggleable="lg" type="dark" variant="dark">
		<b-navbar-brand href="#/">SDLC安全开发管控平台</b-navbar-brand>

		<b-navbar-nav>
			<b-nav-item href="#/desktop/project">总览</b-nav-item>
			<b-nav-item href="#/desktop/project/all" class="ml-2">我的项目</b-nav-item>

			<b-nav-item-dropdown class="ml-2">
				<template slot="button-content">漏洞</template>
				<b-dropdown-item href="#/desktop/vulnerability/overview">漏洞详情列表</b-dropdown-item>
				<b-dropdown-item href="#/desktop/vulnerability/projectvulrank">项目漏洞排名</b-dropdown-item>
				<b-dropdown-item href="#/desktop/vulnerability/groupvulrank">项目组漏洞排名</b-dropdown-item>
				<b-dropdown-item href="#/desktop/vulnerability/batchvulrank">批次漏洞排名</b-dropdown-item>
				<b-dropdown-item href="#/desktop/vulnerability/vulappeartimes">漏洞出现频率</b-dropdown-item>
				<b-dropdown-item href="#/desktop/vulnerability/vulrepairduration">漏洞修复时长</b-dropdown-item>
			</b-nav-item-dropdown>

			<b-nav-item-dropdown class="ml-2">
				<template slot="button-content">工具</template>
				<b-dropdown-item href="#/desktop/tool/scantask">扫描任务概览</b-dropdown-item>
				<b-dropdown-item href="#/desktop/tool/execute">项目执行概览</b-dropdown-item>
				<b-dropdown-item href="#/desktop/tool/result">扫描结果</b-dropdown-item>
				<b-dropdown-item href="#/desktop/tool/setting">配置</b-dropdown-item>
			</b-nav-item-dropdown>

			<b-nav-item-dropdown class="ml-2">
				<template slot="button-content">态势</template>
				<b-dropdown-item href="#/desktop/situation/statistic">统计分析</b-dropdown-item>
				<b-dropdown-item href="#/desktop/situation/compare">对比分析</b-dropdown-item>
				<b-dropdown-item href="#/desktop/situation/trend">趋势分析</b-dropdown-item>
			</b-nav-item-dropdown>
		</b-navbar-nav>

		<!-- Right aligned nav items -->
		<b-navbar-nav class="ml-auto">
			<b-nav-item-dropdown
				right 
				v-if="isAdministrator"
			>
				<template slot="button-content">管理</template>
				<b-dropdown-item
					href="#/desktop/admin/overview"
				>数据概览</b-dropdown-item>
				<b-dropdown-item 
					href="#/desktop/project/scanoverview"
				>扫描任务概览</b-dropdown-item>
				<b-dropdown-item
					v-if="isAdministrator"
					href="#/desktop/admin/overview"
				>配置</b-dropdown-item>
			</b-nav-item-dropdown>

			<b-nav-item-dropdown right>
				<!-- Using 'button-content' slot -->
				<template
					slot="button-content"
				>{{isAdministrator?'管理员':'开发者'}}：{{principalName}}</template>

				<b-dropdown-item
					href="#/desktop/profile"
				>账号信息</b-dropdown-item>
				<b-dropdown-divider></b-dropdown-divider>
				<b-dropdown-item @click="signout">退出</b-dropdown-item>
			</b-nav-item-dropdown>
		</b-navbar-nav>
	</b-navbar>
	<div id="app-desktop-container"
		style="width: 100%; top: 56px; bottom: 0; overflow: auto;"
		class="position-absolute">
		<b-container>
			<router-view class="pt-3 pb-5">桌面路由框架</router-view>
		</b-container>
	</div>
</div>

</template>

<script>
export default {
	name: 'desktop-framework',
	computed: {
		isAdministrator() {
			return this.$store.state.principal.administrator;
		},
		principalName() {
			return this.$store.state.principal.name;
		}
	},
	methods: {
		async signout() {
			try {
				await this.$backend.signout();
				location.reload();
			} catch (error) {
				console.log(error);
			}
		}
	}
}
</script>
