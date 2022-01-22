<template>
	<b-card bg-variant="secondary" text-variant="white" class="mode" no-body>
		{{ mode }}
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
.mode {
    margin-top: 10px;
	width: 100px;
	height: 25px;
	margin-left: 10px;
}
</style>