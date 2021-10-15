<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <!-- POST -->
          <h2>Enter Your Vehicle Name</h2>
          <Post />
        </b-col>
        <br />
        <b-col>
          <!-- GET -->
          <h2>Return Vehicle Name</h2>
          <Get />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import Get from "@/components/Get.vue";

export default {
  data() {
    return {
      vehicle_name: null,
    };
  },
  name: "App",
  components: {
    Post,
    Get,
  },
};
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
