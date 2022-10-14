<template>
	<div>
		<b-navbar id="nav" toggleable="lg" type="dark">
			<b-img style="width: 75px; padding-left: 15px;" :src="require('@/assets/ngcp.png')"></b-img>
			<div class="nav-title">Ground Control Station</div>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-navbar-nav class="ml-auto">
				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item :active="$route.name == 'Main'">
							<b-link to="/gcs/main">Main</b-link>
						</b-nav-item>
						<b-nav-item :active="$route.name == 'MAC'">
							<b-link to="/gcs/mac">MAC</b-link>
						</b-nav-item>
						<b-nav-item :active="$route.name == 'ERU'">
							<b-link to="/gcs/eru">ERU</b-link>
						</b-nav-item>
						<b-nav-item :active="$route.name == 'MEA'">
							<b-link to="/gcs/mea">MEA</b-link>
						</b-nav-item>
						<!-- <b-nav-item :active="$route.name == 'Form'">
              <b-link to="/form">Form</b-link>
            </b-nav-item> -->
					</b-navbar-nav>
				</b-collapse>
			</b-navbar-nav>
		</b-navbar>
		<router-view></router-view>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style scoped>
#nav {
	background-color: #011949;
	padding: 8px;
	width: 100%;
	height: 8vh;
}

#nav a {
	padding: 5px 20px;
	text-decoration: none;
	color: rgb(226, 226, 226);
	font-size: 25pt;
	font-weight: 400;
}

#nav a.router-link-exact-active {
	color: #61a3ff;
	text-decoration: underline;
}

#nav a:hover {
	color: rgb(144, 165, 209);
}

.nav-title {
	font-size: 18pt;
	padding-left: 25px;
	font-weight: 400;
	/* margin: auto; */
	color: rgb(226, 226, 226);
}
</style>
