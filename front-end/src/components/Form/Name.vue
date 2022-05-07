<template>
	<b-form-input
		type="text"
		v-model="missionName"
		style="justify-content-md-center; color: black; width: 55vh; height: 5.5vh; font-size: 3.2vh; margin-bottom: 15px; margin-top: 3vh; margin-right: 5vh; margin-left: 7vh;"
		placeholder="Mission Name"
	>
	</b-form-input>
</template>

<script>
export default {
    data() {
        return {
            missionName: ""
        }
    }
};
</script>

<style scoped>
</style>