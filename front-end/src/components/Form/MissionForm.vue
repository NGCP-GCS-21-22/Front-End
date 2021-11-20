<template>
	<b-container>
		<b-card>
			<b-row class="justify-content-md-center">
				<h1 style="color: black">{{ vehicleName }}</h1>
			</b-row>

			<b-row>
				<!-- Mission Waypoint -->
				<ImageURL ref="ImageURL" />
			</b-row>
			<b-row>
				<!-- Mission Waypoint -->
				<MissionWaypoint ref="MissionWaypoint" />
			</b-row>
			<b-row>
				<!-- Stages Form -->
				<Stages ref="Stages" />
			</b-row>
			<b-row>
				<!-- Manual Control (toggle/checkbox) -->
				<ManualControl ref="ManualControl" />
			</b-row>
			<b-row>
				<!-- Search Area (toggle/checkbox) -->
				<SearchArea ref="SearchArea" />
			</b-row>
		</b-card>
	</b-container>
</template>

<script>
import ImageURL from "@/components/Form/ImageURL.vue";
import MissionWaypoint from "@/components/Form/MissionWaypoint.vue";
import Stages from "@/components/Form/Stages.vue";
import ManualControl from "@/components/Form/ManualControl.vue";
import SearchArea from "@/components/Form/SearchArea.vue";

export default {
	props: {
		vehicleName: String,
	},
	components: {
		MissionWaypoint,
		Stages,
		ManualControl,
		SearchArea,
	},
	data() {
		return {
			longitude: null,
			latitude: null,
		};
	},
};
</script>

<style>
</style>