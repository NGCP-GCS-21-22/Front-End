<template>
  <div>
    <b-row class="noPadding">
      <br />
      <!-- left column -->
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
      <!-- right column -->
      <b-col cols="5">
        <b-row>
        <VehicleStatus :vehicleName="'MAC'"/>
        </b-row>
        <!-- &nbsp; -->
        <b-row>
        <VehicleStatus :vehicleName="'ERU'"/>
        </b-row>
        <!-- &nbsp; -->
        <b-row>
        <!-- <VehicleStatus :vehicleName="'MEA'"/> -->
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is the same as src
import VehicleStatus from "@/components/Main/VehicleStatus.vue";

export default {
  components: {
    VehicleStatus
  },
};
</script>

<style></style>
