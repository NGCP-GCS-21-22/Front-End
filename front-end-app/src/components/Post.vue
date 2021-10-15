<template>
  <b-container>
    <b-card >
      <b-container>
        <b-row>
          <b-form-input
            type="text"
            v-model="vehicle_name"
            placeholder="Enter your vehicle name"
          ></b-form-input>
        </b-row>
      </b-container>
      <br />
      <b-container>
        <b-row align="right">
          <div>
            <b-button class="mr-3" @click="clear">Clear</b-button>
            &nbsp
            <b-button @click="post_vehicle_type">Submit</b-button>
          </div>
        </b-row>
      </b-container>
    </b-card>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      vehicle_name: null,
      selected: "",
    };
  },
  methods: {
    post_vehicle_type() {
      const vehicle_name = {
        vehicle: this.vehicle_name,
      };
      console.log(vehicle_name);
      const path = "http://localhost:3000/data";
      axios
        .post(path, vehicle_name)
        .then(() => {
          console.log("Sucessfully Post!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clear() {
      this.vehicle_name = "";
    },
  },
};
</script>

<style></style>
