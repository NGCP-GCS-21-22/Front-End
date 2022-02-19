<template>
	<div>
			<h1 style="color: white;">Form Page</h1>
			<b-button class="back" variant="outline-primary" @click="goToStart">Back</b-button>
			<b-button class="back" variant="outline-primary" @click="goToGCS">Go to GCS</b-button>

			<b-container fluid>
				<b-row class="justify-content-md-center">
					<b-col md="4"> 
						<MissionForm ref="MACForm" :vehicleName="'MAC'" />
					</b-col>
					<b-col cols="4" > 
						<MissionForm ref="ERUForm" :vehicleName="'ERU'" />
					</b-col>
					<b-col cols="4"> 
						<MissionForm ref="MEAForm" :vehicleName="'MEA'" />
					</b-col>
				</b-row>
			</b-container>
			<b-button class="submit" variant="primary" @click.prevent="submit()">Submit</b-button>
	</div>
</template>

<script>
import MissionForm from "@/components/Form/MissionForm.vue";
import axios from 'axios'



export default {
	components: {
		MissionForm,
	},
	props: {
		vehicleName: String,
	},
	
	
	methods: {
		goToGCS() {
			this.$router.push("/gcs/main");
		},
		goToStart() {
			this.$router.push("/");
		},
		submit() {
			// get the waypoint from each mission form
			console.log(this.$refs.MACForm.$refs.MissionWaypoint.waypointName);
			console.log(this.$refs.ERUForm.$refs.MissionWaypoint.waypointName);
			console.log(this.$refs.MEAForm.$refs.MissionWaypoint.waypointName);
			// get the Stage id and name from each mission form
			console.log(this.$refs.MACForm.$refs.Stages.id);
			console.log(this.$refs.ERUForm.$refs.Stages.id);
			console.log(this.$refs.MEAForm.$refs.Stages.id);
			console.log(this.$refs.MACForm.$refs.Stages.stage);
			console.log(this.$refs.ERUForm.$refs.Stages.stage);
			console.log(this.$refs.MEAForm.$refs.Stages.stage);
			// get the manual control from each mission form
			console.log(this.$refs.MACForm.$refs.ManualControl.toggle);
			console.log(this.$refs.ERUForm.$refs.ManualControl.toggle);
			console.log(this.$refs.MEAForm.$refs.ManualControl.toggle);
			// get the search area from each mission form
			console.log(this.$refs.MACForm.$refs.SearchArea.toggle); 
			console.log(this.$refs.ERUForm.$refs.SearchArea.toggle); 
			console.log(this.$refs.MEAForm.$refs.SearchArea.toggle); 

			//const submit = (vehicleName) => {
				let path = "http://localhost:5000/postData"
				let payload = {
					MAC:{
						icon: "https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/MAC.png",
						MissionWaypoint: this.$refs.MACForm.$refs.MissionWaypoint.waypointName,
						Stage: this.$refs.MACForm.$refs.Stages.id,
						Stage: this.$refs.MACForm.$refs.Stages.stage,
						Manualcontrol: this.$refs.MACForm.$refs.ManualControl.toggle,
						Searcharea: this.$refs.MACForm.$refs.SearchArea.toggle
					},
					ERU:{
						icon: "https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/ERU.png",
						MissionWaypoint: this.$refs.ERUForm.$refs.MissionWaypoint.waypointName,
						Stage: this.$refs.ERUForm.$refs.Stages.id,
						Stage: this.$refs.ERUForm.$refs.Stages.stage,
						Manualcontrol: this.$refs.ERUForm.$refs.ManualControl.toggle,
						Searcharea: this.$refs.ERUForm.$refs.SearchArea.toggle
					},
					MEA:{
						icon: "https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/MEA.png",
						MissionWaypoint: this.$refs.MEAForm.$refs.MissionWaypoint.waypointName,
						Stage: this.$refs.MEAForm.$refs.Stages.id,
						Stage: this.$refs.MEAForm.$refs.Stages.stage,
						Manualcontrol: this.$refs.MEAForm.$refs.ManualControl.toggle,
						Searcharea: this.$refs.MEAForm.$refs.SearchArea.toggle
					},
				}
				axios.post(path, payload)
				.then((response) => {
					console.log("Mission data sent.");
				}, (error) => {
					console.log(Error);
				});
			//}
		},
	},
};
</script>

<style scoped>
.btn-circle.btn-sm {
	width: 30px;
	height: 30px;
	padding: 6px 0px;
	border-radius: 15px;
	font-size: 8px;
	text-align: center;
	margin-bottom: 10px;
}

.submit{
	 text-align: center;
	 margin-top: 20px;
}

.back{
	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 10px;
	margin-right: 10px;
}

</style>