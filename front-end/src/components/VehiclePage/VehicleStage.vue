<template>
	<b-container class="container">
		<b-card>
			<h4>Vehicle Mission Stage:</h4>
			<h3>
				{{ generalStage }}
			</h3>
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
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>