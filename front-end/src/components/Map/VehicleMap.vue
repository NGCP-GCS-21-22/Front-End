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
			:clickable="false"
			:icon="{
				url: vehicleMarker.icon,
			}"
			:zIndex="1000"
		/>

		<!-- mission waypoint -->
		<GmapMarker
			:position="missionWaypointMarker.position"
			:draggable="isSelected(missionWaypointMarker)"
			:clickable="isSelected(missionWaypointMarker)"
			:icon="{ url: missionWaypointMarker.icon }"
			@drag="moveMissionWaypoint"
			:zIndex="isSelected(missionWaypointMarker) ? 50 : 1"
		/>

		<!-- home coordinates -->
		<GmapMarker
			:position="homeCoordinatesMarker.position"
			:draggable="isSelected(homeCoordinatesMarker)"
			:clickable="isSelected(homeCoordinatesMarker)"
			:icon="{ url: homeCoordinatesMarker.icon }"
			@drag="moveHomeCoordinates"
			:zIndex="isSelected(homeCoordinatesMarker) ? 50 : 1"
		/>
	</GmapMap>
</template>

<script>
import defaultCoords from "@/helpers/defaultCoordinates.js";

export default {
	props: {
		vehicleData: Object,
		vehicleIcon: String,
		widgetData: Object,
		widgetTypeSelected: String,
	},
	computed: {
		vehicleMarker() {
			if (!this.vehicleData) return null;
			return {
				id: "vehicleMarker",
				position: {
					lat: this.vehicleData.latitude,
					lng: this.vehicleData.longitude,
				},
				icon: this.vehicleIcon,
			};
		},
		missionWaypoint() {
			if (!this.widgetData.missionWaypoint) return null;
			return this.widgetData.missionWaypoint;
		},
		missionWaypointMarker() {
			if (!this.missionWaypoint)
				return {
					id: "missionWaypoint",
					position: this.defaultCoords,
					icon: "https://github.com/NGCP-GCS-2021/front-end-21/blob/master/src/assets/map_icons/evac-point.png?raw=true",
					draggable: this.widgetTypeSelected === "MissionWaypoint",
				};
			return {
				id: "missionWaypoint",
				position: {
					lat: this.missionWaypoint.latitude,
					lng: this.missionWaypoint.longitude,
				},
				icon: "https://github.com/NGCP-GCS-2021/front-end-21/blob/master/src/assets/map_icons/evac-point.png?raw=true",
				draggable: this.widgetTypeSelected === "MissionWaypoint",
			};
		},
		homeCoordinates() {
			if (!this.widgetData.homeCoordinates) return null;
			return this.widgetData.homeCoordinates;
		},
		homeCoordinatesMarker() {
			if (!this.homeCoordinates)
				return {
					id: "homeCoordinates",
					position: this.defaultCoords,
					icon: "https://github.com/NGCP-GCS-2021/front-end-21/blob/master/src/assets/map_icons/home.png?raw=true",
					draggable: this.widgetTypeSelected === "HomeCoordinates",
				};
			return {
				id: "homeCoordinates",
				position: {
					lat: this.homeCoordinates.latitude,
					lng: this.homeCoordinates.longitude,
				},
				icon: "https://github.com/NGCP-GCS-2021/front-end-21/blob/master/src/assets/map_icons/home.png?raw=true",
				draggable: this.widgetTypeSelected === "HomeCoordinates",
			};
		},
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
		};
	},
	mounted() {},
	methods: {
		isSelected(marker) {
			if (!marker || !marker.draggable) return false;
			return true;
		},
		moveMissionWaypoint(e) {
			this.missionWaypointMarker.position = {
				lat: e.latLng.lat(),
				lng: e.latLng.lng(),
			};
			this.$emit("moveMarker", "missionWaypoint", {
				latitude: this.missionWaypointMarker.position.lat,
				longitude: this.missionWaypointMarker.position.lng,
			});
		},
		moveHomeCoordinates(e) {
			this.homeCoordinatesMarker.position = {
				lat: e.latLng.lat(),
				lng: e.latLng.lng(),
			};
			this.$emit("moveMarker", "homeCoordinates", {
				latitude: this.homeCoordinatesMarker.position.lat,
				longitude: this.homeCoordinatesMarker.position.lng,
			});
		},
	},
};
</script>

<style>
.gmap {
	width: 100vw;
	height: 92vh;
}
</style>
