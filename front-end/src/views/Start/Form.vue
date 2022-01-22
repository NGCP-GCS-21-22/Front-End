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
			<b-button class="submit" variant="primary" @click="submit">Submit</b-button>
	</div>
</template>

<script>
import MissionForm from "@/components/Form/MissionForm.vue";

export default {
	components: {
		MissionForm,
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