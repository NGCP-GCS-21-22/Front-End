<template>
    <div>
        <h1>Main Page</h1>
        <b-button @click="createNew">create new</b-button>
        <b-button @click="loadOld">2nd button</b-button>
    </div>
    
</template>

<script>
export default {
    methods: {
        createNew() {
            this.$router.push("/form")
        },
        loadOld() {
            // show list of missions
            // where the user can click/select the one to load
            this.$router.push("/missions")
        }
    }
}
</script>

<style scoped>

</style>