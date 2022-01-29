<template>
	<b-container class="container">
		<b-card>
			<!-- top row -->
			<b-row>
				<b-col>
					<VehicleStatusTitle
						:vehicleName="vehicleName"
						:vehicleImgPath="vehicleImgPath"
					/>
				</b-col>
			</b-row>

			<!-- middle row -->
			<b-row>
				<!-- middle left -->
				<b-col cols="6">
					<ConnectionStatus :status="status" :latency="latency" />
				</b-col>
				<!-- middle right -->
				<b-col cols="6">
					<b-row
						><b-col><Mode :mode="mode" /></b-col>
						<b-col>
							<Battery :batteryPct="batteryPct" />
						</b-col>
					</b-row>
				</b-col>
			</b-row>

			<!-- bottom row -->
			<b-row>
				<!-- bottom left -->
				<b-col cols="6">
					<StageSelection :vehicleName="vehicleName" />
				</b-col>
				<!-- bottom right -->
				<b-col>
					<EmergencyStop />
				</b-col>
			</b-row>
		</b-card>
	</b-container>
</template>

<script>
import axios from "axios";
import VehicleStatusTitle from "@/components/MainPage/Status/VehicleStatusTitle.vue";
import ConnectionStatus from "@/components/MainPage/Status/ConnectionStatus.vue";
import EmergencyStop from "@/components/MainPage/Status/EmergencyStop.vue";
import Battery from "@/components/MainPage/Status/Battery.vue";
import Mode from "@/components/MainPage/Status/Mode.vue";
import StageSelection from "@/components/MainPage/Status/StageSelection.vue";

export default {
	props: {
		vehicleName: String,
		vehicleImgPath: String,
		vehicleData: Object,
	},
	components: {
		VehicleStatusTitle,
		ConnectionStatus,
		EmergencyStop,
		Battery,
		Mode,
		StageSelection,
	},
	computed: {
		batteryPct() {
			if (!this.vehicleData) return 0;
			return this.vehicleData["battery"];
		},
		latency() {
			if (!this.vehicleData) return 0;
			return this.vehicleData["last_packet_time"];
		},
		mode() {
			if (!this.vehicleData) return "None";
			return this.vehicleData["mode"];
		},
	},
	data() {
		return {
			status: "Online",
		};
	},
};
</script>

<style scoped>
.container {
	margin-bottom: 10px;
}
img {
	display: block;
	width: 20;
	height: 20;
}
</style>