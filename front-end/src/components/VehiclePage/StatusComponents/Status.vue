<template>
	<b-container class="status-container">
		<!-- Status -->
		<b-row class="justify-content-md-center">
			<b-col>
				<b-row class="justify-content-md-center"
					><h3>Activity Status</h3></b-row
				>
				<b-row class="status justify-content-md-center">
					{{ statusText }}
					<p class="StatusIcon">
						<b-icon
							icon="circle-fill"
							:variant="statusIconVariant"
						/>
					</p>
				</b-row>
			</b-col>
		</b-row>

		<!-- Sensors -->
		<b-row class="justify-content-md-center">
			<b-col>
				<b-row class="justify-content-md-center"
					><h3>Sensor Status</h3></b-row
				>
				<b-row class="status justify-content-md-center">
					{{ sensorsText }}
					<p class="SensorIcon">
						<b-icon
							icon="circle-fill"
							:variant="sensorsIconVariant"
						></b-icon>
					</p>
				</b-row>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	props: {
		vehicleData: Object,
	},
	computed: {
		status() {
			if (!this.vehicleData) return null;
			return this.vehicleData["status"];
		},
		statusText() {
			if (!this.status) return "-----";
			if (this.status == 0) return "Standby";
			// else if (this.status == 1) return "Active";
			else if (this.status >= 1) return "Active";
		},
		statusIconVariant() {
			if (!this.vehicleData) return null;

			if (this.status == 0) return "warning";
			// else if (this.status == 1) return "success";
			else if (this.status >= 1) return "success";
		},
		sensors() {
			if (!this.vehicleData) return null;
			return this.vehicleData["sensors_ok"];
		},
		sensorsText() {
			if (!this.vehicleData) return "-----";
			if (this.sensors == 1) return "Functional";
			else if (this.sensors >= 2) return "Malfunctioning";
			// else if (this.sensors == 2)
			// 	return "Malfunctioning";
		},
		sensorsIconVariant() {
			if (!this.vehicleData) return null;
			if (this.sensors == 1) return "success";
            else if (this.sensors >= 2) return "warning";
			// else if (this.sensors == 2) return "warning";
		},
	},
};
</script>

<style scoped>
.StatusIcon .b-icon {
	margin-left: 10px;
}
.SensorIcon .b-icon {
	margin-left: 10px;
}
h3 {
	text-decoration: underline;
}
.status {
	font-size: 15pt;
}
</style>