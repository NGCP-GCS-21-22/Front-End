<template>
  <b-row no-gutters>
    <b-col align="left" style="margin-left: 10px;">
      Vehicle Mission Stage <br/>
      {{stage}}
    </b-col>
  </b-row>
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