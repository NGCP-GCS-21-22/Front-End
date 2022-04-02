<template>
	<b-card class="container">
		<b-row>
			<b-col>
				<Bar
					:name="'Altitude'"
					:unit="'ft'"
					:value="altitude"
					:max="maxAltitude"
					:color="altitudeColor"
				/>
			</b-col>
			<b-col>
				<Bar
					:name="'Speed'"
					:unit="'ft/s'"
					:value="speed"
					:max="maxSpeed"
          :color="speedColor"
				/>
			</b-col>
		</b-row>
	</b-card>
</template>

<script>
import Bar from "@/components/VehiclePage/StatusComponents/Bar.vue";

export default {
	props: {
		vehicleData: Object,
	},
	components: {
		Bar,
	},
	computed: {
		altitude() {
			if (!this.vehicleData) return 0;
			return this.vehicleData["altitude"];
		},
		speed() {
			if (!this.vehicleData) return 0;
			return this.vehicleData["speed"];
		},
		altitudeColor() {
			if (!this.vehicleData) return null;
			return this.vehicleData["altitude_color"];
		},
		speedColor() {
			if (!this.vehicleData) return null;
			return this.vehicleData["speed_color"];
		},
	},
	data() {
		return {
			maxAltitude: 100,
			maxSpeed: 100,
		};
	},
};
</script>

<style scoped>
.container {
	width: 100%;
	margin-top: 10px;
	/* margin-bottom: 10px; */
	margin-left: 0px;
	margin-right: 0px;
	padding: 0px;
	height: 36vh;
	padding-bottom: 10px;
}
</style>
