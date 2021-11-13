<template>
	<b-row class="justify-content-md-center vehicleName">
		<h2>{{ vehicleName }}</h2>
		<b-img class="vehicleImg" :src="vehicleImgPath"> </b-img>
	</b-row>
</template>

<script>
export default {
	props: {
		vehicleName: String,
		vehicleImgPath: String,
	},
};
</script>

<style scoped>
.vehicleName {
	padding: 10px 0px;
}

.vehicleImg {
	width: 50px;
	height: 50px;
	margin-top: -8px;
	margin-left: 10px;
	float: left;
}
</style>