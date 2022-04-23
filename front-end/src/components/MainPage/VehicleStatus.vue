<template>
    <b-container class="status-container">
        <b-card class="status-card">
            <!-- top row -->
            <b-row>
                <b-col>
                    <VehicleStatusTitle
                        :vehicleName="vehicleName"
                        :vehicleIcon="vehicleIcon"
                    />
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
                        <b-col cols="7"><Mode :mode="mode" /></b-col>
                        <b-col cols="5">
                            <Battery
                                :batteryPct="batteryPct"
                                :batteryColor="batteryColor"
                            />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

            <!-- bottom row -->
            <b-row>
                <!-- bottom left -->
                <b-col cols="6">
                    <StageSelection
                        :vehicleName="vehicleName"
                        :missionData="missionData"
                        :vehicleData="vehicleData"
                    />
                </b-col>
                <!-- bottom right -->
                <b-col>
                    <EmergencyStop :vehicleName="vehicleName" />
                </b-col>
            </b-row>
        </b-card>
    </b-container>
</template>

<script>
import axios from "axios";
import VehicleStatusTitle from "@/components/MainPage/Status/VehicleStatusTitle.vue";
import ConnectionStatus from "@/components/MainPage/Status/ConnectionStatus.vue";
import EmergencyStop from "@/components/MainPage/Status/EmergencyStop.vue";
import Battery from "@/components/MainPage/Status/Battery.vue";
import Mode from "@/components/MainPage/Status/Mode.vue";
import StageSelection from "@/components/MainPage/Status/StageSelection.vue";

export default {
    props: {
        vehicleName: String,
        vehicleIcon: Object,
        vehicleData: Object,
        missionData: Object,
    },
    components: {
        VehicleStatusTitle,
        ConnectionStatus,
        EmergencyStop,
        Battery,
        Mode,
        StageSelection,
    },
    computed: {
        batteryPct() {
            if (!this.vehicleData) return 0;
            return this.vehicleData["battery"];
        },
        batteryColor() {
            if (!this.vehicleData) return null;
            return this.vehicleData["battery)color"];
        },
        latency() {
            if (!this.vehicleData) return 0;
            return this.vehicleData["last_packet_time"];
        },
        mode() {
            if (!this.vehicleData) return "None";
            return this.vehicleData["mode"];
        },
        status() {
            if (!this.vehicleData) return "Offline";
            return "Online";
        },
    },
    // data() {
    //     return {
    //         status: "Online",
    //     };
    // },
};
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