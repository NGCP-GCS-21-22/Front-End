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
			:icon=" {
				
				url: 'https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/ERU.png'
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
			:zIndex="isSelected(homeCoordinatesMarker) ? 50 : 1"
			@drag="moveHomeCoordinates"
			
		/>

		<!-- Search Area -->
		<!-- v-if search selected v-for number of points in UI, create marker -->
		<GmapMarker
			:key="coordinate.id"
			v-if="widgetTypeSelected == 'SearchArea'"
			v-for="coordinate in searchAreaPolygon.coordiantes"
			:position="{ lat: coordinate.lat, lng: coordinate.lng }"
			:draggable="true"
			:zIndex="100"
			@drag="moveSearchAreaVertex($event, coordinate.id)"
		/>

		<!-- polygon -->
		<GmapPolygon
			:path="searchAreaPolygon.coordiantes"
			:clickable="false"
			:options="polyOptions"
		/>
	</GmapMap>
</template>

<script>
import { centerLng, centerLat, defaultLat, defaultLng } from "@/helpers/coordinates.js";

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
					position: {
						lat: defaultLat,
						lng: defaultLng,
					},
					icon: "https://github.com/NGCP-GCS-2021/front-end-21/blob/master/src/assets/map_icons/-point.png?raw=true",
					draggable: this.widgetTypeSelected === "MissionWaypoint",
				};
			return {
				id: "missionWaypoint",
				position: {
					lat: this.missionWaypoint.lat,
					lng: this.missionWaypoint.lng,
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
					position: {
						lat: defaultLat,
						lng: defaultLng,
					},
					icon: "https://github.com/NGCP-GCS-2021/front-end-21/blob/master/src/assets/map_icons/home.png?raw=true",
					draggable: this.widgetTypeSelected === "HomeCoordinates",
				};
			return {
				id: "homeCoordinates",
				position: {
					lat: this.homeCoordinates.lat,
					lng: this.homeCoordinates.lng,
				},
				icon: "https://github.com/NGCP-GCS-2021/front-end-21/blob/master/src/assets/map_icons/home.png?raw=true",
				draggable: this.widgetTypeSelected === "HomeCoordinates",
			};
		},
		searchArea() {
			if (!this.widgetData.searchArea) return null;

			return this.widgetData.searchArea.map((coordinate) => {
				return {
					lat: parseFloat(coordinate.lat),
					lng: parseFloat(coordinate.lng),
				};
			});
		},
		searchAreaPolygon() {
			if (!this.searchArea)
				return {
					id: "searchArea",
					coordiantes: this.paths,
					draggable: this.widgetTypeSelected === "SearchArea",
				};

			let coordiantes = [];
			this.searchArea.forEach((element, index) => {
				let coordinate = {
					id: index,
					lat: element.lat,
					lng: element.lng,
				};
				coordiantes.push(coordinate);
			});
			return {
				id: "searchArea",
				coordiantes: coordiantes,
				draggable: this.widgetTypeSelected === "SearchArea",
			};
		},
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

			// Polygon Data
			// paths: [
			// 	{ id: 1, lat: 33.933729, lng: -117.6318437 }, // marker1
			// 	{ id: 2, lat: 33.93441, lng: -117.6318169 }, // marker2
			// 	{ id: 3, lat: 33.9344055, lng: -117.6306099 },
			// 	{ id: 4, lat: 33.9337468, lng: -117.6305616 },
			// ],
			paths: [],

			polyOptions: {
				strokeColor: "#39FF14",
				strokeOpacity: 0.8,
				strokeWeight: 3,
				fillColor: "#39FF14",
				fillOpacity: 0.3,
			},
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
				lat: this.missionWaypointMarker.position.lat,
				lng: this.missionWaypointMarker.position.lng,
			});
		},
		moveHomeCoordinates(e) {
			this.homeCoordinatesMarker.position = {
				lat: e.latLng.lat(),
				lng: e.latLng.lng(),
			};
			this.$emit("moveMarker", "homeCoordinates", {
				lat: this.homeCoordinatesMarker.position.lat,
				lng: this.homeCoordinatesMarker.position.lng,
			});
		},
		moveSearchAreaVertex(e, index) {
			this.searchAreaPolygon.coordiantes[index].lat = e.latLng.lat();
			this.searchAreaPolygon.coordiantes[index].lng = e.latLng.lng();

			this.$emit(
				"moveMarker",
				"searchArea",
				this.searchAreaPolygon.coordiantes
			);
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
