<template>
	<b-container class="container">
		<b-card>
			<h4>General Mission Stage:</h4>
			<h2>
				{{ generalStage }}
			</h2>
		</b-card>
	</b-container>
</template>

<script>
export default {
	props: {
		generalStage: String,
	},
};
</script>

<style scoped>
h2,
h4 {
	color: #2c3e50;
}

.container {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>