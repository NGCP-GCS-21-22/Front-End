-<template>
    <b-card>
      <label for="">Get request</label>
      <br />
      <div><b-button v-on:click="get_vehicle_type">Get</b-button></div>
      <p v-if="vehicle_name">{{ vehicle_name }}</p>
    </b-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Get",
  data() {
    return {
      vehicle_name: null,
    };
  },
  methods: {
    get_vehicle_type() {
      const path = "http://localhost:3000/data";
      axios
        .get(path)
        .then((reponse) => {
          console.log(reponse.data);
          this.vehicle_name = reponse.data["vehicle"];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>