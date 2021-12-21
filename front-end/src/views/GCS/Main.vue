<template>
	<b-container class="main-container">
		<b-row class="main-row">
			<!-- left column -->
			<b-col class="left-column" cols="8">
				<b-img
					class="map-image"
					rounded
					:src="require('@/assets/map.png')"
					alt="map pic"
				></b-img>
			</b-col>

			<!-- right column -->
			<b-col class="right-column" cols="4">
				<GeneralStage :generalStage="generalStage" />
				<VehicleStatus :vehicleName="'MAC'" :vehicleImgPath="macPath" />
				<VehicleStatus :vehicleName="'ERU'" :vehicleImgPath="eruPath" />
				<VehicleStatus :vehicleName="'MEA'" :vehicleImgPath="meaPath" />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
// @ is the same as src
import VehicleStatus from "@/components/MainPage/VehicleStatus.vue";
import GeneralStage from "@/components/MainPage/GeneralStage.vue";

export default {
	props: {
		stage: String,
	},
	data() {
		return {
			generalStage: "ERU: Ready for Takeoff",
			macPath:
				"https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/mac.png",
			eruPath:
				"https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/eru.png",
			meaPath:
				"https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/mea.png",
		};
	},
	components: {
		VehicleStatus,
		GeneralStage,
	},
};
</script>

<style scoped>
.map-image {
	max-height: 92vh;
	margin: auto;
}
.main-container {
	max-width: 100%;
	max-height: 100%;
	/* background-color: orange; */
}
.main-row {
	/* max-width: 100%;
  max-height: 100%; */
	/* background-color: aqua; */
}
.left-column {
	/* background-color: red; */
}
.right-column {
	/* background-color: purple; */
}
</style>
