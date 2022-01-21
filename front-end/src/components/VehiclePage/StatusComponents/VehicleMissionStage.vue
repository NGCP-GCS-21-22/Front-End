<template>
  <b-containter>
    <b-row no-gutters>
      <b-col align="center" style="margin-left: 10px;">
        <h3 style="font-weight: bold; color: #B4A4A4">
          Vehicle Mission Stage
        </h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col align="center" style="margin-left: 10px;">
        <h4 style="color: #7E7B7B">
          {{ stage }}
        </h4>
      </b-col>
    </b-row>
  </b-containter>
</template>

<script>
export default {
  props: {
    stage: String,
  },
};
</script>

<style>
</style>