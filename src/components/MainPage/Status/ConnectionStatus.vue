<template>
  <b-row no-gutters>
    <!-- left side -->
    <b-col align="left" style="margin-left: 10px;">
      Connection: {{ status }} <br />
      Last Packet: {{ latency }}ms
    </b-col>

    <!-- right side -->
    <b-col cols="4" align="left">
      <b-icon v-if="latency <= 49 && latency > 1" icon="reception-4" class="reception4"></b-icon>
      <b-icon v-else-if="latency <= 70 && latency > 50" icon="reception-3" class="reception3"></b-icon>
      <b-icon v-else-if="latency <= 85 && latency > 71" icon="reception-2" class="reception2"></b-icon>
      <b-icon v-else-if="latency <= 100 && latency > 85" icon="reception-1" class="reception1"></b-icon>
      <b-icon v-if="latency > 100 || latency == 0" icon="reception-0" class="reception0"></b-icon>
    </b-col>
  </b-row>
</template>

<script lang="ts">
export default {
  props: {
    status: String,
    latency: Number,
  },
};
</script>

<style scoped>
.reception4 {
  color: #29c16e;
  width: 40px;
  height: 40px;
}

.reception3 {
  color: #29c16e;
  width: 40px;
  height: 40px;
}

.reception2 {
  color: #d8b414;
  width: 40px;
  height: 40px;
}

.reception1 {
  color: #ec9a1e;
  width: 40px;
  height: 40px;
}

.reception0 {
  color: #e43636;
  width: 40px;
  height: 40px;
}

.connection-text {
  padding-left: 30px;
}
</style>