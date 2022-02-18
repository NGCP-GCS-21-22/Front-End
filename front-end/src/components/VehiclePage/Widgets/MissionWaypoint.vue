<template>
	<b-container>
		<b-button class="back-button" @click="goBack">Back</b-button>
		<h2 class="mx-auto">
			{{ name }}
			<b-img
				class="widget-icon"
				:src="require('@/assets/map_icons/mission-waypoint.png')"
			></b-img>
		</h2>
		<div class="latlng-wrapper">
			<b-row>
				<b-col
					class="latlng"
					cols="2"
					offset="3"
					style="padding-top: 6.5px"
					align="left"
				>
					<label for="input-live">Latitude:</label>
				</b-col>

				<b-col cols="4">
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
					class="latlng"
					cols="2"
					offset="3"
					style="padding-top: 6.5px"
					align="left"
				>
					<label for="input-live">Longitude:</label>
				</b-col>

				<b-col cols="4">
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
		</div class="lat">

		<b-row class="row" style="float: right">
			<b-button class="button" @click="reset">Reset</b-button>
			<b-button class="button" variant="success" :disabled="waypointNotChanged()" @click="postData">Submit</b-button>
		</b-row>

	</b-container>
</template>

<script>
import { defaultLat, defaultLng } from "@/helpers/coordinates.js";
export default {
	props: {
		name: String,
		missionWaypoint: Object,
	},
	data() {
		return {
			initialMissionWaypoint: this.missionWaypoint,
		};
	},
	methods: {
		goBack() {
			this.reset();
			this.$emit("goBack");
		},
		reset() {
			let coordinates = {
				lat: defaultLat,
				lng: defaultLng,
			};
			this.$emit("updateWidgetData", "missionWaypoint", coordinates);
		},
		waypointNotChanged() {
			if (
				this.missionWaypoint.lat == this.initialMissionWaypoint.lat &&
				this.missionWaypoint.lng == this.initialMissionWaypoint.lng
			) {
				return true;
			}

			return false;
		},
		postData() {
			// update initialMissionWaypoint
			this.initialMissionWaypoint = this.missionWaypoint;

			// send data to back-end
		},
	},
};
</script>

<style scoped>
.back-button {
	position: absolute;
	top: 20px;
	left: 20px;
}
.latlng {
	margin-bottom: 10px;
}
.button {
	margin-right: 10px;
}
.widget-icon {
	height: 4vh;
}
.latlng-wrapper {
	padding: 15px;
}
</style>