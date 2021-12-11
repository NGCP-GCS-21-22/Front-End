<template>
  <b-card>
        <p class="card-text">Stage Command</p>
        <b-form-select v-model="selected" :options="list_of_stage_command">
			<b-form-select-option :value="null" disabled>
			-- Please select an option
			</b-form-select-option>
		</b-form-select>
		<div class="mt-3">Selected ID: <strong>{{ SelectedID }}</strong></div>
		<div class="mt-3">Selected Stage: <strong>{{ SelectedStage }}</strong></div>
        </br>
        
        <b-button variant="success" @click="getData">Submit</b-button>
        <b-button @click="goBack" >Back</b-button>
      </b-card>
    </b-col>
</template>

<script>
export default {
	props: {
		options: Array,
	},
	computed:{
		SelectedID(){
			if (this.selected) {
				return this.selected.id;
			}
			return null;
		},
		SelectedStage(){
			if (this.selected) {
				return this.selected.stage;
			}
			return "Stage Selection";
		}
	},
	data() {
		return {
			selected: null,
			list_of_stage_command: [],
		};
	},
	methods: {
		getData(){
			const path = "http://localhost:5000/stagecommand";
			axios.get(path)
			.then((res) =>{
				this.list_of_stage_command = res.data.stagecommand;})
				.catch((error) => console.log(error));
			// console.log(this.selected.id);
			// console.log(this.selected.stage);
		},
		goBack() {
			this.$emit("goBack");
		},

	},
};
</script>

<style scoped>
</style>