<template>
	<b-container>
		<b-button class="back-button" @click="goBack">Back</b-button>
		<h2 class="mx-auto">
			{{ name }}
			<b-img
				class="widget-icon"
				:src="require('@/assets/map_icons/home.png')"
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
					<label>Latitude:</label>
				</b-col>

				<b-col cols="4">
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
					class="latlng"
					cols="2"
					offset="3"
					style="padding-top: 6.5px"
					align="left"
				>
					<label>Longitude:</label>
				</b-col>

				<b-col cols="4">
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
		</div>

		<b-row class="row" style="float: right">
			<b-button class="button" @click="reset">Reset</b-button>
			<b-button
				class="button"
				variant="success"
				:disabled="waypointNotChanged()"
				@click="postData"
				>Submit</b-button
			>
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
		return {
			initialHomeCoordinates: this.homeCoordinates,
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
			this.$emit("updateWidgetData", "homeCoordinates", coordinates);
		},
		waypointNotChanged() {
			if (
				this.homeCoordinates.lat == this.initialHomeCoordinates.lat &&
				this.homeCoordinates.lng == this.initialHomeCoordinates.lng
			) {
				return true;
			}

			return false;
		},
		postData() {
			// update initialHomeCoordinates
			this.initialHomeCoordinates = this.homeCoordinates;
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