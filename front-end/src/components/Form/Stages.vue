<template>
<div>
  <b-col>
      <b-row>
          <h4 class="text-left font-weight-bold">Stages</h4>
      </b-row>
      <b-row>
          <b-form-input v-model="id" placeholder="Enter Id/Number"></b-form-input>
          <!-- for testing purpose only -->
          <div class="mt-2">Value Entered: {{ id }}</div>
      </b-row>
      <b-row>
          <b-form-input v-model="stage" placeholder="Enter Name of Stage"></b-form-input>
          <!-- for testing purpose only -->
          <div class="mt-2">Stage Name: {{ stage }}</div>
      </b-row>
  </b-col>
</div>
</template>

<script>
export default {
    data() {
      return {
        id: '',
        stage: ''
      };
    }

}
</script>

<style scoped>

</style>