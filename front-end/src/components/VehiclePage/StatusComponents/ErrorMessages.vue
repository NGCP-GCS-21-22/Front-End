<template>
	<b-container class="container">
		<h3>Error Messages</h3>
		<b-container class="messages w-100 p-4 d-flex align-items-center justify-content-center">
            {{ errorMessage }}
        </b-container>
	</b-container>
</template>

<script>
export default {
	props: {
		vehicleData: Object,
	},
	computed: {
		errorMessage() {
			if (!this.vehicleData) return "None";
			return this.vehicleData["err_msg"];
		},
	},
};
</script>

<style scoped>
h3 {
	text-decoration: underline;
}
.container {
	padding: 15px 0px 0px 0px;
}
.messages {
	background: #f3f3f3;
	font-size: 15pt;
	height: 10vh;
    padding: 10px;
    border: 2px solid #eeeeee;
    border-radius: 2%;
}
</style>
