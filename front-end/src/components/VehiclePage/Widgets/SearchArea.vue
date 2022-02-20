<template>
	<div>
		<b-button class="back-button" @click="goBack">Back</b-button>
		<h2>{{ name }}</h2>
		<b-row>
			<b-col offset="1" cols="4">
				<label>Latitude</label>
			</b-col>
			<b-col cols="4">
				<label>Longitude</label>
			</b-col>
		</b-row>
		<b-row
			v-for="(coordinate, index) in searchArea"
			:key="index"
			style="margin-bottom: 10px"
		>
			<!-- Input Text field -->
			<b-input-group>
				<b-col cols="1" class="coordNum">
					{{index+1}}
				</b-col>
				<b-col cols="4">
					<b-form-input
						type="text"
						v-model="coordinate.lat"
						placeholder="Enter Latitude"
					></b-form-input>
				</b-col>
				<b-col cols="4">
					<b-form-input
						type="text"
						v-model="coordinate.lng"
						placeholder="Enter Longitude"
					></b-form-input>
				</b-col>

				<b-col cols="3">
					<b-row>
						<!-- Reset button -->
						<b-button
							pill
							@click="resetCoordinate(index)"
							v-show="index || (!index && searchArea.length > 1)"
							variant="light"
							size="sm"
							class="btn"
						>
							<b-icon
								icon="arrow-counterclockwise"
								variant="primary"
								font-scale="1"
								aria-label="Delete"
							></b-icon>
						</b-button>

						<!-- Remove button -->
						<b-button
							pill
							@click="remove(index)"
							v-show="index || (!index && searchArea.length > 1)"
							variant="light"
							size="sm"
							class="btn"
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
							@click="add(index)"
							variant="light"
							size="sm"
							class="btn"
						>
							<b-icon
								icon="plus-circle"
								variant="success"
								font-scale="1"
								aria-label="Add"
							></b-icon>
						</b-button>
					</b-row>
				</b-col>
			</b-input-group>
		</b-row>
		<b-row class="row" style="float: right">
			<b-button class="button" @click="resetSearchArea">Reset</b-button>
			<b-button
				class="button"
				variant="success"
				:disabled="searchAreaNotChanged() || searchArea.length < 3"
				@click="postData"
				>Submit</b-button
			>
		</b-row>
	</div>
</template>

<script>
import {
	defaultLat,
	defaultLng,
	defaultSearchArea,
} from "@/helpers/coordinates.js";
import axios from "axios";

export default {
	props: {
		name: String,
		searchArea: Array,
	},
	data() {
		return {
			initialSearchArea: this.searchArea,
		};
	},

	methods: {
		goBack() {
			this.resetSearchArea();
			this.$emit("goBack");
		},
		add(index) {
			let newSearchArea = this.searchArea;
			newSearchArea.splice(index + 1, 0, { lat: defaultLat, lng: defaultLng });
			this.$emit("updateWidgetData", "searchArea", newSearchArea);
		},
		remove(index) {
			let newSearchArea = this.searchArea;
			newSearchArea.splice(index, 1);
			this.$emit("updateWidgetData", "searchArea", newSearchArea);
		},
		resetCoordinate(index) {
			let newSearchArea = this.searchArea;
			newSearchArea[index] = {
				lat: defaultLat,
				lng: defaultLng,
			};

			this.$emit("updateWidgetData", "searchArea", newSearchArea);
		},
		resetSearchArea() {
			let newSearchArea = defaultSearchArea;
			this.$emit("updateWidgetData", "searchArea", newSearchArea);
		},
		searchAreaNotChanged() {
			for (let i = 0; i < this.searchArea.length; i++) {
				if (
					this.searchArea[i].lat != this.initialSearchArea[i].lat &&
					this.searchArea[i].lng != this.initialSearchArea[i].lng
				) {
					return false;
				}
			}

			return true;
		},
		postData() {
			this.initialSearchArea = this.searchArea;
			const path = "http://localhost:5000/postSearchArea"
			axios.post(path, this.searchArea)
			.then((response) => {
				console.log(response);
			})
			.catch((error)=>{
				console.log(error);
			});
		},
	},
};
</script>

<style scoped>
.btn {
	margin-left: 5px;
}
.btn:last-child {
	margin-right: 0px;
}
.back-button {
	position: absolute;
	top: 20px;
	left: 20px;
}

.coordNum {
	padding-top: 7px;
	text-align: right;
}
</style>