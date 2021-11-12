<template>
	<div>
		<b-container>
			<b-card >
				<!-- top row -->
				<b-row>
					<b-col class="top-left-col" cols="7">
						<VehicleStatusTitle :vehicleName="vehicleName" />
					</b-col>
					<b-col class="top-right-col" cols="5">
						<ConnectionStatus :latency="latency" />
					</b-col>
				</b-row>

				<!-- bottom row -->
				<b-row class="justify-content-md-center">
					<b-col>
						<!-- Stage Selection Dropdown -->
					</b-col>
					<b-col>
						<!-- bottom right -->
						<b-row>
							<b-col cols="6">
								<Battery :batteryPercentage="batteryPercentage" />
							</b-col>
							<b-col cols="6">
								<Mode :mode="mode" />
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
import Mode from "@/components/Main/Mode.vue"

export default {
	props: {
		vehicleName: String,
	},
	components: {
		VehicleStatusTitle,
		ConnectionStatus,
		EmergencyStop,
		Battery,
    Mode
	},
	data() {
		return {
			latency: 2,
			batteryPercentage: 97,
			mode: "Autonomous"
		};
	},
};
</script>

<style scoped>
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