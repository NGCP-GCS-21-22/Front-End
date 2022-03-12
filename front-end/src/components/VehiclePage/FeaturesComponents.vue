<template>
	<b-card class="container">
		<b-row>
			<b-col>
				<Features :name="'Altitude'" :unit="'ft'" :value="altitude" :max="maxAltitude"/>
			</b-col>
			<b-col>
				<Features :name="'Speed'" :unit="'ft/s'" :value="speed" :max="maxSpeed"/>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="7">
			<pitch-roll-yaw
				v-if="pitch && roll && yaw"
				:pitch="pitch"
				:roll="roll"
				:yaw="yaw"
			/>
			</b-col>
			<b-col cols="5">
				Temp
			</b-col>
		</b-row>
	</b-card>
</template>

<script>
import Features from "./StatusComponents/Features.vue";
import PitchRollYaw from "./StatusComponents/PitchRollYaw.vue";

export default {
	props: {
		vehicleData: Object
	},
	components: { Features, PitchRollYaw },
	data() {
		return {
			altitude: 50,
			speed: 30,
			maxAltitude: 100,
			maxSpeed: 100,
			pitch: 10,
			roll: 5,
			yaw: -3,
		};
	},
	computed: {
	
	}
};
</script>

<style scoped>
.container {
	margin-top: 10px;
	/* margin-bottom: 10px; */
	margin-left: 0px;
	margin-right: 0px;
	padding: 0px;
	height: 36vh;
	width: 10vw;
}
</style>
