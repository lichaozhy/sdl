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
	<h3 class="mt-3">成果列表</h3>
</div>

</template>

<script>
function Project() {
  return {
    name: "手机银行"
  };
}

export default {
  data() {
    return {
      project: Project(),
    };
  },
	computed: {
		semver() {
			return this.$route.params.semver;
		}
	}
}
</script>
