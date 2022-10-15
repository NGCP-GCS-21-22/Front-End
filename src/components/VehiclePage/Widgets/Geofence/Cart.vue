<template>
	<div	>
		<h5 v-for="(polygon) in polygons" :key="polygon.index">
			Polygon {{ polygon.index + 1 }}
			<b-button
				@click="deletePolygon(polygon.index)"
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
			<b-button
				@click="editPolygon(polygon.index)"
				variant="light"
				size="sm"
				class="btn"
			>
				<b-icon
					icon="pencil"
					variant="info"
					font-scale="1"
					aria-label="Edit"
				></b-icon>
			</b-button>
		</h5>
	</div>
</template>

<script>
export default {
	props: {
		polygons: Array,
		keepIn: Boolean,
	},
	data() {
		return {}
	},
	methods: {
		deletePolygon(index) {
			this.$emit("deletePolygon", index)
		},
		editPolygon(index) {
			this.$emit("editPolygon", index, this.keepIn)
		},
	},
}
</script>

<style scoped>
.btn {
	background: #ffffff;
	margin-left: 5px;
	border: 1px solid #CED4DA;
	border-radius: 100%;
}
</style>
