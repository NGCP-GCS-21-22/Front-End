<template>
	<!-- if alignment is an issue, change this root to a div and remove b-row from MissionForm.vue -->
	<b-col>
		<b-row>
			<h4 class="text-left font-weight-bold">Mission Waypoint</h4>
		</b-row>
		<b-row>
			<b-form-input
				v-model="waypointName"
				placeholder="Enter Waypoint Name"
			></b-form-input>
		</b-row>
	</b-col>
</template>

<script>
export default {
	data() {
		return {
			waypointName: null,
		};
	},
};
</script>

<style>
</style>