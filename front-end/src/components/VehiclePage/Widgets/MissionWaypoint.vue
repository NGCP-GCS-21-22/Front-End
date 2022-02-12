<template>
	<b-container class="widget-container">
		<h2>
			{{ name }}
			<b-img
				class="widget-icon"
				:src="require('@/assets/map_icons/mission-waypoint.png')"
			></b-img>
		</h2>

		<b-row>
			<b-col
				class="latlong"
				cols="2"
				style="padding-top: 6.5px"
				align="left"
			>
				<label for="input-live">Latitude:</label>
			</b-col>
			<b-col cols="10">
				<b-form-input
					id="input-1"
					v-model="missionWaypoint.lat"
					type="email"
					placeholder="Enter Latitude"
					required
				>
				</b-form-input>
			</b-col>
		</b-row>
		<b-row>
			<b-col
				class="latlong"
				cols="2"
				style="padding-top: 6.5px"
				align="left"
			>
				<label for="input-live">Longitude:</label>
			</b-col>
			<b-col cols="10">
				<b-form-input
					id="input-1"
					v-model="missionWaypoint.lng"
					type="email"
					placeholder="Enter Longtitude"
					required
				>
				</b-form-input>
			</b-col>
		</b-row>

		<b-button @click="goBack">Back</b-button>
	</b-container>
</template>

<script>
import { defaultLat, defaultLng } from "@/helpers/coordinates.js";
export default {
	props: {
		name: String,
		missionWaypoint: Object,
		missionIcon: String,
	},
	data() {
		return {};
	},
	methods: {
		goBack() {
			this.$emit("goBack");
		},
		reset() {
			let coordinates = {
				lat: defaultLat,
				lng: defaultLng,
			};
			this.$emit("updateWidgetData", "missionWaypoint", coordinates);
		},
	},
};
</script>

<style scoped>
.widget-container {
}

.latlong {
	margin-bottom: 10px;
}

.widget-icon {
	height: 4vh;
}
</style>