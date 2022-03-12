<template>
  <div>
    <b-col>
      <b-row class="info">Pitch: {{ pitch }}</b-row>
      <b-row class="info">Roll: {{ roll }} </b-row>
      <b-row class="info">Yaw: {{ yaw }} </b-row>
    </b-col>
  </div>
</template>

<script>
export default {
  props: {
    vehicleData: Object,
  },
  computed: {
    pitch() {
      if (!this.vehicleData) return 0;
      return this.vehicleData["pitch"];
    },
    roll() {
      if (!this.vehicleData) return 0;
      return this.vehicleData["roll"];
    },
    yaw() {
      if (!this.vehicleData) return 0;
      return this.vehicleData["yaw"];
    },
  },
};
</script>

<style>
.info {
	font-size: 14pt;
	padding-bottom: 5px;
}
</style>
