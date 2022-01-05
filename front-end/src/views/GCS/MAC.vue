<template>
	<b-container class="mac-container">
		<b-row class="mac-row">
			<!-- left column -->
			<b-col class="left-column" cols="7">
				<Map
					v-if="macData && macIcon"
					:vehicleData="macData"
					:vehicleIcon="macIcon"
					:widgetData="widgetData"
					:widgetTypeSelected="widgetTypeSelected"
					@moveMarker="setWidgetData"
				/>
			</b-col>

			<!-- right column -->
			<b-col cols="5">
				<b-row>
					<Status
						v-if="vehicleName && macIcon"
						:vehicleName="vehicleName"
						:vehicleIcon="macIcon"
					/>
				</b-row>
				<b-row>
					<Widgets
						v-if="vehicleName && macMissionData"
						:vehicleName="vehicleName"
						:vehicleMissionData="macMissionData"
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
			vehicleName: "MAC",
			generalStage: null,
			macData: null,
			macMissionData: null,
			widgetData: null,
			widgetTypeSelected: null,
		};
	},
	computed: {
		macIcon() {
			if (!this.macMissionData) return null;
			return this.macMissionData.icon;
		},
	},
	mounted() {
		this.macMissionData = getMissionData(this.vehicleName);
		this.widgetData = getWidgetData(this.vehicleName);

		this.interval = setInterval(this.getCurrentStatus, 500);
	},
	methods: {
		getCurrentStatus() {
			this.generalStage = getGeneralStage();
			this.macData = getVehicleData();
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
.mac-container {
	max-width: 100%;
	max-height: 100%;
}
</style>
