<template>
  <b-container>
    <b-button class="back-button" @click="goBack">Back</b-button>
    <h2>{{ name }}</h2>
    <Workspace
      :geofenceWorkspace="geofenceWorkspace"
      @addGeofencePolygon="addGeofencePolygon"
      @updateWidgetData="updateWidgetData"/>
    <!--
    <Workspace @addGeofencePolygon="addkasdjfkasdfj"/>

    <KeepInCart :polygons="keepInPolygons"/>

    <KeepOutCart />
    -->
  </b-container>
</template>

<script>
import axios from "axios";
import Workspace from "@/components/VehiclePage/Widgets/Geofence/Workspace.vue";

export default {
  props: {
    name: String,
    geofence: Array,
    geofenceWorkspace: Object,
  },
  components: {
    Workspace,
  },
  data() {
    return {
      initialSearchArea: this.searchArea,
    };
  },
  computed: {
    keepInPolygons() {
      if (!this.geofence) return null;
      let keepIns = [];
      for (let i = 0; i < this.geofence.length; i++) {
        let current = this.geofence[i];
        if (current["keep_in"] == true) {
          keepIns.push[current];
        }
      }
      return keepIns;
    },
  },
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    addGeofencePolygon(geofencePolygon) {
      let newGeofence = this.geofence;
      newGeofence.push(geofencePolygon);
      this.$emit("updateWidgetData", "geofence", newGeofence);
    },
		updateWidgetData(widgetType, value) {
			this.$emit("updateWidgetData", widgetType, value);
		},
  },
};
</script>

<style scoped>
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>