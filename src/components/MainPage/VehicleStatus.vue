<template>
    <b-container class="status-container">
        <b-card class="status-card">
            <!-- top row -->
            <b-row>
                <b-col>
                    <VehicleStage :vehicleData="vehicleData" :vehicleName="vehicleName" :missionData="missionData"
                        :vehicleIcon="vehicleIcon" />
                </b-col>
            </b-row>

            <!-- middle row -->
            <b-row>
                <!-- middle left -->
                <b-col cols="6">
                    <ConnectionStatus :status="status" :latency="latency" />
                </b-col>
                <!-- middle right -->
                <b-col cols="6">
                    <b-row>
                        <b-col cols="7">
                            <Mode :mode="mode" />
                        </b-col>
                        <b-col cols="5">
                            <Battery :batteryPct="batteryPct" />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

            <!-- bottom row -->
            <b-row>
                <!-- bottom left -->
                <b-col cols="6">
                    <StageSelection :vehicleName="vehicleName" :missionData="missionData" :vehicleData="vehicleData" />
                </b-col>
                <!-- bottom right -->
                <b-col>
                    <EmergencyStop :vehicleName="vehicleName" />
                </b-col>
            </b-row>
        </b-card>
    </b-container>
</template> 

<script lang="ts">
import VehicleStage from "@/components/MainPage/Status/VehicleStage.vue";
import ConnectionStatus from "@/components/MainPage/Status/ConnectionStatus.vue";
import EmergencyStop from "@/components/MainPage/Status/EmergencyStop.vue";
import Battery from "@/components/MainPage/Status/Battery.vue";
import Mode from "@/components/MainPage/Status/Mode.vue";
import StageSelection from "@/components/MainPage/Status/StageSelection.vue";
import { defineComponent } from "vue";
import type { Icon, MissionData, VehicleData } from "@/types";

export default defineComponent({
    props: {
        vehicleName: { required: true, type: String as () => keyof MissionData },
        vehicleIcon: Object as () => Icon,
        vehicleData: Object as () => VehicleData,
        missionData: Object as () => MissionData,
    },
    components: {
        VehicleStage,
        ConnectionStatus,
        EmergencyStop,
        Battery,
        Mode,
        StageSelection,
    },
    computed: {
        batteryPct(): number {
            if (!this.vehicleData) return -1;
            return this.vehicleData["battery"];
        },
        latency(): number {
            if (!this.vehicleData) return 0;
            return this.vehicleData["last_packet_time"];
        },
        mode(): string {
            if (!this.vehicleData) return "None";
            return this.vehicleData["mode"];
        },
        status(): string {
            if (!this.vehicleData) return "Offline";
            return "Online";
        },
    },
});
</script>

<style scoped>
.status-container {
    margin-top: 10px;
}

.status-card {
    height: 22vh;
}

img {
    width: 20;
    height: 20;
}
</style>