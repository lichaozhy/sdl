<template>

<div>
	<b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#/">SDLC安全开发管控平台</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item-dropdown>
        <template slot="button-content">我的项目</template>
        <b-dropdown-item href="#/desktop/project">总览</b-dropdown-item>
        <b-dropdown-item href="#/desktop/project/all">全部列表</b-dropdown-item>
        <b-dropdown-item href="#/desktop/project/vulnerability">漏洞分析&amp;报告</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item href="#/desktop/project"></b-nav-item>
      <b-nav-item href="#/desktop/about">关于</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown
        right 
        v-if="isAdministrator"
      >
        <template slot="button-content">其他工具</template>
        <b-dropdown-item
          href="#/desktop/tool/ntu"
        >开源漏洞扫描</b-dropdown-item>
        <b-dropdown-item
          v-if="isAdministrator"
          href=""
        >工具2</b-dropdown-item>
        <b-dropdown-item
          v-if="isAdministrator"
          href=""
        >工具3</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        right 
        v-if="isAdministrator"
      >
        <template slot="button-content">管理</template>
        <b-dropdown-item
          href="#/desktop/admin/overview"
        >数据概览</b-dropdown-item>
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
