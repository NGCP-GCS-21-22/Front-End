<template>
	<b-row>
		<b-col class="info">Pitch: <br /> {{ pitch }}</b-col>
		<b-col class="info">Roll: <br /> {{ roll }} </b-col>
		<b-col class="info">Yaw: <br /> {{ yaw }} </b-col>
	</b-row>
</template>

<script>
export default {
	props: {
		vehicleData: Object,
	},
	computed: {
		pitch() {
			if (!this.vehicleData) return 0;
			return this.vehicleData["pitch"];
		},
		roll() {
			if (!this.vehicleData) return 0;
			return this.vehicleData["roll"];
		},
		yaw() {
			if (!this.vehicleData) return 0;
			return this.vehicleData["yaw"];
		},
	},
};
</script>

<style>
.info {
	font-size: 14pt;
	padding-bottom: 5px;
}
</style>
