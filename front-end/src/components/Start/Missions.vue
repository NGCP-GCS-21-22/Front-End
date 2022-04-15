<template>
	<div class="button-container">
		<b-button
			class="mission-button"
			v-for="mission in missions"
			:key="mission.index"
			@click="selectMission(mission)"
		>
			<h2>{{ mission.name }}</h2>
		</b-button>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			missions: [
				{
					name: "KOWALSKI",
					index: 0,
				},
				{
					name: "SOTERIA",
					index: 1,
				},
				{
					name: "ARCHANGEL",
					index: 2,
				},
			],
		};
	},
	mounted() {
		// let path = "http://localhost:5000/getSavedMissions";
		// axios
		// 	.get(path)
		// 	.then((response) => {
		// 		this.missions = response.data;
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	},
	methods: {
		selectMission(mission) {
			let path = "http://localhost:5000/setPrimaryMission";
			let payload = mission;
			// axios
			// 	.post(path, payload)
			// 	.then((response) => {
			// 		console.log(response);
      //    this.$router.push("/gcs/main");
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	});
			console.log(payload.name);
      this.$router.push("/gcs/main");
		},
	},
};
</script>

<style scoped>
.button-container {
	height: 80vh;
	overflow: auto;
}
.mission-button {
	width: 18vw;
	margin: 40px;
	height: 18vh;
}
h2 {
	margin-top: 10px;
}
</style>
