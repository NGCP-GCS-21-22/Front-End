<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Form from "@/views/Start/Form.vue";
export default {
	components: {
		Navbar,
		Form,
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
	padding: 0; margin: 0;
	overflow-x: hidden;
	overflow-y: hidden;
}

h1 {
	color: #000000;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
