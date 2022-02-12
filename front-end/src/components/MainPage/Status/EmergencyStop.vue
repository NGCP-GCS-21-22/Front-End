<template>
	<div>
		<b-button
			class="emergency-button"
			style="font-weight: bold;"
			@click="eModalShow = !eModalShow"
			variant="danger"
		>
			EMERGENCY STOP
			<b-img
					style="padding-left: 5px; width: 42px; color: #FFFFFF;"
					:src="require('@/assets/stop.png')"
			></b-img>
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
	width: 230px;
	height: 50px;
}

</style>