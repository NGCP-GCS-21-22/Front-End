<template>
  <div id="app">
    <GmapMap
      :center="center"
      :zoom="zoom"
      :map-type-id="mapType"
      style="width: 100vw; height: 100vh"
      :tilt="tilt"
      :options="options"
      @click="handleMapClick"
    >
    <GmapMarker
      :position="marker.position"
      :clickable="true"
      :draggable="true"
      @drag="handleMarkerDrag"
      @click="panToMarker"
    />
    </GmapMap>
    <p>Selected Position: {{ marker.position }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Map Data
      marker: { position: {lat: 33.93364332758927, lng: -117.63119269704840} },
      center: { lat: 33.93364332758927, lng: -117.6311926970484 },
      zoom: 18,
      tilt: 0,
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      },
      mapType: "satellite",
    };
  },
  methods: {
    handleMarkerDrag(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    },
    panToMarker() {
      this.$refs.mapRef.panTo(this.marker.position);
      this.$refs.mapRef.setZoom(18);
    },
    handleMapClick(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      console.log(e);
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
