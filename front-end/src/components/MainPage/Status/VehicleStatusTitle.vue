<template>
	<b-row class="justify-content-md-center vehicleName">
		<h2>{{ vehicleName }}</h2>
		<svg class="vehicleImg" v-if="path && fillColor" viewBox="0 0 100 100">
			<path :d="path" :fill="fillColor"/>
		</svg>
	</b-row>
</template>

<script>
export default {
	props: {
		vehicleName: String,
		vehicleIcon: Object,
	},
	computed: {
		path() {
			if (!this.vehicleIcon) return null;
			return this.vehicleIcon.path;
		},
		fillColor() {
			if (!this.vehicleIcon) return null;
			return this.vehicleIcon.fillColor;
		},
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
	margin-top: -6px;
	margin-left: 10px;
	float: left;
}
</style>