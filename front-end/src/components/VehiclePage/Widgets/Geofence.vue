<template>
	<b-container>
		<h2>{{ name }}</h2>
		<b-button class="back-button" @click="goBack">Back</b-button>
	</b-container>
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
.back-button {
	position: absolute;
	top: 20px;
	left: 20px;
}
</style>