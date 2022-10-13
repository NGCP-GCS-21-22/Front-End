<template>
	<div>
		<!--toggle-->
		<b-form-group v-slot="{ ariaDescribedby }">
			<b-form-radio-group
				id="radio-slots"
				v-model="keep_in"
				:aria-describedby="ariaDescribedby"
				name="radio-options-slots"
				buttons
			>
				<b-form-radio
					:class="keep_in == true ? 'keep-in-selected' : 'toggle'"
					:value="true"
					>Keep In</b-form-radio
				>
				<b-form-radio
					:class="keep_in == false ? 'keep-out-selected' : 'toggle'"
					:value="false"
					>Keep Out</b-form-radio
				>
			</b-form-radio-group>
		</b-form-group>
		<!--Lat/Long Coord inputs-->
		<b-row>
			<b-col offset="1" cols="4">
				<label>Latitude</label>
			</b-col>
			<b-col cols="4">
				<label>Longitude</label>
			</b-col>
		</b-row>
		<div class="container">
			<b-row
				v-for="(coordinate, index) in coordinates"
				:key="index"
				style="margin-bottom: 10px"
			>
				<!-- Input Text field -->
				<b-input-group>
					<b-col cols="1" class="coordNum">
						{{ index + 1 }}
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
								@click="resetCoordinate(index)"
								v-show="
									index || (!index && coordinates.length > 1)
								"
								variant="light"
								size="sm"
								class="small-btn"
							>
								<b-icon
									icon="arrow-counterclockwise"
									variant="primary"
									font-scale="1"
									aria-label="Reset"
								></b-icon>
							</b-button>

							<!-- Remove button -->
							<b-button
								@click="remove(index)"
								v-show="
									index || (!index && coordinates.length > 1)
								"
								variant="light"
								size="sm"
								class="small-btn"
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
								@click="add(index)"
								variant="light"
								size="sm"
								class="small-btn"
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
		</div>
		<b-row class="row" style="float: right; padding-right: 10px">
			<b-button class="button" @click="resetCoordinates">Reset</b-button>
			<b-button
				class="button"
				variant="success"
				:disabled="keep_in == null || coordinates.length < 3"
				@click="addGeofencePolygon"
				>Add</b-button
			>
		</b-row>
	</div>
</template>

<script>
import {
	defaultLat,
	defaultLng,
	defaultPolygon,
} from "@/helpers/coordinates.js"
import axios from "axios"

export default {
	props: {
		geofenceWorkspace: Object, // coordinates, keep_in
	},
	data() {
		return {
			keep_in: null,
			polygonIndex: null
		}
	},
	computed: {
		coordinates() {
			if (!this.geofenceWorkspace) return null
			return this.geofenceWorkspace.coordinates
		},
	},
	// mounted() {
	//   this.$emit("updateWidgetData", "geofenceWorkspace", {
	//     coordinates: [...defaultPolygon],
	//     keep_in: true,
	//   });
	// },
	methods: {
		add(index) {
			let newCoordinates = this.coordinates
			newCoordinates.splice(index + 1, 0, {
				lat: defaultLat,
				lng: defaultLng,
			})
			this.updateGeofenceWorkspace(newCoordinates)
		},
		remove(index) {
			let newCoordinates = this.coordinates
			newCoordinates.splice(index, 1)
			this.updateGeofenceWorkspace(newCoordinates)
		},
		resetCoordinate(index) {
			let newCoordinates = this.coordinates
			newCoordinates[index] = {
				lat: defaultLat,
				lng: defaultLng,
			}

			this.updateGeofenceWorkspace(newCoordinates)
		},
		resetCoordinates() {
			let newCoordinates = [...defaultPolygon]
			this.keep_in = null
			this.updateGeofenceWorkspace(newCoordinates)
		},
		addGeofencePolygon() {
			let geofencePolygon = {
				coordinates: this.coordinates,
				keep_in: this.keep_in,
			}
			this.$emit("addGeofencePolygon", geofencePolygon, this.polygonIndex)
			this.resetCoordinates()
		},
		updateGeofenceWorkspace(newCoordinates) {
			let newGeofenceWorkspace = {
				coordinates: newCoordinates,
				keep_in: this.keep_in,
			}
			this.$emit(
				"updateWidgetData",
				"geofenceWorkspace",
				newGeofenceWorkspace
			)
		},
	},
}
</script>

<style scoped>
.small-btn {
	background: #ffffff;
	margin-left: 5px;
	border: 1px solid #CED4DA;
	border-radius: 100%;
}
.small-btn:last-child {
	margin-right: 0px;
}
.back-button {
	position: absolute;
	top: 20px;
	left: 20px;
}
.button {
	margin-right: 5px;
}

.coordNum {
	padding-top: 7px;
	text-align: right;
}
.container {
	overflow-y: auto;
	height: calc(45vh - 230px);
	margin-bottom: 15px;
}

.toggle {
	margin-right: 5px;
}

.keep-in-selected {
	background: green !important;
	margin-right: 5px;
}

.keep-out-selected {
	background: red !important;
	margin-right: 5px;
}
</style>
