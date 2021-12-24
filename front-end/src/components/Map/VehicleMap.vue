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
			:position="vehicleMarker.position"
			:icon="{
				url: vehicleMarker.icon,
			}"
		/>

		<!-- mission waypoint -->
		<GmapMarker
			:position="missionWaypointMarker.position"
			:icon="{ url: missionWaypointMarker.icon }"
		/>
	</GmapMap>
</template>

<script>
export default {
	props: {
		vehicleData: Object,
		vehicleIcon: String,
		missionWaypointData: Object,
	},
	mounted() {
		console.log(this.missionWaypointData)
	},
	data() {
		return {
			// Map Data
			center: { lat: 33.93364332758927, lng: -117.6295006970484 },
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
		vehicleMarker() {
			if (!this.vehicleData) return null
			return {
				id: "vehicleMarker",
				position: {
					lat: this.vehicleData.latitude,
					lng: this.vehicleData.longitude,
				},
				icon: this.vehicleIcon,
			}
		},
		missionWaypointMarker() {
			if (!this.missionWaypointData) return null
			return {
				id: "missionWaypointMarker",
				position: {
					lat: this.missionWaypointData.latitude,
					lng: this.missionWaypointData.longitude,
				},
				icon: "https://github.com/NGCP-GCS-2021/front-end-21/blob/master/src/assets/map_icons/evac-point.png?raw=true",
			}
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
