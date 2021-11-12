<template>
  <b-container class="main-container">
    <b-row class="main-row">
      <!-- left column -->
      <b-col cols="8">
        <b-img
          class="map-image"
          rounded
          :src="require('@/assets/map.png')"
          alt="map pic"
        ></b-img>
      </b-col>

      <!-- right column -->
      <b-col cols="4">
        <VehicleStatus :vehicleName="'MAC'" />

        <VehicleStatus :vehicleName="'ERU'" />

        <VehicleStatus :vehicleName="'MEA'" />
      </b-col>
    </b-row>
  </b-container>
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

<style scoped>
.map-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: fill;
}
.main-container {
  max-width: 100%;
  max-height: 100%;
  /* background-color: orange; */
}
.main-row {
  max-width: 100%;
  max-height: 100%;
  /* background-color: aqua; */
}
</style>
