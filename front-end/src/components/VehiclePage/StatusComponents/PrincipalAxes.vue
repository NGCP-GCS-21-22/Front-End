<template>
	<b-container>
		<b-row class="principal-axes-row">
			<b-col class="info">
				<u>Pitch</u><br />
				<span :style="pitchStyle">{{ pitch }}</span>
			</b-col>
			<b-col class="info">
				<u>Roll</u><br />
				<span :style="rollStyle">{{ roll }}</span>
			</b-col>
			<b-col class="info">
				<u>Yaw</u><br />
				<span :style="yawStyle">{{ yaw }}</span>
			</b-col>
		</b-row>
	</b-container>
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
		pitchStyle() {
			if (!this.vehicleData) return null;
			return `color: ${this.vehicleData["pitch_color"]}`;
		},
		rollStyle() {
			if (!this.vehicleData) return null;
			return `color: ${this.vehicleData["roll_color"]}`;
		},
		yawStyle() {
			if (!this.vehicleData) return null;
			return `color: ${this.vehicleData["yaw_color"]}`;
		},
	},
};
</script>

<style scoped>
.info {
	font-size: 20pt;
	padding: 1vh;
	/* padding-bottom: 5vh; */
}

.principal-axes-row {
	height: 13vh;
}
</style>
