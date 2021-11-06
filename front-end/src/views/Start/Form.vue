<template>
    <div>
        <h1>the form!!!</h1>
        <b-button @click="goToGCS"> go to GCS</b-button>
    </div>
</template>

<script>
export default {
    methods: {
        goToGCS() {
            this.$router.push("/gcs/main")
        }
    }
}
</script>

<style>

</style>