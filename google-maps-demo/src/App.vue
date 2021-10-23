<template>
  <div id="app">
    <GmapMap
      :center="center"
      :zoom="zoom"
      :map-type-id="mapType"
      style="width: 100vw; height: 100vh"
      :tilt="tilt"
      :options="options"
    >
    <!-- stuff here maybe? marker?? -->
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Map Data
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
