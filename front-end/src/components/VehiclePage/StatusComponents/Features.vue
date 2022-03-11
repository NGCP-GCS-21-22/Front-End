<template>
  <div>
    <b-col>
      <b-row class="fontB">{{ name }}</b-row>
      <b-row class="loadbar">
        <strong class="bar" style="height: 50%">30</strong>
      </b-row>
      <!-- <b-row class="font">0 {{ unit }}</b-row> -->
    </b-col>
    <b-col>
      <b-row class="fontB">0 {{ unit }}</b-row>
    </b-col>
  </div>
</template>

<script>
import PitchRollYaw from "./PitchRollYaw.vue";
export default {
  components: { PitchRollYaw },
  props: {
    name: String,
    unit: String,
  },
};
</script>

<style>
.loadbar {
  width: 35px;
  height: 150px;
  background-color: #c4c4c4;
  border: 5px solid rgb(26, 25, 25);
  position: relative;
}
.bar {
  width: 100%;
  display: block;
  font-family: arial;
  font-size: 12px;
  background-color: #0d0384;
  color: #fff;
  position: absolute;
  bottom: 0;
}
.fontB {
  font-size: 10px;
  padding: 0px;
  margin-left: 5px;
  margin-bottom: 5px;
  font-size: 15px;
}
</style>