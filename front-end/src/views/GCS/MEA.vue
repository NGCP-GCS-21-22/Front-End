<template>
	<b-container class="mea-container">
		<b-row class="mea-row">
			<!-- left column -->
			<b-col class="left-column" cols="7">
				<Map
					v-if="meaData && meaIcon"
					:vehicleData="meaData"
					:vehicleIcon="meaIcon"
				/>
			</b-col>

			<!-- right column -->
			<b-col cols="5">
				<b-row>
					<Status v-if="vehicleName && meaIcon" :vehicleName="vehicleName" :vehicleIcon="meaIcon" />
				</b-row>
				<b-row>
					<Widgets
						v-if="vehicleName && meaMissionData"
						:vehicleName="vehicleName"
						:vehicleMissionData="meaMissionData"
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
			vehicleName: "MEA",
			generalStage: "ERU: Ready for Takeoff",
			meaData: null,
			meaMissionData: null,
		};
	},
	computed: {
		meaIcon() {
			if (!this.meaMissionData) return null;
			return this.meaMissionData.icon;
		},
	},
	mounted() {
		this.getMissionData();
		this.interval = setInterval(this.getVehicleData, 500);
	},
	methods: {
		getMissionData() {
			// GET request

			let missionData = {
				MAC: {
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
					missionWaypoint: "ERU Drop Location",
					searchArea: true,
					manualControl: false,
				},
				ERU: {
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
			this.meaMissionData = missionData.MEA;
		},
		getVehicleData() {
			// GET request at x endpoint

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
.mea-container {
	max-width: 100%;
	max-height: 100%;
}
</style>