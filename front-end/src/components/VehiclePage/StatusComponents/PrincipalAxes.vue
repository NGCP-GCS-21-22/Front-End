<template>
	<b-row>
		<b-col class="info"><u>Pitch</u><br /> {{ pitch }}</b-col>
		<b-col class="info"><u>Roll</u><br /> {{ roll }} </b-col>
		<b-col class="info"><u>Yaw</u><br /> {{ yaw }} </b-col>
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
	font-size: 20pt;
	padding-bottom: 5px;
}
</style>
