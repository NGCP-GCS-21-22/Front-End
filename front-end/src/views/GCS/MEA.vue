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
                    <VehicleStage
                        :vehicleData="vehicleData"
                        :vehicleName="vehicleName"
                        :missionData="missionData"
                    />
                </b-row>
                <b-row v-if="widgetTypeSelected != 'Geofence'">
                    <VehicleStatus
                        :vehicleName="vehicleName"
                        :vehicleIcon="vehicleIcon"
                        :vehicleData="vehicleData"
                        :missionData="missionData"
                    />
                </b-row>
                <b-card
                    class="status-card"
                    v-if="widgetTypeSelected != 'Geofence'"
                >
                    <b-row>
                        <b-col>
                            <Status :vehicleData="vehicleData" />
                        </b-col>
                        <b-col>
                            <ErrorMessages :vehicleData="vehicleData" />
                        </b-col>
                    </b-row>
                </b-card>
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
                <StatusSidebar :vehicleData="vehicleData" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import VehicleStatus from "@/components/MainPage/VehicleStatus.vue";
import Widgets from "@/components/VehiclePage/Widgets.vue";
import Map from "@/components/Maps/VehicleMap.vue";
import {
    getMissionData,
    getVehicleData,
    getWidgetData,
} from "@/helpers/getData.js";
import VehicleStage from "@/components/VehiclePage/VehicleStage.vue";
import StatusSidebar from "@/components/VehiclePage/StatusSidebar.vue";
import Status from "@/components/VehiclePage/StatusComponents/Status.vue";
import ErrorMessages from "@/components/VehiclePage/StatusComponents/ErrorMessages.vue";
export default {
    components: {
        Widgets,
        Map,
        VehicleStatus,
        VehicleStage,
        StatusSidebar,
        Status,
        ErrorMessages,
    },
    data() {
        return {
            vehicleName: "MEA",
            vehicleData: null,
            missionData: null,
            widgetData: null,
            widgetTypeSelected: null,
        };
    },
    computed: {
        vehicleIcon() {
            if (!this.vehicleMissionData) return null;
            return this.vehicleMissionData.icon;
        },
        vehicleMissionData() {
            if (!this.missionData) return null;
            return this.missionData[this.vehicleName];
        },
    },
    mounted() {
        this.initializeMissionData();
        this.initializeWidgetData();
        this.interval = setInterval(this.updateStatus, 1000);
    },
    methods: {
        async initializeMissionData() {
            try {
                const response = await getMissionData("all");
                this.missionData = response;
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
            this.updateVehicleData();
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
.status-card {
    margin-top: 10px;
    height: 20vh;
}
</style>
