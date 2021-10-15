<template>
  <div>

    <!-- <b-form-group label="Choose your option" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Manual">Manual</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Automatic">Automatic</b-form-radio>
    </b-form-group>
    <div>Selected: <strong>{{ selected }}</strong></div> -->

    <b-form-input type="text" v-model="vehicle" placeholder="Enter your vehicle name"></b-form-input>   
    <div><button @click="post_vehicle_type">Submit</button></div>

</div>

  </div>
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
      // const vehicle_name = data();
      const vehicle_name = JSON.stringify({
        vehicle: this.vehicle,
      });
      console.log(this.vehicle);
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
  },
};
</script>

<style></style>
