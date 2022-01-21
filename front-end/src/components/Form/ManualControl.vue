<template>
  	<b-col>
		<div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" :id="vehicleName"/>
            <label class="custom-control-label font-weight-bold" style="font-size:16px" :for="vehicleName">Manual Control</label>
            </div>
	</b-col>
</template>

<script>
export default {
	props: {
		vehicleName: String,
	},
}
</script>

<style scoped>

</style>