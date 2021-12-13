<template>
	<b-container class="eru-container">
		<b-row class="eru-row">
			<!-- left column -->
			<b-col class="left-column" cols="7">
				<b-img
					class="map-image"
					:src="require('@/assets/map.png')"
					rounded
					alt="map pic"
				></b-img>
			</b-col>

			<!-- right column -->
			<b-col cols="5">
				<b-row>
					<!-- A Card with dummy data for Status ERU -->
					<Status :vehicleName="vehicleName"/>
				</b-row>
				<b-row>
					<Widgets :vehicleName="vehicleName" />
				</b-row>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Status from "@/components/VehiclePage/Status.vue";
import Widgets from "@/components/VehiclePage/Widgets.vue";

export default {
	components: {
		Status,
		Widgets,
	},
	data() {
		return {
			vehicleName: "ERU",
		};
	},
};
</script>

<style scoped>
.map-image {
	max-height: 90vh;
	margin: auto;
}
.eru-container {
	max-width: 100%;
	max-height: 100%;
}
</style>