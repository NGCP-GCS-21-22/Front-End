<template>
    <div>
        <b-row class="right-column">
            <b-card class="vehicle-numbers">
                <Altimeter :altitude="altitude" />
                <Airspeed :airspeed="airspeed"/>
				<Attitude :pitch="pitch" :roll="roll" />
            </b-card>
        </b-row>
    </div>
</template>

<script>
import PrincipalAxes from "@/components/VehiclePage/StatusComponents/PrincipalAxes.vue";
import Altimeter from "@/components/VehiclePage/StatusComponents/Altimeter.vue";
import Airspeed from "@/components/VehiclePage/StatusComponents/Airspeed.vue";
import Attitude from "@/components/VehiclePage/StatusComponents/Attitude.vue";

export default {
    props: {
        vehicleData: Object,
    },
    components: {
        PrincipalAxes,
        Altimeter,
        Airspeed,
		Attitude
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
.right-column-row {
    padding-right: 10px;
}
.vehicle-numbers {
    width: 100%;
    height: 89vh;
    margin-top: 10px;
    /* padding: 20px; */
}
</style>