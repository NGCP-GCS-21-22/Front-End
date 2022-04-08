<template>
	<b-container class="stage-container">
		<b-card class="stage-card">
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
h3 {
	text-decoration: underline;
}
.stage-container {
	margin-top: 10px;
}
.stage-card {
	height: 13vh;
	
}
</style>