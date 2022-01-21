<template>
    <b-card>
        <p class="card-text">{{name}}</p>
        <label for="input-live">Latitude:</label>
        <b-form-input
          id="input-1"
          v-model="latitude"
          type="email"
          placeholder="Enter Latitude"
          required
        >
        </b-form-input>
        <label for="input-live">Longtitude:</label>
        <b-form-input
          id="input-1"
          v-model="longitude"
          type="email"
          placeholder="Enter Longtitude"
          required
        >
        </b-form-input>
        <br />
        
        <b-button @click="goBack" >Back</b-button>
		<b-button @click="reset" >Reset</b-button>
        <b-button variant="success" >Submit</b-button>
    </b-card>
</template>

<script>
import { defaultLat, defaultLng } from "@/helpers/coordinates.js";
export default {
	props: {
		name: String,
		missionWaypoint: Object,
	},
	computed: {
		latitude: {
			get: function () {
				if (!this.missionWaypoint) return defaultLat;
				return this.missionWaypoint.latitude;
			},
			set: function (newValue) {
				let coordinates = {
					latitude: parseFloat(newValue),
					longitude: this.longitude,
				};
				this.$emit("moveCoordinates", "missionWaypoint", coordinates);
			},
		},
		longitude: {
			get: function () {
				if (!this.missionWaypoint) return defaultLng;
				return this.missionWaypoint.longitude;
			},
			set: function (newValue) {
				let coordinates = {
					latitude: this.latitude,
					longitude: parseFloat(newValue),
				};
				this.$emit("moveCoordinates", "missionWaypoint", coordinates);
			},
		},
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
        	latitude: defaultLat,
            longitude: defaultLng,
        };
        this.$emit("moveCoordinates", "missionWaypoint", coordinates);
		}
	},
};
</script>

<style scoped>
</style>