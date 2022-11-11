<!-- Google maps marker for the mission waypoint that can be selected and dragged -->
<template>
    <GmapMarker v-if="missionWaypoint" :position="missionWaypointMarker?.position"
        :draggable="isSelected(missionWaypointMarker)" :clickable="isSelected(missionWaypointMarker)"
        :icon="missionWaypointMarker?.icon" @drag="moveMissionWaypoint"
        :zIndex="isSelected(missionWaypointMarker) ? 1000 : 1" />
</template>

<script lang="ts">
import type { Marker, Waypoint, WidgetData } from '@/types';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        widgetData: { required: true, type: Object as () => WidgetData },
        widgetTypeSelected: String,
    },
    computed: {
        missionWaypoint(): Waypoint {
            return this.widgetData.missionWaypoint;
        },
        missionWaypointMarker(): Marker {
            return {
                id: "missionWaypoint",
                position: this.missionWaypoint,
                icon: {
                    url: "https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/map_icons/mission-waypoint.png?raw=true",
                    anchor: { x: 33, y: 45 },
                },
                draggable: this.widgetTypeSelected === "MissionWaypoint",
            }; // display the mission waypoint marker icon
        },
    },
    methods: {
        isSelected(marker: Marker | undefined) {
            if (!marker || !marker.draggable) return false;
            return true;
        }, // return true if user clicked on a marker that is draggable
        moveMissionWaypoint(e: { latLng: { lat: () => number; lng: () => number; }; }) {
            this.missionWaypointMarker.position = {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            };
            this.$emit("moveMarker", "missionWaypoint", {
                lat: this.missionWaypointMarker?.position.lat,
                lng: this.missionWaypointMarker?.position.lng,
            });
        }, // updates latitude and longitude based on event of moving the mouse
    },
});
</script>

<style scoped>

</style>
