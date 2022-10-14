<template>
	<div>
		<!-- Geofence -->
		<!-- Workspace -->
		<div v-if="widgetTypeSelected == 'Geofence'">
			<GmapMarker :key="coordinate.id" v-for="(
					coordinate, index
				) in geofenceWorkspacePolygon.coordinates" :position="{ lat: coordinate.lat, lng: coordinate.lng }"
				:draggable="true" :zIndex="1000" :label="{
					color: '#fff',
					fontSize: '12px',
					fontWeight: '600',
					text: `${index + 1}`,
				}" @drag="moveGeofenceWorkspaceVertex($event, coordinate.id)" />
			<GmapPolygon :path="geofenceWorkspacePolygon.coordinates" :clickable="false"
				:options="getWorkspacePolyOption()" />
		</div>
		<!-- Polygons -->
		<div v-for="(polygon, index) in geofencePolygons.polygons" :key="polygon.id">
			<GmapPolygon :path="polygon.coordinates" :clickable="false"
				:options="polygon.keep_in ? keepInOptions : keepOutOptions" :zIndex="polygon.keep_in ? 1 : 1000" />
			<GmapMarker :position="getCenter(polygon.coordinates)" :clickable="false" :label="{
				color: '#fff',
				fontSize: '20px',
				fontWeight: '600',
				text: `${index + 1}`,
			}" :icon="{
				url: 'https://i.imgur.com/w2akEKc.png',
			}" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		widgetData: Object,
		widgetTypeSelected: String,
	},
	computed: {
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
	},
	data() {
		return {
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
				fillOpacity: 0.5,
			},
		};
	},
	methods: {
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
	}
};
</script>

<style scoped>

</style>