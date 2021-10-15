<template>
  <div id="app">
    <!-- POST -->
    <Post />
  </div>
</template>

<script>

import BootTest from "@/components/BootTest.vue"
import Post from "@/components/Post.vue"

export default {
  data()
  {
    return{
      vehicle_name: null,
    }
  },
  name: 'App',
  components: {
    BootTest,
    Post
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
