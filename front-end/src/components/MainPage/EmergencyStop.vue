<template>
	<div>
		<b-button
			class="emergency-button"
			@click="eModalShow = !eModalShow"
			variant="danger"
		>
			Emergency Stop
		</b-button>
		<b-modal centered v-model="eModalShow" hide-footer title="Emergency Stop">
			<h3>Hello From Emergency Stop Modal!</h3>
			<b-button variant="success" block @click="eModalShow = !eModalShow">
				Yes
			</b-button>
			<b-button variant="danger" block @click="eModalShow = !eModalShow">
				Close Me
			</b-button>
		</b-modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			eModalShow: false,
		};
	},
};
</script>

<style scope>
.emergency-button {
	width: 230px;
	height: 50px;
}
</style>