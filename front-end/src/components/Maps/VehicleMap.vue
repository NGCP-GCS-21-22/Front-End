<template>
	<div>
		<GmapMap
			class="gmap"
			:center="center"
			:zoom="zoom"
			:map-type-id="mapType"
			:tilt="tilt"
			:options="options"
		>
			<VehiclePositionMarker
				:vehicleData="vehicleData"
				:vehicleIcon="vehicleIcon"
			/>

			<MissionWaypointMarker
				:widgetData="widgetData"
				:widgetTypeSelected="widgetTypeSelected"
				@moveMarker="moveMarker"
			/>

			<HomeCoordinatesMarker
				:widgetData="widgetData"
				:widgetTypeSelected="widgetTypeSelected"
				@moveMarker="moveMarker"
			/>

			<!-- Search Area -->
			<!-- v-if search selected v-for number of points in UI, create marker -->
			<div v-if="widgetTypeSelected == 'SearchArea'">
				<GmapMarker
					:key="coordinate.id"
					v-for="(coordinate, index) in searchAreaPolygon.coordinates"
					:position="{ lat: coordinate.lat, lng: coordinate.lng }"
					:draggable="true"
					:zIndex="1000"
					:label="{
						color: '#000',
						fontSize: '12px',
						fontWeight: '600',
						text: `${index + 1}`,
					}"
					@drag="moveSearchAreaVertex($event, coordinate.id)"
				/>
			</div>

			<!-- polygon -->
			<GmapPolygon
				:path="searchAreaPolygon.coordinates"
				:clickable="false"
				:options="searchAreaOptions"
			/>
			<!-- Geofence -->
			<!-- Workspace -->
			<div v-if="widgetTypeSelected == 'Geofence'">
				<GmapMarker
					:key="coordinate.id"
					v-for="(
						coordinate, index
					) in geofenceWorkspacePolygon.coordinates"
					:position="{ lat: coordinate.lat, lng: coordinate.lng }"
					:draggable="true"
					:zIndex="1000"
					:label="{
						color: '#fff',
						fontSize: '12px',
						fontWeight: '600',
						text: `${index + 1}`,
					}"
					@drag="moveGeofenceWorkspaceVertex($event, coordinate.id)"
				/>
				<GmapPolygon
					:path="geofenceWorkspacePolygon.coordinates"
					:clickable="false"
					:options="getWorkspacePolyOption()"
				/>
			</div>
			<!-- Polygons -->
			<div
				v-for="(polygon, index) in geofencePolygons.polygons"
				:key="polygon.id"
			>
				<GmapPolygon
					:path="polygon.coordinates"
					:clickable="false"
					:options="polygon.keep_in ? keepInOptions : keepOutOptions"
				/>
				<GmapMarker
					:position="getCenter(polygon.coordinates)"
					:clickable="false"
					:label="{
						color: '#fff',
						fontSize: '20px',
						fontWeight: '600',
						text: `${index + 1}`,
					}"
					:icon="{
						url: 'https://i.imgur.com/w2akEKc.png',
					}"
				/>
			</div>

			<!-- hiker pos -->
			<GmapMarker
				:position="{ lat: 33.93441, lng: -117.6318169 }"
				:clickable="false"
				:icon="{
					url: 'https://i.imgur.com/fjnfxWN.png',
				}"
			/>
			<!-- <GmapMarker
				:position="{ lat: vehicleData.hiker_lat, lng: vehicleData.hiker_lng }"
				:clickable="false"
				:icon="{
					url: 'https://i.imgur.com/UivDwEm.png',
				}"
			/> -->
		</GmapMap>
	</div>
</template>

<script>
import {
	centerLng,
	centerLat,
	defaultLat,
	defaultLng,
} from "@/helpers/coordinates.js";
import VehiclePositionMarker from "@/components/Maps/VehicleMap/VehiclePositionMarker.vue";
import MissionWaypointMarker from "@/components/Maps/VehicleMap/MissionWaypointMarker.vue";
import HomeCoordinatesMarker from "@/components/Maps/VehicleMap/HomeCoordinatesMarker.vue";

export default {
	props: {
		vehicleData: Object,
		vehicleIcon: Object,
		widgetData: Object,
		widgetTypeSelected: String,
	},
	components: {
		VehiclePositionMarker,
		MissionWaypointMarker,
		HomeCoordinatesMarker,
	},
	computed: {
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
					icon: {
						url: "https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/map_icons/home.png?raw=true",
						anchor: { x: 33, y: 45 },
					},
					draggable: this.widgetTypeSelected === "HomeCoordinates",
				};
			return {
				id: "homeCoordinates",
				position: {
					lat: parseFloat(this.homeCoordinates.lat),
					lng: parseFloat(this.homeCoordinates.lng),
				},
				icon: {
					url: "https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/map_icons/home.png?raw=true",
					anchor: { x: 33, y: 45 },
				},
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
					coordinates: this.paths,
					draggable: this.widgetTypeSelected === "SearchArea",
				};

			let coordinates = [];
			this.searchArea.forEach((element, index) => {
				let coordinate = {
					id: index,
					lat: element.lat,
					lng: element.lng,
				};
				coordinates.push(coordinate);
			});
			return {
				id: "searchArea",
				coordinates: coordinates,
				draggable: this.widgetTypeSelected === "SearchArea",
			};
		},
		geofenceWorkspace() {
			if (!this.widgetData.geofenceWorkspace) return null;
			let coordinates = this.widgetData.geofenceWorkspace.coordinates.map(
				(element) => {
					return {
						lat: parseFloat(element.lat),
						lng: parseFloat(element.lng),
					};
				}
			);
			return {
				coordinates: coordinates,
				keepIn: this.widgetData.geofenceWorkspace.keep_in,
			};
		},
		geofenceWorkspacePolygon() {
			if (!this.widgetData.geofenceWorkspace)
				return {
					id: "geofenceWorkspace",
					coordinates: this.paths,
					draggable: this.widgetTypeSelected === "Geofence",
				};
			let coordinates = this.geofenceWorkspace.coordinates.map(
				(element, index) => {
					return {
						id: index,
						lat: element.lat,
						lng: element.lng,
					};
				}
			);
			return {
				id: "geofenceWorkspace",
				coordinates: coordinates,
				draggable: this.widgetTypeSelected === "Geofence",
				keepIn: this.geofenceWorkspace.keepIn,
			};
		},
		geofence() {
			if (!this.widgetData.geofence) return null;
			let polygons = [];
			for (let i = 0; i < this.widgetData.geofence.length; i++) {
				let coordinates = this.widgetData.geofence[i].coordinates.map(
					(element) => {
						return {
							lat: parseFloat(element.lat),
							lng: parseFloat(element.lng),
						};
					}
				);
				let polygon = {
					coordinates: coordinates,
					keep_in: this.widgetData.geofence[i].keep_in,
				};
				polygons.push(polygon);
			}
			return polygons;
		},
		geofencePolygons() {
			if (!this.widgetData.geofence)
				return {
					id: "geofence",
					polygons: [
						{
							coordinates: this.paths,
							keep_in: null,
						},
					],
				};
			let polygons = this.geofence.map((element, index) => {
				return {
					coordinates: element.coordinates,
					keep_in: element.keep_in,
					id: index,
				};
			});
			return {
				id: "geofence",
				polygons: polygons,
			};
		},
		// hikerCoordinates() {
		// 	return {
		// 		id: "hiker",
		// 		position: {
		// 			lat: parseFloat(this.vehicleData.hiker_lat),
		// 			lng: parseFloat(this.vehicleData.hiker_lng),,
		// 		},
		// 	}
		// }
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
			searchAreaOptions: {
				strokeColor: "#953553",
				strokeOpacity: 0.8,
				strokeWeight: 3,
				fillColor: "#953553",
				fillOpacity: 0.3,
			},
			keepInOptions: {
				strokeColor: "#39FF14",
				strokeOpacity: 0.8,
				strokeWeight: 3,
				fillColor: "#39FF14",
				fillOpacity: 0.3,
			},
			keepOutOptions: {
				strokeColor: "#cc0000",
				strokeOpacity: 0.8,
				strokeWeight: 3,
				fillColor: "#cc0000",
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
		moveMarker(widgetType, value) {
			this.$emit("moveMarker", widgetType, value);
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
			this.searchAreaPolygon.coordinates[index].lat = e.latLng.lat();
			this.searchAreaPolygon.coordinates[index].lng = e.latLng.lng();
			this.$emit(
				"moveMarker",
				"searchArea",
				this.searchAreaPolygon.coordinates
			);
		},
		getWorkspacePolyOption() {
			if (this.geofenceWorkspace.keep_in == null) return null;
			if (this.geofenceWorkspace.keep_in == true) return keepInOptions;
			if (this.geofenceWorkspace.keep_in == false) return keepOutOptions;
		},
		moveGeofenceWorkspaceVertex(e, index) {
			this.geofenceWorkspacePolygon.coordinates[index].lat =
				e.latLng.lat();
			this.geofenceWorkspacePolygon.coordinates[index].lng =
				e.latLng.lng();
			this.$emit("moveMarker", "geofenceWorkspace", {
				coordinates: this.geofenceWorkspacePolygon.coordinates,
				keep_in: this.geofenceWorkspacePolygon.keepIn,
			});
		},
		getCenter(coordinates) {
			let centerLat = 0;
			let centerLng = 0;
			for (let i = 0; i < coordinates.length; i++) {
				let coordinate = coordinates[i];
				centerLat += parseFloat(coordinate.lat);
				centerLng += parseFloat(coordinate.lng);
			}
			centerLat = centerLat / coordinates.length;
			centerLng = centerLng / coordinates.length;
			return {
				lat: parseFloat(centerLat),
				lng: parseFloat(centerLng),
			};
		},
	},
};
</script>

<style>
.gmap {
	width: 100vw;
	height: 92vh;
}
.coorStyle {
	height: 7vh;
	margin-left: 2px;
}
.coord-container {
	margin-bottom: 10px;
	margin-left: 2px;
}

.c {
	background-color: white;
	color: rgb(160, 160, 160);
	position: absolute;
	bottom: 0px;
	right: 25%;
	left: 50%;
	margin-left: -150px;
}
button.gm-ui-hover-effect {
	visibility: hidden;
}
.gm-style-iw.gm-style-iw-c {
	font-size: 25px;
	font-weight: 400;
}
</style>
