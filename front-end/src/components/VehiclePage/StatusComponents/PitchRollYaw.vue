<template>
  <b-col >
    <b-row class="font">
    Pitch: {{pitch}} 
    </b-row>
    <b-row class="font">
       Roll: {{ roll }}
    </b-row>
    <b-row class="font">
      Yaw: {{ yaw }}
    </b-row>
  </b-col>
</template>

<script>
export default {
  props:{
    pitch: Number,
    roll: Number,
    yaw: Number
  },

}
</script>

<style>
.font {
  font-weight: bold;
  font-size: 20px;
}
</style>