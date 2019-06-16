<template>

<div>
	<b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">SDLC安全开发管控平台</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/desktop/project">我的项目</b-nav-item>
        <b-nav-item href="#/desktop/about">关于</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template
            slot="button-content"
          >{{isAdministrator?'管理员':'开发者'}}：{{principalName}}</template>

          <b-dropdown-item
            href="#/desktop/profile"
          >账号信息</b-dropdown-item>
          <b-dropdown-item
            v-if="isAdministrator"
            href="#/desktop/admin/overview"
          >系统</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="signout">退出</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div id="app-desktop-container"
    style="width: 100%; top: 56px; bottom: 0; overflow: auto;"
    class="position-absolute">
    <b-container>
      <router-view class="pt-3">桌面路由框架</router-view>
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
