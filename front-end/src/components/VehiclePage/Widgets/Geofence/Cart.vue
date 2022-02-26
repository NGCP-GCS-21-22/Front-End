<template>
	<b-container>
		<h5 v-for="(polygon, index) in polygons" :key="index">
			Polygon {{ polygon.index + 1 }}
			<b-button
				pill
				@click="deletePolygon"
				variant="light"
				size="sm"
			>
				<b-icon
					icon="dash-circle"
					variant="danger"
					font-scale="1"
					aria-label="Delete"
				></b-icon>
			</b-button>
			<b-button
				pill
				@click="editPolygon"
				variant="light"
				size="sm"
			>
				<b-icon
					icon="pencil"
					variant="info"
					font-scale="1"
					aria-label="Edit"
				></b-icon>
			</b-button>
		</h5>
	</b-container>
</template>

<script>
export default {
	props: {
		polygons: Array,
	},
	data() {
		return {}
	},
	methods: {
		deletePolygon(index) {
			this.$emit("deletePolygon", index)
		},
		editPolygon(index) {
			this.$emit("editPolygon", index)
		},
	},
}
</script>

<style></style>
