<template>
  <div>
    <b-card class="status-card" > 
      <b-row>
        <b-col align="center">
          <b-row style="margin-button:0; margin-left:10px"> 
            <h1 style="font-weight: bold;">{{ vehicleName }} Status</h1> </b-row>
          <b-row style="margin: 0; padding-top: 0">
            <b-col>
                <b-img class="Logo" :src="vehicleIcon"></b-img>
            </b-col>
            
          </b-row>
          <vehicle-mission-stage :stage="stage" />
        </b-col>

        <b-col>
          <b-row >
            <b-col style="padding-right:0px; margin:0px">
              <Features :name="nameBar1" :unit="'400 ft'"/>
            </b-col>
            <b-col style="margin-top:40px;margin-left:0px; padding:0px">
              400ft
            </b-col>
            <b-col style="padding-left:0px; padding-right:0px; margin">
              <Features :name="nameBar2" :unit="'6ft'"/>
            </b-col>
            <b-col style="margin-top:40px; padding:0px">
              6ft/s
            </b-col>
          </b-row>

          <b-row style="margin-top: 20px;"> 
            <b-col>
              <PitchRollYaw :pitch="pitch" :roll="roll" :yaw="yaw"/>
            </b-col>
            <b-col>
              <BatteryInStatus :batteryPct="batteryStatus"/>
            </b-col>
          </b-row>
        </b-col>

        <b-col>
          <b-row>
            <ConnectionStatusVehiclePage :status="'Online'":latency="latency" />
          </b-row>
          <b-row>
            <ModeVehicle :mode="mode" />
          </b-row>
          <b-row>
            <EmergencyButton />
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import ImageURL from "../Form/ImageURL.vue";
import Battery from '../MainPage/Status/Battery.vue';
import ConnectionStatus from "../MainPage/Status/ConnectionStatus.vue";
import EmergencyStop from "../MainPage/Status/EmergencyStop.vue";
import Mode from "../MainPage/Status/Mode.vue";
import BatteryInStatus from './StatusComponents/BatteryInStatus.vue';
import ConnectionStatusVehiclePage from './StatusComponents/ConnectionStatusVehiclePage.vue';
import EmergencyButton from './StatusComponents/EmergencyButton.vue';
import Features from "./StatusComponents/Features.vue";
import ModeVehicle from './StatusComponents/ModeVehicle.vue';
import PitchRollYaw from './StatusComponents/PitchRollYaw.vue';
import VehicleMissionStage from "./StatusComponents/VehicleMissionStage.vue";
export default {
  props: {
    vehicleName: String,
    vehicleIcon: String,
  },
  components: {
    VehicleMissionStage,
    Features,
    PitchRollYaw,
    BatteryInStatus,
    ConnectionStatusVehiclePage,
    ModeVehicle,
    EmergencyButton,
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
      nameBar1: "Attitude",
      nameBar2: "Speed",
    };
  },
};
</script>

<style scoped>
.status-card {
	width: 40vw;
	height: 30vh;
  margin-left:15px;
  margin-bottom: 10px;
}
.Logo
{
  width: 100px;
  height: 100px;
  text-align: center;
  margin-top: 0;
  padding: 0;
}
</style>