<template>
    <GmapMarker
        v-if="homeCoordinates"
        :position="homeCoordinatesMarker.position"
        :draggable="isSelected(homeCoordinatesMarker)"
        :clickable="isSelected(homeCoordinatesMarker)"
        :icon="homeCoordinatesMarker.icon"
        @drag="moveHomeCoordinates"
        :zIndex="isSelected(homeCoordinatesMarker) ? 1000 : 1"
    />
</template>

<script>
export default {
    props: {
        widgetData: Object,
        widgetTypeSelected: String,
    },
    computed: {
        homeCoordinates() {
            if (!this.widgetData.homeCoordinates) return null;
            return this.widgetData.homeCoordinates;
        },
        homeCoordinatesMarker() {
            if (!this.homeCoordinates) return null;
            return {
                id: "homeCoordinates",
                position: this.homeCoordinates,
                icon: {
                    url: "https://github.com/NGCP-GCS-21-22/Front-End/blob/main/front-end/src/assets/map_icons/home.png?raw=true",
                    anchor: { x: 33, y: 45 },
                },
                draggable: this.widgetTypeSelected === "HomeCoordinates",
            };
        },
    },
    methods: {
        isSelected(marker) {
            if (!marker || !marker.draggable) return false;
            return true;
        },
        moveHomeCoordinates(e) {
            this.homeCoordinatesMarker.position = {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            };
            this.$emit("moveMarker", "homeCoordinates", {
                lat: this.homeCoordinatesMarker.position.lat,
                lng: this.homeCoordinatesMarker.position.lng,
            });
        },
    },
};
</script>

<style>
</style>