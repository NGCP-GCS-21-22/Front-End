<template>
  <form action="">
    <label for="">Vehicle Input:</label>
    
    <p><input type="text" v-model="vehicle_name"> {{vehicle_name}}</p>
    <button @click="post_vehicle_type">Submit</button>
  </form>
</template>

<script>


export default {
  name: 'App',
  data()
  { 
      return{
        vehicle_name: "UAV"
      }
  },
  methods:{
    post_vehicle_type(){
      const path = "http://localhost:3000/data"
      axios.get(path)
      .then
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
