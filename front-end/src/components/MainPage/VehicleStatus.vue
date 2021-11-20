<template>
	<div>
		<b-container class="container">
			<b-card>
				<!-- top row -->
				<b-row>
					<b-col class="top-left-col">
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
						<ConnectionStatus :latency="latency" />
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
	</div>
</template>

<script>
import axios from "axios";
import VehicleStatusTitle from "@/components/MainPage/VehicleStatusTitle.vue";
import ConnectionStatus from "@/components/MainPage/ConnectionStatus.vue";
import EmergencyStop from "@/components/MainPage/EmergencyStop.vue";
import Battery from "@/components/MainPage/Battery.vue";
import Mode from "@/components/MainPage/Mode.vue";
import StageSelection from "@/components/MainPage/StageSelection.vue";

export default {
	props: {
		vehicleName: String,
		vehicleImgPath: String,
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
		// options() {
		// 	// use data from "stages" to create the required
		// 	// options property for the b-form-select
		// },
	},
	data() {
		return {
			latency: 2,
			batteryPct: 97,
			mode: "Autonomous",
			sModalShow: false,
			selected: null,
			form: {
				option: null,
			},
			// stages: [
			// 	{
			// 		stage: "Ready to Start",
			// 		id: 1,
			// 	},
			// 	{
			// 		stage: "ERU Landing Sequence",
			// 		id: 5,
			// 	},
			// 	{
			// 		stage: "Drive to Hiker",
			// 		id: 6,
			// 	},
			// 	{
			// 		stage: "Load the Hiker",
			// 		id: 7,
			// 	},
			// 	{
			// 		stage: "Go to EZ",
			// 		id: 8,
			// 	},
			// 	{
			// 		stage: "Transferring Hiker",
			// 		id: 9,
			// 	},
			// 	{
			// 		stage: "Return to Home/Travel to Position",
			// 		id: 10,
			// 	},
			// ],
		};
	},
};
</script>

<style scoped>
.container {
	margin-bottom: 20px;
}
img {
	display: block;
	width: 20;
	height: 20;
}

.top-left-col {
	/* background-color: red; */
}

.top-right-col {
	/* background-color: blue; */
}
</style>