<template>
	<b-container class="mea-container">
		<b-row class="mea-row">
			<!-- left column -->
			<b-col class="left-column" cols="7">
				<Map
					v-if="meaData && meaIcon"
					:vehicleData="meaData"
					:vehicleIcon="meaIcon"
					:missionWaypointData="missionWaypointData"
					:widgetTypeSelected="widgetTypeSelected"
					@moveWaypointMarker="setMissionWaypointData"
				/>
			</b-col>

			<!-- right column -->
			<b-col cols="5">
				<b-row>
					<Status
						v-if="vehicleName && meaIcon"
						:vehicleName="vehicleName"
						:vehicleIcon="meaIcon"
					/>
				</b-row>
				<b-row>
					<Widgets
						v-if="vehicleName && meaMissionData"
						:vehicleName="vehicleName"
						:vehicleMissionData="meaMissionData"
						:missionWaypointData="missionWaypointData"
						@widgetTypeSelected="setWidgetSelected"
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
import {
	getMissionData,
	getGeneralStage,
	getVehicleData,
	getWidgetData,
} from "@/helpers/getData.js";

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
			missionWaypointData: null,
			widgetTypeSelected: null,
		};
	},
	computed: {
		meaIcon() {
			if (!this.meaMissionData) return null;
			return this.meaMissionData.icon;
		},
	},
	mounted() {
		this.meaMissionData = getMissionData(this.vehicleName);
		this.missionWaypointData = getWidgetData();

		this.interval = setInterval(this.getCurrentStatus, 500);
	},
	methods: {
		getCurrentStatus() {
			this.generalStage = getGeneralStage();
			this.meaData = getVehicleData();
		},
		setMissionWaypointData(position) {
			this.missionWaypointData = position;
		},
		setWidgetSelected(widgetTypeSelected) {
			this.widgetTypeSelected = widgetTypeSelected;
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
