<template>
    <b-container class="vehicle-container">
        <b-row class="vehicle-row">
            <!-- left column -->
            <b-col class="left-column" cols="6  ">
                <Map
                    v-if="vehicleData && vehicleIcon"
                    :vehicleData="vehicleData"
                    :vehicleIcon="vehicleIcon"
                    :widgetData="widgetData"
                    :widgetTypeSelected="widgetTypeSelected"
                    @moveMarker="setWidgetData"
                />
            </b-col>

            <!-- middle column -->
            <b-col cols="4">
                <b-row v-if="widgetTypeSelected != 'Geofence'">
                    <VehicleStage :generalStage="generalStage" />
                </b-row>
                <b-row v-if="widgetTypeSelected != 'Geofence'">
                    <VehicleStatus
                        :vehicleName="vehicleName"
                        :vehicleIcon="vehicleIcon"
                        :vehicleData="vehicleData"
                    />
                </b-row>
                <b-row>
                    <Widgets
                        v-if="vehicleName && vehicleMissionData"
                        :vehicleName="vehicleName"
                        :vehicleMissionData="vehicleMissionData"
                        :widgetData="widgetData"
                        :vehicleData="vehicleData"
                        @widgetTypeSelected="setWidgetSelected"
                        @updateWidgetData="setWidgetData"
                    />
                </b-row>
            </b-col>
            <!-- right column -->
            <b-col cols="2">
                <b-row class="right-column-row">
                    <StatusBars :vehicleData="vehicleData" />
                </b-row>
                <b-row class="right-column-row">
                    <b-card class="vehicle-numbers">
                        <PrincipalAxes :vehicleData="vehicleData" />
                        <b-container>
                            <b-row class="justify-content-md-center">
                                <b-col>
                                    <b-row class="justify-content-md-center">
                                        Status:
                                    </b-row>
                                    <b-row class="justify-content-md-center">
                                        Active
                                    </b-row>
                                </b-col>
                                <b-col>
                                    <b-row class="justify-content-md-center">
                                        Sensors:
                                    </b-row>
                                    <b-row class="justify-content-md-center">
                                        Functional
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-card>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import VehicleStage from "@/components/VehiclePage/VehicleStage.vue";
import VehicleStatus from "@/components/MainPage/VehicleStatus.vue";
import Widgets from "@/components/VehiclePage/Widgets.vue";
import Map from "@/components/Maps/VehicleMap.vue";
import {
    getMissionData,
    getGeneralStage,
    getVehicleData,
    getWidgetData,
} from "@/helpers/getData.js";
import StatusBars from "@/components/VehiclePage/StatusComponents/StatusBars.vue";
import PrincipalAxes from "@/components/VehiclePage/StatusComponents/PrincipalAxes.vue";


export default {
    components: {
        VehicleStatus,
        Widgets,
        Map,
        VehicleStage,
        StatusBars,
        PrincipalAxes,
    },
    data() {
        return {
            vehicleName: "MEA",
            generalStage: null,
            vehicleData: null,
            vehicleMissionData: null,
            widgetData: null,
            widgetTypeSelected: null,
        };
    },
    computed: {
        vehicleIcon() {
            if (!this.vehicleMissionData) return null;
            return this.vehicleMissionData.icon;
        },
    },
    mounted() {
        this.initializeMissionData();
        this.initializeWidgetData();
        this.interval = setInterval(this.updateStatus, 500);
    },
    methods: {
        async initializeMissionData() {
            try {
                const response = await getMissionData(this.vehicleName);
                this.vehicleMissionData = response;
            } catch (error) {
                console.log(error);
            }
        },
        async initializeWidgetData() {
            try {
                const response = await getWidgetData(this.vehicleName);
                this.widgetData = response;
            } catch (error) {
                console.log(error);
            }
        },
        updateStatus() {
            this.updateGeneralStage();
            this.updateVehicleData();
        },
        async updateGeneralStage() {
            try {
                const response = await getGeneralStage();
                this.generalStage = response;
            } catch (error) {
                console.log(error);
            }
        },
        async updateVehicleData() {
            try {
                const response = await getVehicleData("MEA");
                this.vehicleData = response;
            } catch (error) {
                console.log(error);
            }
        },
        setWidgetData(widgetType, value) {
            this.$set(this.widgetData, widgetType, value);
        },
        setWidgetSelected(widgetTypeSelected) {
            this.widgetTypeSelected = widgetTypeSelected;
        },
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
};
</script>

<style scoped>
.vehicle-container {
    max-width: 100%;
    max-height: 100%;
}
.left-column {
    padding: 0;
    /* background-color: red; */
}
.right-column {
    padding: 0;
    /* background-color: purple; */
}

.vehicle-numbers {
    width: 100%;
    height: 52vh;
    margin-top: 10px;
    /* padding: 20px; */
}
.right-column-row {
    padding-right: 10px;
}
</style>
