<template>
    <b-card>
        <p class="card-text">{{name}}</p>
        <label for="input-live">Latitude:</label>
        <b-form-input
          id="input-1"
          v-model="latitude"
          type="email"
          placeholder="Enter Latitude"
          required
        >
        </b-form-input>
        <label for="input-live">Longtitude:</label>
        <b-form-input
          id="input-1"
          v-model="longitude"
          type="email"
          placeholder="Enter Longtitude"
          required
        >
        </b-form-input>
        </br>
        <b-button>clear</b-button>
        <b-button variant="success" >Submit</b-button>
        <b-button @click="goBack" >Back</b-button>
    </b-card>
</template>

<script>
export default {
	props: {
		name: String,
    missionWaypointData: Object,
	},
  computed: {
    latitude() {
      if (!this.missionWaypointData) return null
      return this.missionWaypointData.latitude
    },
    longitude() {
      if (!this.missionWaypointData) return null
      return this.missionWaypointData.longitude
    },
  },
	data() {
		return {
			// latitude: null,
			// longitude: null,
		};
	},
	methods: {
		goBack() {
			this.$emit("goBack");
		},
	},
};
</script>

<style scoped>
</style>