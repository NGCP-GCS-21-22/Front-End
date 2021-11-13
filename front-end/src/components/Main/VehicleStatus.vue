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

				<!-- row -->
				<b-row>
					<b-col>
						<ConnectionStatus :latency="latency" />
						<StageSelection :vehicleName="vehicleName" />
						<!-- <StageSelection :vehicleName="vehicleName" :options="options"/> -->
					</b-col>
					<b-col>
						<!-- right -->
						<b-row>
							<b-col cols="6">
								<Mode :mode="mode" />
							</b-col>
							<b-col cols="6">
								<Battery
									:batteryPercentage="batteryPercentage"
								/>
							</b-col>
						</b-row>
						<b-row class="justify-content-md-center">
							<EmergencyStop />
						</b-row>
					</b-col>
				</b-row>
			</b-card>
		</b-container>
	</div>
</template>

<script>
import axios from "axios";
import VehicleStatusTitle from "@/components/Main/VehicleStatusTitle.vue";
import ConnectionStatus from "@/components/Main/ConnectionStatus.vue";
import EmergencyStop from "@/components/Main/EmergencyStop.vue";
import Battery from "@/components/Main/Battery.vue";
import Mode from "@/components/Main/Mode.vue";
import StageSelection from "@/components/Main/StageSelection.vue";

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
			batteryPercentage: 97,
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

.stage_selection {
	width: 230px;
	height: 50px;
}
</style>