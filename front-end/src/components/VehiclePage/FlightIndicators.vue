<template>
    <b-container>
        <b-card class="flight-indicators-card">
            <b-row>
                <b-col>
                    <b-row class="justify-content-md-center">
                        <h5>Altitude: {{ altitude }} ft</h5>
                    </b-row>
                    <b-row class="justify-content-md-center"
                        ><Altimeter :altitude="altitude" class="dials" />
                    </b-row>
                </b-col>
                <b-col>
                    <b-row class="justify-content-md-center">
                        <h5>Speed: {{ airspeed }} ft/s</h5>
                    </b-row>
                    <b-row class="justify-content-md-center">
                        <Airspeed :airspeed="airspeed" class="dials" />
                    </b-row>
                </b-col>
                <b-col>
                    <b-row class="justify-content-md-center">
                        <b-col>
                            <h5>Pitch: {{ pitch }}</h5>
                        </b-col>
                        <b-col>
                            <h5>Roll: {{ roll }}</h5>
                        </b-col>
                    </b-row>
                    <b-row class="justify-content-md-center">
                        <Attitude :pitch="pitch" :roll="roll" class="dials" />
                    </b-row>
                </b-col>
            </b-row>
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

<style scoped>
.flight-indicators-card {
    width: 100%;
    height: 31vh;
    margin-top: 10px;
    padding: 0;
}
.dials {
    margin-top: -15px;
}
h5 {
    background: #343a40;
    margin: 0;
    padding: 3px 10px;
    color: #ffffff;
    border-radius: 3px;
    border: 1px solid rgb(121, 112, 99);
}
</style>