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
				{{ vehicleMarker.position.lat }}
				<br />
				<strong>Longitude:</strong>
				{{ vehicleMarker.position.lng }}
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
-.coorStyle {
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