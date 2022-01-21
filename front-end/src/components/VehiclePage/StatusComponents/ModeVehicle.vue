<template>
	<b-card bg-variant="secondary" text-variant="white" class="autonomous" no-body>
		<h4 style="margin-top: 7px">
      {{ mode }}
    </h4>
	</b-card>
</template>

<script>
export default {
	props: {
		mode: String,
	},
};
</script>

<style scoped>
.autonomous {
  margin-top: 10px;
  margin-bottom: 10px;
	width: 250px;
	height: 50px;
}
</style>