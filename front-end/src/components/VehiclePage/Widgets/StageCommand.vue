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
		stages: Array,
	},
	computed: {
		options() {
			let options = [];
			for (let i = 0; i < this.stages.length; i++) {
				let stage = this.stages[i];

				let option = {
					text: stage.stage,
					value: stage,
				};
				options.push(option);
			}
			return options;
		},
	},
	data() {
		return {
			selected: null,
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