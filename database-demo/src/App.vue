<template>
    <label for="">Vehicle Input:</label>

    <p><input type="text" v-model="vehicle" /> {{ vehicle }}</p>
    <button @click="post_vehicle_type">Submit</button>
   

  <br>
  
    <label for="">Get request</label>
    <br>
    <button v-on:click="get_vehicle_type" >Get</button>
    <p v-if="vehicle_name"> {{vehicle_name}} </p>
 
</template>

<script>
import axios from "axios"


export default {
  name: 'App',
  data()
  { 
      return{
        vehicle_name: null,
      }
  },
  methods:{
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
    get_vehicle_type() {
      const path = "http://localhost:3000/data"
      axios.get(path)
      .then((reponse ) => {
        console.log(reponse.data)
        this.vehicle_name = reponse.data[0]["vehicle"]
      }) 
      .catch((error) => {
        console.log(error)
      })
    }
  }
  
}
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
