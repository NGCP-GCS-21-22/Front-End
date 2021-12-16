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
        v-for="position in vehiclePositions"
		:key="position.id"
        :position="position.position"
        :icon="{
          url: 'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
          scaledSize: { width: 32, height: 40 },
          labelOrigin: { x: 16, y: 40 },
        }"
      />
	</GmapMap>
</template>

<script>
export default {
	props: {
		macData: Object,
		eruData: Object,
		meaData: Object,
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
			},
			mapType: "satellite",
		};
	},
	computed: {
		macPosition() {
			if (!this.macData) return null;
			return {
				id: "macPosition",
				position: {
					lat: this.macData.latitude,
					lng: this.macData.longitude,
				},
			};
		},
		eruPosition() {
			if (!this.eruData) return null;
			return {
				id: "eruPosition",
				position: {
					lat: this.eruData.latitude,
					lng: this.eruData.longitude,
				},
			};
		},
		meaPosition() {
			if (!this.meaData) return null;
			return {
				id: "meaPosition",
				position: {
					lat: this.meaData.latitude,
					lng: this.meaData.longitude,
				},
			};
		},
		vehiclePositions() {
			if (!(this.macPosition && this.eruPosition && this.meaPosition)) return null;
			return [this.macPosition, this.eruPosition, this.meaPosition];
		},
	},
	methods: {},
};
</script>

<style>
.gmap {
	width: 100vw;
	height: 92vh;
}
</style>
