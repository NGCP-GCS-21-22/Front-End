<template>
    <div>
        <b-row class="right-column">
            <b-card class="vehicle-numbers">
                <Altimeter :altitude="altitude" />
                <PrincipalAxes :vehicleData="vehicleData" />
                <Status :vehicleData="vehicleData" />
                <ErrorMessages :vehicleData="vehicleData" />
            </b-card>
        </b-row>
    </div>
</template>

<script>
import PrincipalAxes from "@/components/VehiclePage/StatusComponents/PrincipalAxes.vue";
import Status from "@/components/VehiclePage/StatusComponents/Status.vue";
import ErrorMessages from "@/components/VehiclePage/StatusComponents/ErrorMessages.vue";
import Altimeter from "@/components/VehiclePage/StatusComponents/Altimeter.vue";

export default {
    props: {
        vehicleData: Object,
    },
    components: {
        PrincipalAxes,
        Status,
        ErrorMessages,
        Altimeter,
    },
    computed: {
        altitude() {
            if (!this.vehicleData) return 0;
            return this.vehicleData["altitude"];
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