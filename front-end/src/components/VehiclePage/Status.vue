<template>
	<b-container>
		<b-card class="status-card" :title="vehicleName + ' Status'">
			<div>This is some content/ dummy info for the things.</div>
		</b-card>
	</b-container>
</template>

<script>
export default {
	props: {
		vehicleName: String,
	},
};
</script>

<style scoped>
.status-card {
	width: 40vw;
	height: 30vh;
}
</style>