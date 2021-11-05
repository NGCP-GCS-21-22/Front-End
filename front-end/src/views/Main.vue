<template>
  <div>
    <b-row align-h="center">
        <!-- left column -->
        <b-col style="padding-left: 50px;" cols="6">
          <div id="image">
            <b-img center
              :src="require('../assets/map.png')"
              class="img-fluid"
              rounded
              alt="map pic"
              style="width=100% \9;"
            ></b-img>
          </div>
        </b-col>

      <!-- right column -->
      <b-col style="width:100%;" cols="3" align-self="center" md="4">
        <VehicleStatus :vehicleName="'MAC'"/>
        &nbsp;
        <VehicleStatus :vehicleName="'ERU'"/>
        &nbsp;
        <VehicleStatus :vehicleName="'MEA'"/>
      </b-col>s
    </b-row>
  </div>
</template>

<script>
// @ is the same as src
import VehicleStatus from "@/components/Main/VehicleStatus.vue";

export default {
  components: {
    VehicleStatus,
  }
};
</script>

<style>


</style>
