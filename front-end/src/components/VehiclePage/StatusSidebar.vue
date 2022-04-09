<template>
	<div>
		<b-row class="right-column-row">
			<StatusBars :vehicleData="vehicleData" />
		</b-row>
		<b-row class="right-column-row">
			<b-card class="vehicle-numbers">
				<PrincipalAxes :vehicleData="vehicleData" />
				<Status :vehicleData="vehicleData" />
				<ErrorMessages :vehicleData="vehicleData" />
			</b-card>
		</b-row>
	</div>
</template>

<script>
import StatusBars from "@/components/VehiclePage/StatusComponents/StatusBars.vue";
import PrincipalAxes from "@/components/VehiclePage/StatusComponents/PrincipalAxes.vue";
import Status from "@/components/VehiclePage/StatusComponents/Status.vue";
import ErrorMessages from "@/components/VehiclePage/StatusComponents/ErrorMessages.vue";

export default {
	props: {
		vehicleData: Object,
	},
	components: {
		StatusBars,
		PrincipalAxes,
		Status,
		ErrorMessages,
	},
};
</script>

<style>
.right-column-row {
	padding-right: 10px;
}
.vehicle-numbers {
	width: 100%;
	height: 52vh;
	margin-top: 10px;
	/* padding: 20px; */
}
</style>