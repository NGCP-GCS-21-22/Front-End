<template>
	<div>
		<b-navbar id="nav" toggleable="lg" type="dark">
            <b-img style="width: 4%" :src="require('../assets/ngcp.png')" ></b-img>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-navbar-nav class="ml-auto">
				<b-collapse id="nav-collapse" is-nav right>
					<b-navbar-nav>
						<b-nav-item href="#/">Main</b-nav-item>
						<b-nav-item href="#/mac">MAC</b-nav-item>
						<b-nav-item href="#/eru">ERU</b-nav-item>
						<b-nav-item href="#/mea">MEA</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar-nav>
		</b-navbar>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	data() {
		return {
			stage: "[Stage]",
			vehicle: "[Vehicle]",
		}
	},
	methods: {
		setGeneralStage(stage, vehicle) {
			this.stage = stage
			this.vehicle = vehicle
			//console.log(stage);
			//console.log("a nice hot cup of tea");
			this.$forceUpdate()
		},
	},
}
</script>
<style scoped>
#nav {
	background-color: #011949;
    padding: 8px;
}
#nav a {
	padding: 5px 20px;
	text-decoration: none;
	color: white;
    font-size: 18pt;
    font-family: Helvetica;
    font-weight: 400;
}
#nav a.router-link-exact-active, #nav a:active {
	color: white;
	background-color: gray;
}
#nav a:hover {
	background-color: rgb(49, 68, 109);
}
</style>
