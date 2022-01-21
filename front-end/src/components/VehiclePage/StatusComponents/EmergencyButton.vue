<template>
	<div>
		<b-button
			class="emergency-button"
			@click="eModalShow = !eModalShow"
			variant="danger"
		>
		<h4 style="margin-top:5px">
      Emergency Stop
    </h4>	
		</b-button>
		<b-modal
			centered
			v-model="eModalShow"
			hide-footer
			title="Emergency Stop"
		>
			<h3>Send Emergency Stop Command?</h3>
			<b-row>
				<b-col>
					<b-button
						variant="success"
						block
						@click="eModalShow = !eModalShow"
					>
						Yes
					</b-button>
				</b-col>
				<b-col>
					<b-button
						variant="danger"
						block
						@click="eModalShow = !eModalShow"
					>
						No
					</b-button>
				</b-col>
			</b-row>
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

<style scoped>
.emergency-button {
	width: 250px;
	height: 80px;
}
</style>