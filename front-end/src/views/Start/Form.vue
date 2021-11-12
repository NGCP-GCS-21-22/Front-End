<template>
  <div>
    <h1>hello there</h1>
    <b-button @click="goToGCS"> go to GCS</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longitude: null,
      latitude: null,
    };
  },
  methods: {
    goToGCS() {
      this.$router.push("/gcs/main");
    },
  },
};
</script>

<style>
.btn-circle.btn-sm {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  font-size: 8px;
  text-align: center;
}
</style>