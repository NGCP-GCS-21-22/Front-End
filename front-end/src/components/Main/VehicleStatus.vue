<template>
  <div>
    <b-container>
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
          <b-col>
            <stage-selection>
            </stage-selection>
          </b-col>
          <b-col>
            <!-- <EmergencyStop/> -->
          </b-col>
        </b-row>
        <!-- <b-col>
            <!-- <AnotherButton/> -->
          <!-- </b-col> --> -->
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import EmergencyStop from './EmergencyStop.vue';
import StageSelection from './StageSelection.vue';
import AnotherButton from './AnotherButton.vue';

export default {
    components: {EmergencyStop, "stage-selection": StageSelection, AnotherButton},
    props: ['vehicleName']
};
</script>

<style>
img {
  display: block;
  width: 20;
  height: 20;
}
</style>