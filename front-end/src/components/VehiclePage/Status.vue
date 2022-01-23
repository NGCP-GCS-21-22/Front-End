<template>
  <div>
    <b-card style="width: 780px; height: 300px">
      <b-row >
        <b-col >
          <b-row style='padding-left:15px'> <h2>MAC Status</h2> </b-row>
          <b-row style='padding-left:5px'>
            <b-img style='padding-left:40px'
              src="https://cdn.discordapp.com/attachments/901187342008713227/901188314772701274/mac.png"
            ></b-img>
          </b-row>
          <b-row>
            <vehicle-mission-stage :stage="getStage" />
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <AltitudeStatus :altitude="getAltitude" />
            </b-col>
            <b-col>
              <SpeedStatus :speed="getSpeed" />
            </b-col>
          </b-row>

          <b-row> 
            <pitch-roll-yaw :pitch="getPitch" :roll="getRoll" :yaw="getYaw"/>
            <BatteryInStatus :batteryPct="getBattery"/>
          </b-row>
        </b-col>

        <b-col style='padding:25px'>
          <b-row style='padding-left:18px'>
            <ConnectionStatus :latency="getLatency" />
          </b-row>

          <b-row>
            <Mode :mode="getMode" />
          </b-row>
          <b-row style='padding:20px'>
            <EmergencyStop />
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import ImageURL from "../Form/ImageURL.vue";
import Battery from '../MainPage/Battery.vue';
import ConnectionStatus from "../MainPage/ConnectionStatus.vue";
import EmergencyStop from "../MainPage/EmergencyStop.vue";
import Mode from "../MainPage/Mode.vue";
import BatteryInStatus from './StatusComponents/BatteryInStatus.vue';
import AltitudeStatus from "./StatusComponents/AltitudeStatus.vue";
import SpeedStatus from "./StatusComponents/SpeedStatus.vue";
import PitchRollYaw from './StatusComponents/PitchRollYaw.vue';
import VehicleMissionStage from "./StatusComponents/VehicleMissionStage.vue";
export default {
  components: {
    ConnectionStatus,
    Mode,
    EmergencyStop,
    VehicleMissionStage,
    PitchRollYaw,
    Battery,
    BatteryInStatus,
    AltitudeStatus,
    SpeedStatus,
 
  },
  data() {
    return {
      // latency: 2,
      // batteryPct: 97,
      // batteryStatus: 97,
      // mode: "Autonomous",
      sModalShow: false,
      selected: null,
      // stage: "Return to the Base",
      // pitch: 10,
      // roll: 5,
      // yaw: 12,
      form: {
        option: null,
      },
      MAC: {
        "latency": 3,
        "batteryPct": 80,
        "batteryStatus": 97,
        "mode": "Autonomous",
        "sModalShow": false,
        "selected": null,
        "stage": "Return to the Base",
        "pitch": 10,
        "roll": 5,
        "yaw": 12,
        "altitude": 250,
        "speed": 50,
      },
    }; 
  },
  computed:{
    getLatency(){
      return this.MAC.latency;
    }, 
    getBattery(){
      return this.MAC.batteryPct;
    }, 
    getMode(){
      return this.MAC.mode;
    }, 
    getStage(){
      return this.MAC.stage;
    }, 
    getPitch(){
      return this.MAC.pitch;
    }, 
    getRoll(){
      return this.MAC.roll;
    }, 
    getYaw(){
      return this.MAC.yaw;
    }, 
    getAltitude(){
      return this.MAC.altitude;
    }, 
    getSpeed(){
      return this.MAC.speed;
    }, 

  }
};
</script>

<style>
</style>