<template>
  <div>
    <b-container>
      <b-card style="width: 550px; height: 190px">
        <!-- top row -->
        <b-row>
          <b-col class="top-left-col" cols="7">
            <VehicleStatusTitle :vehicleName="vehicleName" />
          </b-col>
          <b-col class="top-right-col" cols="5">
            <ConnectionStatus :latency="latency" />
          </b-col>
        </b-row>

        <!-- bottom row -->
        <b-row>
          <b-col>
            <!-- Stage Selection Dropdown -->
          </b-col>
          <b-col>
            <!-- bottom right -->
            <b-row>
              <b-col>
                <!-- battery -->
              </b-col>
              <b-col>
                <!-- mode -->
              </b-col>
            </b-row>
            <b-row>
              <!-- emergency stop -->
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import VehicleStatusTitle from "@/components/Main/VehicleStatusTitle.vue";
import ConnectionStatus from "@/components/Main/ConnectionStatus.vue";

export default {
  props: {
    vehicleName: String,
  },
  components: {
    VehicleStatusTitle,
    ConnectionStatus,
  },
  data() {
    return {
      latency: 2,
    };
  },
};
</script>

<style scoped>
img {
  display: block;
  width: 20;
  height: 20;
}

.top-left-col {
  /* background-color: red; */
}

.top-right-col {
  /* background-color: blue; */
}

.battery {
  color: #29c16e;
  width: 60px;
  height: 28px;
}

.mode {
  width: 165px;
  height: 25px;
}

.stage_selection {
  width: 230px;
  height: 50px;
}
</style>