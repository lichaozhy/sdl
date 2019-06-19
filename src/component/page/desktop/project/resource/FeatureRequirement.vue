<template>
	
<div>
	<b-row>
		<b-col>
			<b-form-group label="项目类型">
				<b-form-select value="java" size="sm" disabled>
					<option value="java">模板1：手机银行</option>
				</b-form-select>
			</b-form-group>
		</b-col>
		<b-col></b-col>
	</b-row>
	<b-form-checkbox-group
		:options="row.item.elementList"
		disabled
		v-model="selected"
		name="flavour-1"
	></b-form-checkbox-group>
</div>

</template>

<script>
export default {
	props: ['row'],
	data() {
		return {
			selected: this.row.item.elementList.slice(0)
		};
	}
}
</script>
