<template>
	<div>
		<h1>{{ name }}</h1>
		<b-col>
			<b-row>
				<h4 class="text-left font-weight-bold">{{ name }}</h4>
			</b-row>
			<b-row>
				<div
					class="b-form-group"
					v-for="(coordinate, index) in searchArea"
					:key="index"
				>
					<!-- Input Text field -->
					<b-input-group>
						<b-form-input
							type="text"
							class="form-control"
							v-model="coordinate.lat"
							placeholder="Enter Latitude"
							width="10px"
						></b-form-input>

						<b-form-input
							type="text"
							class="form-control"
							v-model="coordinate.lng"
							placeholder="Enter Longitude"
							width="10px"
						></b-form-input>

						<b-input-group-append class="btns">
							<!-- Remove button -->

							<b-button
								pill
								@click="remove(index)"
								v-show="
									index || (!index && searchArea.length > 1)
								"
								variant="light"
								size="sm"
								class="mb-2 float-right"
							>
								<b-icon
									icon="dash-circle"
									variant="danger"
									font-scale="1"
									aria-label="Delete"
								></b-icon>
							</b-button>

							<!-- Add button -->
							<b-button
								pill
								@click="add()"
								v-show="index == searchArea.length - 1"
								b-modal="index == searchArea.length-1"
								variant="light"
								size="sm"
								class="mb-2 float-right"
							>
								<b-icon
									icon="plus-circle"
									variant="success"
									font-scale="1"
									aria-label="Add"
								></b-icon>
							</b-button>
						</b-input-group-append>
					</b-input-group>
				</div>
			</b-row>
			<b-button @click="goBack">Back</b-button>
		</b-col>
	</div>
</template>

<script>
import { defaultLat, defaultLng } from "@/helpers/coordinates.js";
export default {
	props: {
		name: String,
		searchArea: Array,
	},
	data() {
		return {
			// 	searchArea: [
			// 		{
			// 			lat: "",
			// 			lng: "",
			// 		},
			// 	],
		};
	},

	methods: {
		goBack() {
			this.$emit("goBack");
		},
		add() {
			let newSearchArea = this.searchArea;
			newSearchArea.push({ lat: defaultLat, lng: defaultLng });
			this.$emit("updateWidgetData", "searchArea", newSearchArea);
		},
		remove(index) {
			let newSearchArea = this.searchArea;
			newSearchArea.splice(index, 1);
			this.$emit("updateWidgetData", "searchArea", newSearchArea);
		},
	},
};
</script>

<style scoped>
.btns {
	margin-left: 10px;
}
</style>