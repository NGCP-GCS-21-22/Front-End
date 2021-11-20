<template>
  <b-card>
        <p class="card-text">Stage Command</p>
        <b-form-select v-model="selected" :options="options">
			<b-form-select-option :value="null" disabled>
			-- Please select an option
			</b-form-select-option>
		</b-form-select>
        </br>
        
        <b-button variant="success">Submit</b-button>
        <b-button @click="goBack" >Back</b-button>
      </b-card>
    </b-col>
</template>

<script>
export default {
	props: {
		options: Array,
	},
	data() {
		return {
			selected: null,
			// options: [
			// 	{ value: null, text: "Please select an option" },
			// 	{ value: "a", text: "This is First option" },
			// 	{ value: "b", text: "Selected Option" },
			// 	{
			// 		value: { C: "3PO" },
			// 		text: "This is an option with object value",
			// 	},
			// 	{ value: "d", text: "This one is disabled", disabled: true },
			// ],
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