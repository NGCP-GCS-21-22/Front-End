<template>
	<div class="batteryContainer">
		<!-- <b-icon
			v-if="batteryPct >= 80"
			icon="battery-full"
			class="batteryFull"
		></b-icon>
		<b-icon
			v-else-if="batteryPct <= 79 && batteryPct > 20"
			icon="battery-half"
			class="batteryHalf"
		></b-icon>
		<b-icon
			v-if="batteryPct <= 20"
			icon="battery"
			class="batteryLow"
		></b-icon> -->
		<b-icon class="battery" :style="batteryStyle" :icon="batteryIcon">
		</b-icon>
		<div class="batteryPercent">{{ batteryPct }}%</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		batteryPct: Number,
		batteryColor: String,
	},
	computed: {
		batteryIcon() {
			// MODIFY THE DEFAULT POSSIBLY
			if (!this.batteryColor) return "battery";

			if (this.batteryColor == "Green") {
				return "battery-full";
			} else if (this.batteryColor == "Yellow") {
				return "battery-half";
			} else if (this.batteryColor == "Red") {
				return "battery";
			}
		},
		batteryStyle() {
			if (!this.batteryColor) return null;
			return `color: ${this.batteryColor}`;
		},
	},
};
</script>

<style scoped>
.batteryContainer {
	overflow: auto;
	padding: 10px 0px;
}

.battery {
	width: 60px;
	height: 38px;
	margin-top: -8px;
	float: left;
}

.batteryPercent {
	float: left;
	font-size: 11pt;
}
</style>