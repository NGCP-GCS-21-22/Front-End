<template>
  <b-row no-gutters>
    <!-- left side -->
    <b-col align="left" style="margin-left: 10px;">
      Connection: Online <br />
      Last Packet: {{ latency }}ms
    </b-col>

    <!-- right side -->
    <b-col cols="4" align="left">
      <b-icon icon="reception4" class="reception"></b-icon>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    latency: Number,
  },
};
</script>

<style scoped>
.reception {
  color: #29c16e;
  width: 40px;
  height: 40px;
}
.connection-text {
  padding-left: 30px;
}
</style>