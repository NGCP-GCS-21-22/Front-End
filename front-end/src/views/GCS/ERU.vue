<template>
	<b-container class="eru-container">
		<b-row class="eru-row">
			<!-- left column -->
			<b-col class="left-column" cols="7">
				<Map
					v-if="eruData && eruIcon"
					:vehicleData="eruData"
					:vehicleIcon="eruIcon"
					:widgetData="widgetData"
					:widgetTypeSelected="widgetTypeSelected"
					@moveMarker="setWidgetData"
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
						:widgetData="widgetData"
						@widgetTypeSelected="setWidgetSelected"
						@moveCoordinates="setWidgetData"
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
			widgetData: null,
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
		this.widgetData = getWidgetData(this.vehicleName);

		this.interval = setInterval(this.getCurrentStatus, 500);
	},	
	methods: {
		getCurrentStatus() {
			this.generalStage = getGeneralStage();
			this.eruData = getVehicleData();
		},
		setWidgetData(widgetType, position) {
			this.$set(this.widgetData, widgetType, position);
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