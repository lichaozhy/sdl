<template>

<div>
	<b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>我的项目</b-nav-item>
        <b-nav-item href="#">关于</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">开发者/管理员：</template>
          <b-dropdown-item href="#/desktop/account">账号信息</b-dropdown-item>
          <b-dropdown-item href="#/desktop/account">系统</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">退出</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div id="app-desktop-container"
    style="width: 100%; top: 56px; bottom: 0; overflow: auto;"
    class="position-absolute">
    <router-view class="pt-3">桌面路由框架</router-view>
  </div>
</div>

</template>

<script>
export default {
  
}
</script>
