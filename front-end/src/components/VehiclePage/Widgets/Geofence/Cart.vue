<template>
	<b-container>
		<h5 v-for="(polygon, index) in polygons">
			Polygon {{ polygon.index + 1 }}
			<b-icon
				icon="dash-circle"
				variant="danger"
				font-scale="1"
				aria-label="Delete"
				@click="deletePolygon"
			></b-icon>
			<b-icon
				icon="pencil"
				variant="info"
				font-scale="1"
				aria-label="Edit"
				@click="editPolygon"
			></b-icon>
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
		deletePolygon() {
			this.$emit("deletePolygon", index)
		},
		editPolygon() {
			this.$emit("editPolygon", index)
		},
	},
}
</script>

<style></style>
