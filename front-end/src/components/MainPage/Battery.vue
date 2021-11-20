<template>
	<div class="batteryContainer">
		<b-icon icon="battery-full" class="battery"></b-icon>
		<div class="batteryPercent">{{ batteryPct }}%</div>
	</div>
</template>

<script>
export default {
    props: {
        batteryPct: Number,
    }
};
</script>

<style scoped>
.batteryContainer {
    overflow: auto;
    padding: 10px 0px;
}

.battery {
	color: #29c16e;
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