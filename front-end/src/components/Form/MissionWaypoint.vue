<template>
	<!-- if alignment is an issue, change this root to a div and remove b-row from MissionForm.vue -->
	<b-col>
		<b-row>
			<h4 class="text-left font-weight-bold">Mission Waypoint</h4>
		</b-row>

		<b-row>
		<div class="b-form-group" v-for="(input, k) in inputs" :key="k">
		<!-- Input Text field -->
    <b-input-group>
			<b-form-input
				 type="text"
          class="form-control"
          v-model="input.waypointName"
          placeholder="Enter Waypoint Name"
          width="10px"
			></b-form-input>
<b-input-group-append>
			 <!-- Remove button -->

          <b-button pill
            @click="remove(k)"
            v-show="k || (!k && inputs.length > 1)"
            variant="light"
            size="sm"
            class="mb-2 float-right">
            <b-icon
              icon="dash-circle"
              variant="danger"
              font-scale="1"
              aria-label="Delete"
            ></b-icon>
          </b-button>

		  <!-- Add button -->
          <b-button pill
            @click="add(k)"
            v-show="k == inputs.length - 1"
            b-modal="k == inputs.length-1"
            variant="light"
            size="sm"
            class="mb-2 float-right">
            <b-icon
              icon="plus-circle"
              variant="success"
              font-scale="1"
              aria-label="Add"
            ></b-icon>
          </b-button>
        </b-input-group-append>
        </b-input-group>

         <!-- For testing purpose only -->
		  <div class="mt-2">Name Entered: {{ input }}</div>
      </div>
		</b-row>
	</b-col>
</template>

<script>
export default {
	data() {
		return {
			inputs: [
        {
          waypointName: "",
        },
      ],
		};
	},
	methods: {
    add(index) {
      this.inputs.push({ waypointName: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
  },
};
</script>

<style>
</style>