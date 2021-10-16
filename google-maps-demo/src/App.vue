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
      <GmapMarker
        :key="marker.id"
        v-for="marker in markers"
        :position="marker.position"
        :icon="{
          url: 'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
          scaledSize: { width: 32, height: 40 },
          labelOrigin: { x: 16, y: 40 },
        }"
      />
      <GmapMarker
        :key="marker.id"
        v-for="marker in vehicleMarkers"
        :position="marker.position"
        :icon="{
          url: 'https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/eru.png',
          scaledSize: { width: 100, height: 100 },
          labelOrigin: { x: 50, y: 50 },
        }"
      />
      <GmapPolygon :paths="paths" :options="polyOptions" />
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
      zoom: 18,
      //Marker Data
      markers: [
        {
          id: "one",
          position: {
            lat: 33.93459532438122,
            lng: -117.6311926970484,
          },
        },
        {
          id: "two",
          position: {
            lat: 33.93364332758927,
            lng: -117.6314209323399,
          },
        },
        {
          id: "three",
          position: {
            lat: 33.93404089266308,
            lng: -117.63052445140261,
          },
        },
      ],
      vehicleMarkers: [
        {
          id: "one",
          position: {
            lat: 33.93404089266308,
            lng: -117.6312916970488,
          },
        },
      ],
      // Polygon Data
      paths: [
        { lat: 33.933729, lng: -117.6318437 },
        { lat: 33.93441, lng: -117.6318169 },
        { lat: 33.9344055, lng: -117.6306099 },
        { lat: 33.9337468, lng: -117.6305616 },
      ],
      polyOptions: {
        strokeColor: "#39FF14",
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#39FF14",
        fillOpacity: 0.3,
      },
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
