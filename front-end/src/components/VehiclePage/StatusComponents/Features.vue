<template>
	<b-row>
		<b-col align="center" class="center-block">
			<b-row
				class="barLabel justify-content-md-center"
				background="gray"
				>{{ name }}</b-row
			>
			<b-row class="loadbar">
				<span class="bar" :style="`height: ${barPercent}%`">
					{{ value }} {{ unit }}
				</span>
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
	},
	computed: {
		barPercent() {
			return (this.value / this.max) * 100
		},
	},
	data() {
		return {}
	},
}
</script>

<style>
.loadbar {
	width: 50px;
	height: 150px;
	background-color: #eeeeee;
	border: 2px solid #aaaaaa;
	position: relative;
}
.bar {
	width: 100%;
	background-color: #0d0384;
	color: #fff;
	font-size: 10pt;
	position: absolute;
	bottom: 0;
}
.barLabel {
	font-size: 14pt;
	margin-bottom: 5px;
}
</style>
