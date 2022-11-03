<template>
  <!-- if alignment is an issue, change this root to a div and remove b-row from MissionForm.vue -->
  <b-col>
    <b-row>
    <!-- attribute named "class" has value of left aligned text in bold, its content is mission waypoint -->
      <h4 class="text-left font-weight-bold">Mission Waypoint</h4>
    </b-row>

    <b-row>
      <div class="b-form-group" v-for="(input, k) in inputs" :key="k">
        <!-- Input Text field -->
        <b-form-input type="text" class="form-control" v-model="input.waypointName" placeholder="Enter Waypoint Name"
          width="20px"></b-form-input>
      </div>
    </b-row>
  </b-col>
</template>

<script lang="ts">
export default {
  data() {
    return {
      inputs: [
        {
          waypointName: "",  // set the waypoint name blank as default to take placeholder text "Enter Waypoint Name" 
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>