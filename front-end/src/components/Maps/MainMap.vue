<template>
	<GmapMap
		class="gmap"
		:center="center"
		:zoom="zoom"
		:map-type-id="mapType"
		:tilt="tilt"
		:options="options"
	>
		<!-- vehicle pos -->
		<GmapMarker
			v-for="marker in vehicleMarkers"
			:key="marker.id"
			:position="marker.position"
			:clickable="false"
			:icon="{
				url: marker.icon,
			}"
		/>
	</GmapMap>
</template>

<script>
import { centerLng, centerLat, defaultLat, defaultLng } from "@/helpers/coordinates.js";

export default {
	props: {
		macData: Object,
		eruData: Object,
		meaData: Object,
		macIcon: String,
		eruIcon: String,
		meaIcon: String,
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
		}
	},
	computed: {
		macMarker() {
			if (!this.macData) return null
			return {
				id: "macMarker",
				position: {
					lat: this.macData.latitude,
					lng: this.macData.longitude,
				},
				icon: this.macIcon,
			}
		},
		eruMarker() {
			if (!this.eruData) return null
			return {
				id: "eruMarker",
				position: {
					lat: this.eruData.latitude,
					lng: this.eruData.longitude,
				},
				icon: this.eruIcon,
			}
		},
		meaMarker() {
			if (!this.meaData) return null
			return {
				id: "meaMarker",
				position: {
					lat: this.meaData.latitude,
					lng: this.meaData.longitude,
				},
				icon: this.meaIcon,
			}
		},
		vehicleMarkers() {
			if (!(this.macMarker && this.eruMarker && this.meaMarker))
				return null
			return [this.macMarker, this.eruMarker, this.meaMarker]
		},
	},
	methods: {},
}
</script>

<style>
.gmap {
	width: 100vw;
	height: 92vh;
}
</style>
