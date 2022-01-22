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
import Map from "@/components/Maps/MainMap.vue";
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
		this.initializeMissionData();
		this.interval = setInterval(this.updateStatus, 500);
	},
	methods: {
		updateStatus() {
			this.updateGeneralStage();
			this.updateMACData();
			this.updateERUData();
			this.updateMEAData();
		},
		async initializeMissionData() {
			try {
				const response = await getMissionData("all");
				this.missionData = response;
			} catch (error) {
				console.log(error);
			}
		},
		async updateGeneralStage() {
			try {
				const response = await getGeneralStage();
				this.generalStage = response;
			} catch (error) {
				console.log(error);
			}
		},
		async updateMACData() {
			try {
				const response = await getVehicleData("MAC");
				this.macData = response;
			} catch (error) {
				console.log(error);
			}
		},
		async updateERUData() {
			try {
				const response = await getVehicleData("ERU");
				this.eruData = response;
			} catch (error) {
				console.log(error);
			}
		},
		async updateMEAData() {
			try {
				const response = await getVehicleData("MEA");
				this.meaData = response;
			} catch (error) {
				console.log(error);
			}
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
