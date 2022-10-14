<template>
	<b-container class="stage-container">
		<b-card class="stage-card">
			<h4>General Mission Stage:</h4>
			<h2>
				{{ generalStage }}
			</h2>
		</b-card>
	</b-container>
</template>

<script lang="ts">
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

.stage-container {
	margin-top: 10px;
	margin-bottom: 10px;
}

.stage-card {
	height: 13vh;
}
</style>