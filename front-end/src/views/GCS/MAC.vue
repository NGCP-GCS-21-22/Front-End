<template>
	<div>
		<b-row class="noPadding">
			<br />
			<!-- left column -->
			<b-col align="left">
				<!-- RESIZE IMG -->
				<div id="image">
					<b-img
						:src="require('@/assets/map.png')"
						class="img-fluid"
						rounded
						alt="map pic"
					></b-img>
				</div>
			</b-col>
			<br />
			<!-- ALIGN COLUMNS RIGHT A LITTLE BIT MORE AND MAKE WIDER -->
			<!-- right column -->
			<b-col cols="5">
				<b-row>
					<!-- A Card with dummy data for Status MAC -->
					<Status />
				</b-row>
				<!-- &nbsp; -->
				<b-row>
					<!-- A Card with 6 buttons inside -->
					<Widgets />
				</b-row>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Status from "@/components/VehiclePage/Status.vue";
import Widgets from "@/components/VehiclePage/Widgets.vue";

export default {
	components: {
		Status,
		Widgets,
	},
};
</script>

<style scoped>
</style>