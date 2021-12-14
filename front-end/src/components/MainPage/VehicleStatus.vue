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
						<ConnectionStatus 
							:status="status"
							:latency="latency" />
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
		vehicleData: Object
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
		statusUpdate(){
			let status = null;
			this.MAC.forEach(property =>{
				if(property.title=="Status"){
					status = property.value;
				}
			})
			return status;

		},

		batteryPct(){
			// depends on MAC
			// get the battery out of it

			// Array
			// for element in this.MAC
				// if element.title == "Battery"
				// return element.value

			// let pct = 0;
			// this.MAC.forEach(property =>{
			// 	if(property.title=="Battery"){
			// 		pct = property.value;
			// 	}
			// })
			// return pct;

			// Dictionary
			// return this.MAC.Battery;
			return this.MAC.Battery;
		},
		latency() {
			return this.MAC.ConnectionStatus;
		},
		mode() {
			return this.MAC.Mode;
		}
	},
	data() {
		return {
			// these are old static numbers (delete later)
			status: "Online",
			// batteryPct: 97,
			// mode: "Autonomous",
			sModalShow: false,
			propertyChosen: null,
			selected: null,
			form: {
				option: null,
			},
			
			MAC: {
				Altitude: 56,
				Battery: 15.0,
				ConnectionStatus: 3,
				Mode: "Automatic"
			},

			// MAC: [
			// 	{
			// 	"title": "Altitude", 
			// 	"value": 56.0
			// 	}, 
			// 	{
			// 	"title": "Battery", 
			// 	"value": 7.0
			// 	}, 
			// 	{
			// 	"title": "Current Stage", 
			// 	"value": 0
			// 	}, 
			// 	{
			// 	"title": "Geofence Compliant", 
			// 	"value": false
			// 	}, 
			// 	{
			// 	"title": "Latitude", 
			// 	"value": 0.0
			// 	}, 
			// 	{
			// 	"title": "Longitude", 
			// 	"value": 0.0
			// 	}, 
			// 	{
			// 	"title": "Pitch", 
			// 	"value": 0.0
			// 	}, 
			// 	{
			// 	"title": "Propulsion", 
			// 	"value": false
			// 	}, 
			// 	{
			// 	"title": "Roll", 
			// 	"value": 0.0
			// 	}, 
			// 	{
			// 	"title": "Sensors ok", 
			// 	"value": false
			// 	}, 
			// 	{
			// 	"title": "Speed", 
			// 	"value": 95.0
			// 	}, 
			// 	{
			// 	"title": "Stage Completed", 
			// 	"value": false
			// 	}, 
			// 	{
			// 	"title": "Status", 
			// 	"value": 0
			// 	}, 
			// 	{
			// 	"title": "Yaw", 
			// 	"value": 0.0
			// 	},
			// 	{
			// 	"title": "time_since_last_packet",
			// 	"value": 0
			// 	},
			// 	{
			// 	"title": "last_packet_time",
			// 	"value": 0
			// 	}
			// ],

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
	methods: {

		testBattery(){
			console.log("batteryPct: " + this.batteryPct);
		}
	}
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