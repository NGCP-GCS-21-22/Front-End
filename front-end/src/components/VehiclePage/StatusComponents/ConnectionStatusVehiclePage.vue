<template>
  <b-row class="Status-card">
    <!-- left side -->
    <b-col align="center" class="font">
      <b-row style="font-size: 20px; font-weight: normal; margin-top:5px">
        Connection: {{ status }}
      </b-row>
      <b-row style="font-size: 18px; font-weight: normal; margin-left:10px">
         Last Packet: {{ latency }}ms
      </b-row>
     
    </b-col>

    <!-- right side -->
    <b-col cols="4" align="center" style="margin-top: 20px">
      <b-icon v-if="latency <= 10 && latency > 1" icon="reception-4" class="reception4"></b-icon>
      <b-icon v-else-if="latency <= 45 && latency > 11" icon="reception-3" class="reception3"></b-icon>
      <b-icon v-else-if="latency <= 85 && latency > 45" icon="reception-2" class="reception2"></b-icon>
      <b-icon v-else-if="latency <= 100 && latency > 85" icon="reception-1" class="reception1"></b-icon>
      <b-icon v-if="latency > 100 || latency == 0" icon="reception-0" class="reception0"></b-icon>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    status: String,
    latency: Number,
  },
};
</script>

<style scoped>
.Status-card{
  background-color: #7D6969;
  height:100px;
  width: 250px;
  margin-left: 1px;
}
.font{
  font-size: 18px;
  color: #fff;
}
.reception4 {
  color: #29c16e;
  width: 40px;
  height: 40px;
}

.reception3 {
  color: #2966c1;
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