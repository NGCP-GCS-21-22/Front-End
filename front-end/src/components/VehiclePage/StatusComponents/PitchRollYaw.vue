<template>
  <div>
    <b-col>
      <b-row class="font" id="top"> Pitch: {{ pitch }}</b-row>
      <b-row class="font"> Roll: {{ roll }} </b-row>
      <b-row class="font"> Yaw: {{ yaw }} </b-row>
    </b-col>
  </div>
</template>

<script>
export default {
  props: {
    pitch: Number,
    roll: Number,
    yaw: Number,
  },
};
</script>

<style>
.font {
  font-weight: bold;
  font-size: 18px;
}
#top{
  margin-top: 25px;
}
</style>