<template>
    <Heading :size="170" :heading="heading" />
</template>

<script>
import { Heading } from "vue-flight-indicators";
export default {
    props: {
        heading: Number,
    },
    components: {
        Heading,
    },
};
</script>

<style>
</style>