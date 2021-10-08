<template>
  
    <label for="">Vehicle Input:</label>

    <p><input type="text" v-model="vehicle" /> {{ vehicle }}</p>
    <button @click="post_vehicle_type">Submit</button>

</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      vehicle: "UAV",
    };
  },
  methods: {
    // get_vehicle_type(){
    //    const path = 'http://localhost:3000/data';
    //   axios.get(path)
    //     .then((res) => {
    //       this.vehicle = res.data.vehicle;
    //     })
    //     .catch((error) => {
    //       // eslint-disable-next-line
    //       console.error(error);
    //     });
    // },
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
