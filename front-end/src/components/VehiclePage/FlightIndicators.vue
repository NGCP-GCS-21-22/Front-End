<template>
    <b-container>
        <b-card class="flight-indicators-card">
            <Altimeter :altitude="altitude" />
            <Airspeed :airspeed="airspeed" />
            <Attitude :pitch="pitch" :roll="roll" />
        </b-card>
    </b-container>
</template>

<script>
import Altimeter from "@/components/VehiclePage/FlightIndicators/Altimeter.vue";
import Airspeed from "@/components/VehiclePage/FlightIndicators/Airspeed.vue";
import Attitude from "@/components/VehiclePage/FlightIndicators/Attitude.vue";

export default {
    props: {
        vehicleData: Object,
    },
    components: {
        Altimeter,
        Airspeed,
        Attitude,
    },
    computed: {
        altitude() {
            if (!this.vehicleData) return 0;
            return this.vehicleData["altitude"];
        },
        airspeed() {
            if (!this.vehicleData) return 0;
            return this.vehicleData["speed"];
        },
        pitch() {
            if (!this.vehicleData) return 0;
            return this.vehicleData["pitch"];
        },
        roll() {
            if (!this.vehicleData) return 0;
            return this.vehicleData["roll"];
        },
    },
};
</script>

<style>
.flight-indicators-card {
    width: 48vw;
    height: 31vh;
    margin-top: 10px;
    padding: 0;
}
</style>