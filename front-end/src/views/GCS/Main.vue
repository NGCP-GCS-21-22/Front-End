<template>
  <b-container class="main-container">
    <b-row class="main-row">
      <!-- left column -->
      <b-col class="left-column" cols="8">
        <b-img
          class="map-image"
          rounded
          :src="require('@/assets/map.png')"
          alt="map pic"
        ></b-img>
      </b-col>

      <!-- right column -->
      <b-col class="right-column" cols="4">
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
  max-height: 92vh;
  margin: auto;
}
.main-container {
  max-width: 100%;
  max-height: 100%;
  /* background-color: orange; */
}
.main-row {
  /* max-width: 100%;
  max-height: 100%; */
  /* background-color: aqua; */
}
.left-column {
  /* background-color: red; */
}
.right-column {
  /* background-color: purple; */
}
</style>
