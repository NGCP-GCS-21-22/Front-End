<template>
	<GmapMarker
		:position="missionWaypointMarker.position"
		:draggable="isSelected(missionWaypointMarker)"
		:clickable="isSelected(missionWaypointMarker)"
		:icon="missionWaypointMarker.icon"
		@drag="moveMissionWaypoint"
		:zIndex="isSelected(missionWaypointMarker) ? 1000 : 1"
	/>
</template>

<script>
import {
	defaultLat,
	defaultLng,
} from "@/helpers/coordinates.js";

export default {
	props: {
		widgetData: Object,
        widgetTypeSelected: String,
	},
	computed: {
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
					icon: {
						url: "https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/map_icons/mission-waypoint.png?raw=true",
						anchor: { x: 33, y: 45 },
					},
					draggable: this.widgetTypeSelected === "MissionWaypoint",
				};
			return {
				id: "missionWaypoint",
				position: {
					lat: parseFloat(this.missionWaypoint.lat),
					lng: parseFloat(this.missionWaypoint.lng),
				},
				icon: {
					url: "https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/map_icons/mission-waypoint.png?raw=true",
					anchor: { x: 33, y: 45 },
				},
				draggable: this.widgetTypeSelected === "MissionWaypoint",
			};
		},
	},
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
    }
};
</script>

<style>
</style>