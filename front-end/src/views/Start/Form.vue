<template>
	<div>
			<h1 style="color: white;">Form Page</h1>
			<b-button @click="goToStart">Back</b-button>
			<b-button @click="goToGCS">Go to GCS</b-button>

			<b-container>
				<b-row>
					<b-col>
						<MissionForm ref="MACForm" :vehicleName="'MAC'" />
					</b-col>
					<b-col>
						<MissionForm ref="ERUForm" :vehicleName="'ERU'" />
					</b-col>
					<b-col>
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
	 margin-top: 10px;
}
</style>