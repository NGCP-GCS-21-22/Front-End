<template>
  <b-card class="container">
    <div>
      <b-row class="row">
        <b-col class="column">
          <Features :name="nameofBar1" :unit="unit1" />
        </b-col>
        <b-col>
          <Features :name="nameofBar2" :unit="unit2" />
        </b-col>
      </b-row>
    </div>
    <div>
     <pitch-roll-yaw v-if="pitch && roll && yaw" class="":pitch="p" :roll="r" :yaw="y" />
    </div>
  </b-card>
</template>

<script>
import Features from "./StatusComponents/Features.vue";
import PitchRollYaw from './StatusComponents/PitchRollYaw.vue';

export default {
  components: { Features, PitchRollYaw, },
  data() {
    return {
      nameofBar1: "Altitude",
      nameofBar2: "Speed",
      unit1: "ft",
      unit2: "ft/s",
      p: 10,
      r: 5,
      y: 8,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 10px;
  /* margin-bottom: 10px; */
  margin-left: 0px;
  margin-right: 0px;
  padding: 0px;
}
</style>