<template>
	<b-container class="mea-container">
		<b-row class="mea-row">
			<!-- left column -->
			<b-col class="left-column" cols="7">
				<Map
					v-if="meaData && meaIcon"
					:vehicleData="meaData"
					:vehicleIcon="meaIcon"
					:widgetData="widgetData"
					:widgetTypeSelected="widgetTypeSelected"
					@moveMarker="setWidgetData"
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
			vehicleName: "MEA",
			generalStage: null,
			meaData: null,
			meaMissionData: null,
			widgetData: null,
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
		this.widgetData = getWidgetData(this.vehicleName);

		this.interval = setInterval(this.getCurrentStatus, 500);
	},
	methods: {
		getCurrentStatus() {
			this.generalStage = getGeneralStage();
			this.meaData = getVehicleData();
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
.mea-container {
	max-width: 100%;
	max-height: 100%;
}
</style>
