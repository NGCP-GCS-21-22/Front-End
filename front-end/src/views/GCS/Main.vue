<template>
	<b-container class="main-container">
		<b-row class="main-row">
			<!-- left column -->
			<b-col class="left-column" cols="8" style="padding: 0">
				<Map
					:macData="macData"
					:eruData="eruData"
					:meaData="meaData"
					:macIcon="macIcon"
					:eruIcon="eruIcon"
					:meaIcon="meaIcon"
				/>
			</b-col>

			<!-- right column -->
			<b-col class="right-column" cols="4">
				<GeneralStage :generalStage="generalStage" />
				<VehicleStatus
					:vehicleName="'MAC'"
					:vehicleImgPath="macIcon"
					:vehicleData="macData"
				/>
				<VehicleStatus
					:vehicleName="'ERU'"
					:vehicleImgPath="eruIcon"
					:vehicleData="eruData"
				/>
				<VehicleStatus
					:vehicleName="'MEA'"
					:vehicleImgPath="meaIcon"
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
import {
	getMissionData,
	getGeneralStage,
	getVehicleData,
} from "@/helpers/getData.js";
import axios from "axios";

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
			generalStage: null,
			macData: null,
			eruData: null,
			meaData: null,
			missionData: null,
		};
	},
	computed: {
		macIcon() {
			if (!this.missionData) return null;
			return this.missionData.MAC.icon;
		},
		eruIcon() {
			if (!this.missionData) return null;
			return this.missionData.ERU.icon;
		},
		meaIcon() {
			if (!this.missionData) return null;
			return this.missionData.MEA.icon;
		},
	},
	mounted() {
		this.missionData = getMissionData("all");
		this.interval = setInterval(this.getCurrentStatus, 500);
	},
	methods: {
		getCurrentStatus() {
			this.generalStage = getGeneralStage();

			getVehicleData("MAC", (data) => {
				this.macData = data;
				console.log(this.macData);
			});
			getVehicleData("ERU", (data) => {
				this.eruData = data;
			});
			getVehicleData("MEA", (data) => {
				this.meaData = data;
			});
		},
	},
	beforeDestroy() {
		clearInterval(this.interval);
	},
};
</script>

<style scoped>
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
