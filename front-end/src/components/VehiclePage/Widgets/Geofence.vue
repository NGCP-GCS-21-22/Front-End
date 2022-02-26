<template>
	<b-container>
		<b-button class="back-button" @click="goBack">Back</b-button>
		<h2>{{ name }}</h2>
		<b-row>
			<Workspace
				ref="Workspace"
				:geofenceWorkspace="geofenceWorkspace"
				@addGeofencePolygon="addGeofencePolygon"
				@updateWidgetData="updateWidgetData"
			/>
		</b-row>
		<b-row>
			<b-col>
				<Cart :polygons="keepInPolygons" :keepIn="true" @deletePolygon="deletePolygon" @editPolygon="editPolygon"/>
			</b-col>
			<b-col>
				<Cart :polygons="keepOutPolygons" :keepIn="false" @deletePolygon="deletePolygon" @editPolygon="editPolygon"/>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import axios from "axios";
import Workspace from "@/components/VehiclePage/Widgets/Geofence/Workspace.vue";
import Cart from "@/components/VehiclePage/Widgets/Geofence/Cart.vue";

export default {
	props: {
		name: String,
		geofence: Array,
		geofenceWorkspace: Object,
	},
	components: {
		Workspace,
		Cart,
	},
	data() {
		return {
			initialSearchArea: this.searchArea,
		};
	},
	computed: {
		keepInPolygons() {
			if (!this.geofence) return null;
			let polygons = [];
			for (let i = 0; i < this.geofence.length; i++) {
				let current = {
					coordinates: this.geofence[i],
					index: i,
				};
				if (current.coordinates["keep_in"] == true) {
					polygons.push(current);
				}
			}
			return polygons;
		},
		keepOutPolygons() {
			if (!this.geofence) return null;
			let polygons = [];
			for (let i = 0; i < this.geofence.length; i++) {
				let current = {
					coordinates: this.geofence[i],
					index: i,
				};
				if (current.coordinates["keep_in"] == false) {
					polygons.push(current);
				}
			}
			return polygons;
		},
	},
	methods: {
		goBack() {
			this.$refs.Workspace.resetCoordinates();
			this.$emit("goBack");
		},
		addGeofencePolygon(geofencePolygon, index) {
			let newGeofence = this.geofence;
			if (index == null) {
				newGeofence.push(geofencePolygon);
			} else {
				newGeofence.splice(index, 0, geofencePolygon);
			}
			this.$emit("updateWidgetData", "geofence", newGeofence);
		},
		updateWidgetData(widgetType, value) {
			this.$emit("updateWidgetData", widgetType, value);
		},
		deletePolygon(index) {
			let newGeofence = this.geofence; 		// create a copy of the current geofence
			newGeofence.splice(index, 1) 			// modify it/ removing
			this.$emit("updateWidgetData", "geofence", newGeofence); // pass it up with updateWidgetData
		},
		editPolygon(index, keep_in) {
			this.$emit("updateWidgetData", "geofenceWorkspace", this.geofence[index]);
			this.$refs.Workspace.keep_in = keep_in;
			this.$refs.Workspace.polygonIndex = index;
			this.deletePolygon(index)
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
</style>
