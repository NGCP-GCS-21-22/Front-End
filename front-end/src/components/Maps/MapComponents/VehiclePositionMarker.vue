<template>
	<GmapMarker
		v-if="vehicleData && vehicleIcon"
		:position="vehicleMarker.position"
		:clickable="true"
		@mouseover="hover = true"
		@mouseout="hover = false"
		:icon="vehicleMarker.icon"
		:zIndex="500"
	>
		<GmapInfoWindow v-if="hover" :opened="true">
			<div>
				<strong>Latitude:</strong>
				{{ this.vehicleMaker.position.latitude }}
				<br />
				<strong>Longitude:</strong>
				{{ this.vehicleMaker.position.longitude }}
			</div>
		</GmapInfoWindow>
	</GmapMarker>
</template>

<script>
export default {
    props: {
        vehicleData: Object,
        vehicleIcon: Object,
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
				icon: {
					path: this.vehicleIcon.path,
					fillColor: this.vehicleIcon.fillColor,
					fillOpacity: 1,
					strokeWeight: 0,
					rotation: this.vehicleData.rotation,
					scale: 1,
					anchor: { x: 41.42, y: 46.713 },
				},
			};
		},
    },
	data() {
		return {
			hover: false,
		}
	}
};
</script>

<style>
</style>