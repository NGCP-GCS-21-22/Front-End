<template>
	<div>
		<GmapMarker
			:position="{ lat: 33.93441, lng: -117.6318169 }"
			:icon="{
				url: 'https://i.imgur.com/fjnfxWN.png',
				anchor: { x: 11, y: 26 },
			}"
			:clickable="true"
			@mouseover="hover = true"
			@mouseout="hover = false"
			:zIndex="500"
		>
			<GmapInfoWindow v-if="hover" :opened="true">
				<div>
					<strong>Latitude:</strong>
					33.93441
					<br />
					<strong>Longitude:</strong>
					-117.6318169
				</div>
			</GmapInfoWindow>
		</GmapMarker>
	</div>
</template>

<script>
import { getHikerPosition } from "@/helpers/getData.js";

export default {
	props: {
		vehicleData: Object,
	},
	computed: {
		// hikerCoordinates() {
		// 	return {
		// 		id: "hiker",
		// 		position: {
		// 			lat: parseFloat(this.hikerPosition.hiker_lat),
		// 			lng: parseFloat(this.hikerPosition.hiker_lng),
		// 		},
		// 	}
		// }
	},
	data() {
		return {
			hikerPosition: false,
			hover: false,
		};
	},
	mounted() {
		this.interval = setInterval(this.updateHikerLocation, 500);
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
