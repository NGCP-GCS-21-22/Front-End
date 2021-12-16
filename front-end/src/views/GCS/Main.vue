<template>
	<b-container class="main-container">
		<b-row class="main-row">
			<!-- left column -->
			<b-col class="left-column" cols="8" style="padding: 0">
				<Map :macData="macData" :eruData="eruData" :meaData="meaData" />
			</b-col>

			<!-- right column -->
			<b-col class="right-column" cols="4">
				<GeneralStage :generalStage="generalStage" />
				<VehicleStatus
					:vehicleName="'MAC'"
					:vehicleImgPath="macPath"
					:vehicleData="macData"
				/>
				<VehicleStatus
					:vehicleName="'ERU'"
					:vehicleImgPath="eruPath"
					:vehicleData="eruData"
				/>
				<VehicleStatus
					:vehicleName="'MEA'"
					:vehicleImgPath="meaPath"
					:vehicleData="meaData"
				/>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
// @ is the same as src
import VehicleStatus from "@/components/MainPage/VehicleStatus.vue";
import GeneralStage from "@/components/MainPage/GeneralStage.vue";
import Map from "@/components/Map/MainMap.vue";

export default {
	props: {
		stage: String,
	},
	components: {
		VehicleStatus,
		GeneralStage,
		Map,
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

			macData: null,
			eruData: null,
			meaData: null,
		};
	},
	mounted() {
		this.interval = setInterval(this.getVehicleData, 500);
	},
	methods: {
		getVehicleData() {
			// GET request at x endpoint

			this.macData = {
				latitude: 33.93459532438122,
				longitude: -117.6311926970484,
			};
			this.eruData = {
				latitude: 33.93364332758927,
				longitude: -117.6314209323399,
			};
			this.meaData = {
				latitude: 33.93404089266308,
				longitude: -117.63052445140261,
			};
			console.log("Data received!");
		},
	},
	beforeDestroy() {
		clearInterval(this.interval);
	},
};
</script>

<style scoped>
.map-image {
	max-height: 92vh;
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
