<template>
	<div v-if="hikerCoordinates">
		<GmapMarker :position="hikerCoordinates.position" :icon="{
			url: 'https://i.imgur.com/fjnfxWN.png',
			anchor: { x: 11, y: 26 },
		}" :clickable="true" @mouseover="hover = true" @mouseout="hover = false" :zIndex="500">
			<GmapInfoWindow v-if="hover" :opened="true">
				<div>
					<strong>Latitude:</strong>
					{{ hikerCoordinates.position.lat }}
					<br />
					<strong>Longitude:</strong>
					{{ hikerCoordinates.position.lng }}
				</div>
			</GmapInfoWindow>
		</GmapMarker>
	</div>
</template>

<script>
import { getHikerPosition } from "@/helpers/getData";

export default {
	computed: {
		hikerCoordinates() {
			if (!this.hikerPosition) return null;
			return {
				id: "hiker",
				position: {
					lat: parseFloat(this.hikerPosition.lat),
					lng: parseFloat(this.hikerPosition.lng),
				},
			};
		},
	},
	data() {
		return {
			hikerPosition: null,
			hover: false,
		};
	},
	mounted() {
		this.interval = setInterval(this.updateHikerLocation, 1000);
	},
	methods: {
		async updateHikerLocation() {
			try {
				const response = await getHikerPosition();
				this.hikerPosition = response;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style scoped>

</style>
