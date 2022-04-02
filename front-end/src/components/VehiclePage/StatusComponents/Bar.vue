<template>
	<b-row>
		<b-col align="center" class="center-block">
			<b-row class="loadbar">
				<span
					class="bar"
					:style="`background-color: ${barStyle}; height: ${barPercent}%`"
				>
					{{ value }}
				</span>
			</b-row>
			<b-row class="barLabel justify-content-md-center"
				>{{ name }} ({{ unit }})
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
export default {
	props: {
		name: String,
		unit: String,
		value: Number,
		max: Number,
		color: String,
	},
	computed: {
		barPercent() {
			if (!this.value) return 0;
			if (!this.max) return 0;
			return (this.value / this.max) * 100;
		},
		barStyle() {
			if (!this.color) return "#0d0384";
			return this.color;
		},
	},
	data() {
		return {};
	},
};
</script>

<style>
.loadbar {
	width: 70px;
	height: 27vh;
	background-color: #eeeeee;
	border: 2px solid #aaaaaa;
	position: relative;
	margin-top: 10px;
}
.bar {
	width: 100%;
	color: #fff;
	font-size: 12pt;
	position: absolute;
	bottom: 0;
}
.barLabel {
	font-size: 14pt;
}
</style>
