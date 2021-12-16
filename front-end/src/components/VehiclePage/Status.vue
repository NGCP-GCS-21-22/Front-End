<template>
  <div>
    <b-card style="width: 780px; height: 300px">
      <b-row>
        <b-col>
          <b-row> <h2>MAC Status</h2> </b-row>
          <b-row>
            <b-img
              src="https://cdn.discordapp.com/attachments/901187342008713227/901188314772701274/mac.png"
            ></b-img>
          </b-row>
          <vehicle-mission-stage :stage="stage" />
        </b-col>

        <b-col>
          <b-row>
            <b-col>
              <Features />
            </b-col>
            <b-col>
              <Features />
            </b-col>
          </b-row>

          <b-row> 
            <pitch-roll-yaw :pitch="pitch" :roll="roll" :yaw="yaw"/>
            <BatteryInStatus :batteryPct="batteryStatus"/>
          </b-row>
        </b-col>

        <b-col>
          <b-row>
            <ConnectionStatus :latency="latency" />
          </b-row>

          <b-row>
            <Mode :mode="mode" />
          </b-row>
          <b-row>
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
import Features from "./StatusComponents/Features.vue";
import PitchRollYaw from './StatusComponents/PitchRollYaw.vue';
import VehicleMissionStage from "./StatusComponents/VehicleMissionStage.vue";
export default {
  components: {
    ConnectionStatus,
    Mode,
    EmergencyStop,
    VehicleMissionStage,
    Features,
    PitchRollYaw,
    Battery,
    BatteryInStatus,
  },
  data() {
    return {
      latency: 2,
      batteryPct: 97,
      batteryStatus: 97,
      mode: "Autonomous",
      sModalShow: false,
      selected: null,
      stage: "Return to the Base",
      pitch: 10,
      roll: 5,
      yaw: 12,
      form: {
        option: null,
      },
    };
  },
};
</script>

<style>
</style>