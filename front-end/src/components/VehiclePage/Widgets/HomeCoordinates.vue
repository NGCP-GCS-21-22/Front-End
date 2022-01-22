<template>
	<b-card>
		<p class="card-text">{{ name }}</p>
		<label for="input-live">Latitude:</label>
		<b-form-input
			id="input-1"
			v-model="homeCoordinates.lat"
			type="email"
			placeholder="Enter Latitude"
			required
		>
		</b-form-input>
		<label for="input-live">Longitude:</label>
		<b-form-input
			id="input-1"
			v-model="homeCoordinates.lng"
			type="email"
			placeholder="Enter Longtitude"
			required
		>
		</b-form-input>
		<br />

		<b-button @click="goBack">Back</b-button>
		<b-button @click="reset">Reset</b-button>
		<b-button variant="success">Submit</b-button>
	</b-card>
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
</style>