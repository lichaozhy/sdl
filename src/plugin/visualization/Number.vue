<template>
	
<div class="visual-number py-3">{{value||'N/A'}}</div>

</template>

<script>
export default {
	name: 'visualization-number',
	props: ['value'],

}
</script>

<style lang="less">
.visual-number {
	font-size: 108px;
	text-align: center;
	font-weight: 500;
}
</style>
