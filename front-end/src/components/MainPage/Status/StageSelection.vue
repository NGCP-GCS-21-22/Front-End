<template>
	<div>
		<b-button
			class="stage-selection-button"
			style="font-weight: bold;"
			@click="sModalShow = !sModalShow"
			variant="primary"
			>{{ selectedStage }}
			<b-img
					style="padding-left: 6px; width: 32px; color: #FFFFFF;"
					:src="require('@/assets/select.png')"
			></b-img>
			</b-button
		>

		<b-modal
			centered
			v-model="sModalShow"
			hide-footer
			:title="vehicleName + ' Stage Selection'"
		>
			<!-- include form dropdown & submit button -->
			<b-form-select v-model="selected" :options="stages">
				<b-form-select-option :value="null" disabled
					>-- Please select an option
				</b-form-select-option>
			</b-form-select>

			<div class="mt-3">
				Selected ID: <strong>{{ selectedId }}</strong>
			</div>
			<div class="mt-3">
				Selected Stage: <strong>{{ selectedStage }}</strong>
			</div>
			<!--<div class="mt-3">Stage: <strong>{{ stages.text }}</strong></div>-->
			<b-button
				@click="submit(sModalShow)"
				variant="primary"
				style="padding='5px'"
				>Submit</b-button
			>
		</b-modal>
	</div>
</template>

<script>
export default {
	props: {
		// stages: Object,
		vehicleName: String,
	},
	computed: {
		selectedStage() {
			if (this.selected) {
				return this.selected.stage;
			}
			return "STAGE SELECTION";
		},
		selectedId() {
			if (this.selected) {
				return this.selected.id;
			}
			return null;
		},
	},
	data() {
		return {
			sModalShow: false,
			selected: null,
			form: {
				option: null,
			},
			stages: [
				{
					text: "Ready to Start",
					value: {
						id: 1,
						stage: "Ready to Start",
					},
				},
				{
					text: "ERU Landing Sequence",
					value: {
						id: 5,
						stage: "ERU Landing Sequence",
					},
				},
				{
					text: "Drive to Hiker",
					value: {
						id: 6,
						stage: "Drive to Hiker",
					},
				},
				{
					text: "Load the Hiker",
					value: {
						id: 7,
						stage: "Load the Hiker",
					},
				},
				{
					text: "Go to EZ",
					value: {
						id: 8,
						stage: "Go to EZ",
					},
				},
				{
					text: "Transferring Hiker",
					value: {
						id: 9,
						stage: "Transferring Hiker",
					},
				},
				{
					text: "Return to Home",
					value: {
						id: 10,
						stage: "Return to Home",
					},
				},
			],
		};
	},
	methods: {
		submit(sModalShow) {
			this.sModalShow = !sModalShow;
			console.log("selectedStage: " + this.selectedStage);
		},
	},
};
</script>

<style scoped>
.stage-selection-button {
	width: 230px;
	height: 50px;
}
</style>