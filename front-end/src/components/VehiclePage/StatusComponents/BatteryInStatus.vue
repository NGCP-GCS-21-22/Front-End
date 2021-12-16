<template>
	<div class="batteryContainer">
    <b-col>
      <b-row>
        	<b-icon icon="battery-full" class="battery"></b-icon>
      </b-row>
      <b-row>
        <div class="batteryPercent"> Battery: {{ batteryPct }}%</div>
      </b-row>
	
		
    </b-col>
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