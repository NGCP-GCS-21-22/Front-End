<template>
	<b-container class="eru-container">
		<b-row class="eru-row">
			<!-- left column -->
			<b-col class="left-column" cols="7">
				<Map
					v-if="eruData && eruIcon"
					:vehicleData="eruData"
					:vehicleIcon="eruIcon"
				/>
			</b-col>

			<!-- right column -->
			<b-col cols="5">
				<b-row>
					<Status v-if="vehicleName && eruIcon" :vehicleName="vehicleName" :vehicleIcon="eruIcon" />
				</b-row>
				<b-row>
					<Widgets
						v-if="vehicleName && eruMissionData"
						:vehicleName="vehicleName"
						:vehicleMissionData="eruMissionData"
					/>
				</b-row>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Status from "@/components/VehiclePage/Status.vue";
import Widgets from "@/components/VehiclePage/Widgets.vue";
import Map from "@/components/Map/VehicleMap.vue";

export default {
	components: {
		Status,
		Widgets,
		Map,
	},
	data() {
		return {
			vehicleName: "ERU",
			generalStage: null,
			eruData: null,
			eruMissionData: null,
		};
	},
	computed: {
		eruIcon() {
			if (!this.eruMissionData) return null;
			return this.eruMissionData.icon;
		},
	},
	mounted() {
		this.getMissionData();
		this.interval = setInterval(this.getCurrentStatus, 500);
	},
	methods: {
		getMissionData() {
			// GET request

			let missionData = {
				MAC: {
					icon: "https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/mac.png",
					stages: [
						{
							stage: "Ready to Start",
							id: 1,
						},
						{
							stage: "ERU Landing Sequence",
							id: 5,
						},
						{
							stage: "Drive to Hiker",
							id: 6,
						},
						{
							stage: "Load the Hiker",
							id: 7,
						},
						{
							stage: "Go to EZ",
							id: 8,
						},
						{
							stage: "Transferring Hiker",
							id: 9,
						},
						{
							stage: "Return to Home/Travel to Position",
							id: 10,
						},
					],
					missionWaypoint: "ERU Drop Location",
					searchArea: true,
					manualControl: false,
				},
				ERU: {
					icon: "https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/eru.png",
					stages: [
						{
							stage: "Ready to Start",
							id: 1,
						},
						{
							stage: "ERU Landing Sequence",
							id: 5,
						},
						{
							stage: "Drive to Hiker",
							id: 6,
						},
						{
							stage: "Load the Hiker",
							id: 7,
						},
						{
							stage: "Go to EZ",
							id: 8,
						},
						{
							stage: "Transferring Hiker",
							id: 9,
						},
						{
							stage: "Return to Home/Travel to Position",
							id: 10,
						},
					],
					missionWaypoint: "Evacuation Zone",
					searchArea: false,
					manualControl: true,
				},
				MEA: {
					icon: "https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/mea.png",
					stages: [
						{
							stage: "Ready to Start",
							id: 1,
						},
						{
							stage: "ERU Landing Sequence",
							id: 5,
						},
						{
							stage: "Drive to Hiker",
							id: 6,
						},
						{
							stage: "Load the Hiker",
							id: 7,
						},
						{
							stage: "Go to EZ",
							id: 8,
						},
						{
							stage: "Transferring Hiker",
							id: 9,
						},
						{
							stage: "Return to Home/Travel to Position",
							id: 10,
						},
					],
					missionWaypoint: "Evacuation Zone",
					searchArea: false,
					manualControl: false,
				},
			};
			this.eruMissionData = missionData.ERU;
		},
		getCurrentStatus() {
			this.getGeneralStage();
			this.getVehicleData();
		},
		getGeneralStage() {
			// GET request at x endpoint

			this.generalStage = "ERU: Ready for Takeoff";
		},
		getVehicleData() {
			// GET request at x endpoint

			this.eruData = {
				latitude: 33.93364332758927,
				longitude: -117.6314209323399,
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
	max-height: 90vh;
	margin: auto;
}
.eru-container {
	max-width: 100%;
	max-height: 100%;
}
</style>