<template>
    <b-card>
        <p class="card-text">{{name}}</p>
        <label for="input-live">Latitude:</label>
        <b-form-input
          id="input-1"
          v-model="latitude"
          type="number"
          placeholder="Enter number for Latitude"
          required
        >
        </b-form-input>

        <label for="input-live">Longtitude:</label>
        <b-form-input
          id="input-1"
          v-model="longtitude"
          type="number"
          placeholder="Enter number for Longtitude"
          required
        >
        </b-form-input>
        <div class="mt-2">Latitude: {{ latitude }}</div>
        <div class="mt-2">Longtitude: {{ longtitude }}</div>
        </br>
        <b-button @click="resetData">clear</b-button>
        <b-button variant="success" @click="clickedSubmit">Submit</b-button>
        <b-button @click="goBack" >Back</b-button>
    </b-card>
</template>

<script>
import axios from "axios"
export default {
	props: {
		name: String,
	},
	data() {
		return {
			latitude: null,
			longtitude: null,
		};
	},
	methods: {
    getData(){
      console.log(this.latitude);
      console.log(this.longtitude);
    },
    resetData(){
      this.latitude = null;
      this.longtitude = null;
    },
		goBack() {
			this.$emit("goBack");
		},
    postInformation(coordinate)
    {
      const path = "http://localhost:300/data"
      axios.post(path, coordinate).
      then(()=> console.log("Sucessfully Post!")). 
      catch((error)=> {
          console.log(error);});
    },
    clickedSubmit()
    {
      const coordinate = {
        attitule:  this.attitule,
        latitude: this.latitude
      };
      this.postInformation(coordinate);
    }

    
	},
};
</script>

<style scoped>
</style>