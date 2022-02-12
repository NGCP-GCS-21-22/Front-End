<template>
	<b-container>
		<h2>
			{{ name }}
			<b-img
				class="widget-icon"
				:src="require('@/assets/map_icons/home.png')"
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

			<b-col>
				<b-form-input
					id="input-1"
					v-model="homeCoordinates.lat"
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

			<b-col>
				<b-form-input
					id="input-1"
					v-model="homeCoordinates.lng"
					type="email"
					placeholder="Enter Longtitude"
					required
				>
				</b-form-input>
			</b-col>
		</b-row>

		<b-row class="row justify-content-center">
			<b-button class="button" @click="goBack">Back</b-button>
			<b-button class="button" @click="reset">Reset</b-button>
			<b-button class="button" variant="success">Submit</b-button>
		</b-row>
	</b-container>
</template>

<script>
import { defaultLat, defaultLng } from "@/helpers/coordinates.js";
export default {
	props: {
		name: String,
		homeCoordinates: Object,
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
			this.$emit("updateWidgetData", "homeCoordinates", coordinates);
		},
	},
};
</script>

<style scoped>
.latlong {
	margin-bottom: 10px;
}
.button {
	margin-right: 10px;
}
.widget-icon {
	height: 4vh;
}
</style>