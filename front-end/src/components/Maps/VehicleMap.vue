<template>
    <div>
        <GmapMap
            class="gmap"
            :center="center"
            :zoom="zoom"
            :map-type-id="mapType"
            :tilt="tilt"
            :options="options"
        >
            <VehiclePositionMarker
                :vehicleData="vehicleData"
                :vehicleIcon="vehicleIcon"
            />

            <MissionWaypointMarker
                :widgetData="widgetData"
                :widgetTypeSelected="widgetTypeSelected"
                @moveMarker="moveMarker"
            />

            <HomeCoordinatesMarker
                :widgetData="widgetData"
                :widgetTypeSelected="widgetTypeSelected"
                @moveMarker="moveMarker"
            />

            <SearchAreaComponents
                :widgetData="widgetData"
                :widgetTypeSelected="widgetTypeSelected"
                :vehicleName="vehicleName"
                @moveMarker="moveMarker"
            />

            <GeofenceComponents
                :widgetData="widgetData"
                :widgetTypeSelected="widgetTypeSelected"
                @moveMarker="moveMarker"
            />

            <HikerMarker />
        </GmapMap>
    </div>
</template>

<script>
import {
    centerLng,
    centerLat,
    defaultLat,
    defaultLng,
} from "@/helpers/coordinates.js";
import VehiclePositionMarker from "@/components/Maps/MapComponents/VehiclePositionMarker.vue";
import MissionWaypointMarker from "@/components/Maps/MapComponents/MissionWaypointMarker.vue";
import HomeCoordinatesMarker from "@/components/Maps/MapComponents/HomeCoordinatesMarker.vue";
import HikerMarker from "@/components/Maps/MapComponents/HikerMarker.vue";
import SearchAreaComponents from "@/components/Maps/MapComponents/SearchAreaComponents.vue";
import GeofenceComponents from "@/components/Maps/MapComponents/GeofenceComponents.vue";

export default {
    props: {
        vehicleName: String,
        vehicleData: Object,
        vehicleIcon: Object,
        widgetData: Object,
        widgetTypeSelected: String,
    },
    components: {
        VehiclePositionMarker,
        MissionWaypointMarker,
        HomeCoordinatesMarker,
        HikerMarker,
        SearchAreaComponents,
        GeofenceComponents,
    },
    computed: {},
    data() {
        return {
            // Map Data
            center: { lat: centerLat, lng: centerLng },
            zoom: 18,
            tilt: 0,
            options: {
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                scrollwheel: false,
                draggable: false,
                disableDoubleClickZoom: true,
            },
            mapType: "satellite",
            // Polygon Data
            // paths: [
            // 	{ id: 1, lat: 33.933729, lng: -117.6318437 }, // marker1
            // 	{ id: 2, lat: 33.93441, lng: -117.6318169 }, // marker2
            // 	{ id: 3, lat: 33.9344055, lng: -117.6306099 },
            // 	{ id: 4, lat: 33.9337468, lng: -117.6305616 },
            // ],
            paths: [],
            polyOptions: {
                strokeColor: "#39FF14",
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: "#39FF14",
                fillOpacity: 0.3,
            },
        };
    },
    methods: {
        moveMarker(widgetType, value) {
            this.$emit("moveMarker", widgetType, value);
        },
    },
};
</script>

<style scoped>
.gmap {
    width: 100vw;
    height: 92vh;
}
</style>
