<template>
  <b-card>
        <p class="card-text">Stage Command</p>
        <b-form-select v-model="selected" :options="options">
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
		};
	},
	methods: {
		getData(){
			console.log(this.selected.id);
			console.log(this.selected.stage);
		},
		goBack() {
			this.$emit("goBack");
		},
	},
};
</script>

<style scoped>
</style>