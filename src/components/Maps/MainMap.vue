<template>
	<GoogleMap :api-key="apiKey" class="gmap" :center="center" :zoom="zoom" :map-type-id="mapType" :tilt="tilt"
		:options="options">
		<!-- MAC -->
		<VehiclePositionMarker :vehicleData="macData" :vehicleIcon="macIcon" />
		<!-- ERU -->
		<VehiclePositionMarker :vehicleData="eruData" :vehicleIcon="eruIcon" />

		<!-- MEA -->
		<VehiclePositionMarker :vehicleData="meaData" :vehicleIcon="meaIcon" />
		<HikerMarker />
	</GoogleMap>
</template>

<script lang="ts">
import {
	centerLng,
	centerLat,
	defaultLat,
	defaultLng,
} from "@/helpers/coordinates.js";
import VehiclePositionMarker from "@/components/Maps/MapComponents/VehiclePositionMarker.vue";
import HikerMarker from "@/components/Maps/MapComponents/HikerMarker.vue";
import { GoogleMap } from "vue3-google-map";
import { defineComponent } from "vue";

type Icon = {
	path: String,
	fillColor: Number,
	latitude: Number,
	longitude: Number,
	rotation: Number,
}

export default defineComponent({
	props: {
		macData: { required: true, type: Object as () => Icon },
		eruData: { required: true, type: Object as () => Icon },
		meaData: { required: true, type: Object as () => Icon },
		macIcon: { required: true, type: Object as () => Icon },
		eruIcon: { required: true, type: Object as () => Icon },
		meaIcon: { required: true, type: Object as () => Icon },
	},
	components: {
		VehiclePositionMarker,
		HikerMarker,
		GoogleMap
	},
	data() {
		return {
			// Map Data
			center: { lat: centerLat, lng: centerLng },
			zoom: 18,
			tilt: 0,
			options: {
				zoomControl: false,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: false,
				scrollwheel: false,
				draggable: false,
				disableDoubleClickZoom: true,
			},
			mapType: "satellite",
			macHover: false,
			eruHover: false,
			meaHover: false,
			apiKey: import.meta.env.API_KEY
		};
	},
	computed: {
		macMarker() {
			if (!this.macData) return null;
			return {
				id: "macMarker",
				position: {
					lat: this.macData.latitude,
					lng: this.macData.longitude,
				},
				icon: {
					path: this.macIcon.path,
					fillColor: this.macIcon.fillColor,
					fillOpacity: 1,
					strokeWeight: 0,
					rotation: this.macData.rotation,
					scale: 1,
					anchor: { x: 41.42, y: 46.713 },
				},
			};
		},
		eruMarker() {
			if (!this.eruData) return null;
			return {
				id: "eruMarker",
				position: {
					lat: this.eruData.latitude,
					lng: this.eruData.longitude,
				},
				icon: {
					path: this.eruIcon.path,
					fillColor: this.eruIcon.fillColor,
					fillOpacity: 1,
					strokeWeight: 0,
					rotation: this.eruData.rotation,
					scale: 1,
					anchor: { x: 41.42, y: 46.713 },
				},
			};
		},
		meaMarker() {
			if (!this.meaData) return null;
			return {
				id: "meaMarker",
				position: {
					lat: this.meaData.latitude,
					lng: this.meaData.longitude,
				},
				icon: {
					path: this.meaIcon.path,
					fillColor: this.meaIcon.fillColor,
					fillOpacity: 1,
					strokeWeight: 0,
					rotation: this.meaData.rotation,
					scale: 1,
					anchor: { x: 41.42, y: 46.713 },
				},
			};
		},
		// vehicleMarkers() {
		// 	if (!(this.macMarker && this.eruMarker && this.meaMarker))
		// 		return null;
		// 	return [this.macMarker, this.eruMarker, this.meaMarker];
		// },
	},
	methods: {},
});
</script>

<style scoped>
.gmap {
	width: 100vw;
	height: 92vh;
}
</style>
