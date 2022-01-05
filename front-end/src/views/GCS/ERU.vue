<template>
	<b-container class="eru-container">
		<b-row class="eru-row">
			<!-- left column -->
			<b-col class="left-column" cols="7">
				<Map
					v-if="eruData && eruIcon"
					:vehicleData="eruData"
					:vehicleIcon="eruIcon"
					:missionWaypointData="missionWaypointData"
					:widgetTypeSelected="widgetTypeSelected"
					@moveWaypointMarker="setMissionWaypointData"
				/>
			</b-col>

			<!-- right column -->
			<b-col cols="5">
				<b-row>
					<Status
						v-if="vehicleName && eruIcon"
						:vehicleName="vehicleName"
						:vehicleIcon="eruIcon"
					/>
				</b-row>
				<b-row>
					<Widgets
						v-if="vehicleName && eruMissionData"
						:vehicleName="vehicleName"
						:vehicleMissionData="eruMissionData"
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
			vehicleName: "ERU",
			generalStage: null,
			eruData: null,
			eruMissionData: null,
			missionWaypointData: null,
			widgetTypeSelected: null,
		};
	},
	computed: {
		eruIcon() {
			if (!this.eruMissionData) return null;
			return this.eruMissionData.icon;
		},
	},
	mounted() {
		this.eruMissionData = getMissionData(this.vehicleName);
		this.missionWaypointData = getWidgetData();

		this.interval = setInterval(this.getCurrentStatus, 500);
	},
	methods: {
		getCurrentStatus() {
			this.generalStage = getGeneralStage();
			this.eruData = getVehicleData();
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
.eru-container {
	max-width: 100%;
	max-height: 100%;
}
</style>