<template>
    <Attitude :size="250" :pitch="pitch" :roll="roll" />
</template>

<script>
import { Attitude } from "vue-flight-indicators";
export default {
    props: {
        pitch: Number,
        roll: Number,
        vehicleData: Object,
    },
    components: {
        Attitude,
    },
};
</script>

<style>
</style>