<template>
	<b-col>
		<div class="custom-control custom-switch">
			<input v-model="toggle" type="checkbox" class="custom-control-input" :id="vehicleName" />
			<label class="custom-control-label font-weight-bold" style="font-size:16px" :for="vehicleName">Search Area</label>
		</div>
	</b-col>
</template>

<script lang="ts">
export default {
	props: {
		vehicleName: String,
	},
	data() {
		return {
			toggle: false,
		}
	}
}
</script>

<style scoped>

</style>