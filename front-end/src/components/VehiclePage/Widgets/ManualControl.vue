<template>
	<div>
		<h2>{{ name }}</h2>
		<b-button @click="goBack">Back</b-button>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
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