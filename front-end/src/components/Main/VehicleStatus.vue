<template>
   <div>
     <b-card style="width:550px; height:190px">
        <b-row>
          <b-col>
            <h2 align="left">{{vehicleName}} Status</h2>
          </b-col>
          <b-col cols="1">
            <b-img
              :src="require('@/assets/airplane.png')"
              style="width:60px; height:50px"
              >
            </b-img>
          </b-col>    
          <b-col>
            Connection: Online
            </br>
            Last Packet: 2ms
          </b-col>
            <b-icon icon="reception4" style="color: #29C16E; width:50px; height:50px"></b-icon>
        </b-row>
        
        <b-row>
        <b-card-sub-title align="left">Mission Stage: Return to Base</b-card-sub-title>
        </b-row>
        <b-row>
            <b-col cols="7">
              <b-icon icon="battery-full" style="color: #29C16E; width:60px; height:28px" ></b-icon>
              97%
            </b-col>
            <b-col>
              <b-card bg-variant="secondary" text-variant="white" style="width:165px; height:25px;" no-body>Mode: Autonomous</b-card>
            </b-col>
        </b-row>

      <b-row>
        <b-button @click="SmodalShow = !SmodalShow" variant="primary" style="width:230px; height:50px">Stage Selection</b-button>
        <b-col>
        <b-button @click="EmodalShow = !EmodalShow" variant="danger" style="width:230px; height:50px">Emergency Stop</b-button>
        </b-col>

        <b-modal v-model="SmodalShow" hide-footer title="Stage Selection">
            <h3>Hello From Stage Selection Modal!</h3>
            <b-button variant="success" block @click="SmodalShow = !SmodalShow">Yes</b-button>
            <b-button variant="danger" block @click="SmodalShow = !SmodalShow">Close Me</b-button>
        </b-modal>
        <b-modal v-model="EmodalShow" hide-footer title="Emergency Stop">
          <h3>Hello From Emergency Stop Modal!</h3>
            <b-button variant="success" block @click="EmodalShow = !EmodalShow">Yes</b-button>
            <b-button variant="danger" block @click="EmodalShow = !EmodalShow">Close Me</b-button>
        </b-modal>
      </b-row>
    </b-card>

  </div>
</template>

<script>
import axios from "axios";
import EmergencyStop from './EmergencyStop.vue';
import StageSelection from './StageSelection.vue';
import AnotherButton from './AnotherButton.vue';

export default {
  data() {
    return {
      SmodalShow: false,
      EmodalShow: false
    }
  },
  props: ["vehicleName"],
};
</script>

<style scoped>
img {
  display: block;
  width: 20;
  height: 20;
}
</style>