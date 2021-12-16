<template>
  <b-col>
    <b-row>
    Pitch: {{pitch}} 
    </b-row>
    <b-row>
       Roll: {{ roll }}
    </b-row>
    <b-row>
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

</style>