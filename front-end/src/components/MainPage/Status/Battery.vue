<template>
  <div class="batteryContainer">
    <b-icon v-if="batteryPct >= 80" icon="battery-full" class="batteryFull"></b-icon>
    <b-icon v-else-if="batteryPct <= 79 && batteryPct > 20" icon="battery-half" class="batteryHalf"></b-icon>
    <b-icon v-if="batteryPct <= 20" icon="battery" class="batteryLow"></b-icon>
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
  },
};
</script>

<style scoped>
.batteryContainer {
  overflow: auto;
  padding: 10px 0px;
}

.batteryFull {
  color: #4de06d;
  width: 60px;
  height: 38px;
  margin-top: -8px;
  float: left;
}

.batteryHalf {
  color: #d8b414;
  width: 60px;
  height: 38px;
  margin-top: -8px;
  float: left;
}

.batteryLow {
  color: #c12929;
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