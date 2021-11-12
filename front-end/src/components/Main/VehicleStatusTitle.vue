<template>
  <b-row>
    <h2 align="left">{{ vehicleName }} Status</h2>
    <b-img class="vehicleImg" :src="vehicleImgPath"> </b-img>
  </b-row>
</template>

<script>
export default {
  props: {
    vehicleName: String,
  },
  computed: {
    vehicleImgPath() {
      return require(`@/assets/${this.vehicleName}.png`);
    },
  },
};
</script>

<style scoped>
.vehicleImg {
  width: 65px;
  height: 65px;
  margin-top: -15px;
  float: left;
}
</style>