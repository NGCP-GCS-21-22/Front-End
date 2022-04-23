<template>
    <Airspeed :size="250" :airspeed="airspeed" />
</template>

<script>
import { Airspeed } from "vue-flight-indicators";
export default {
    props: {
        airspeed: Number,
    },
    components: {
        Airspeed,
    },
};
</script>

<style>
</style>