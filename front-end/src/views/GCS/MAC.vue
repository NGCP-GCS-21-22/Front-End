<template>
	<b-container class="mac-container">
		<b-row class="mac-row">
			<!-- left column -->
            <b-col class="left-column" cols="7">
                <b-img
                    class="map-image"
                    :src="require('@/assets/map.png')"
                    rounded
                    alt="map pic"
                ></b-img>
            </b-col>

            <!-- right column -->
            <b-col cols="5">
                <b-row>
                    <!-- A Card with dummy data for Status MAC -->
                    <Status />
                </b-row>
                <b-row>
                    <Widgets />
                </b-row>
            </b-col>
		</b-row>
	</b-container>
</template>

<script>
import Status from "@/components/VehiclePage/Status.vue";
import Widgets from "@/components/VehiclePage/Widgets.vue";

export default {
	components: {
		Status,
		Widgets,
	},
};
</script>

<style scoped>
.map-image {
	max-height: 90vh;
	margin: auto;
}
.mac-container {
	max-width: 100%;
	max-height: 100%;
}
</style>