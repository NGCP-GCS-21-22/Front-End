<template>
  <div>
    <b-row class="noPadding">
      <br />
      <b-col align="left">
        <!-- RESIZE IMG -->
        <div id="image">
          <b-img
            :src="require('../assets/map.png')"
            class="img-fluid"
            rounded
            alt="map pic"
          ></b-img>
        </div>
      </b-col>
      <br />
      <!-- ALIGN COLUMNS RIGHT A LITTLE BIT MORE AND MAKE WIDER -->
      <b-col cols="5">
        <VehicleStatus />
        &nbsp;
        <VehicleStatus />
        &nbsp;
        <VehicleStatus />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is the same as src
import VehicleStatus from "@/components/Main/VehicleStatus.vue";

export default {
  components: {
    VehicleStatus,
  },
};
</script>

<style></style>
