<template>
    <Altimeter :size="260" :altitude="altitude" />
</template>

<script >
import { Altimeter } from "vue-flight-indicators";
export default {
    props: {
        altitude: Number,
    },
    components: {
        Altimeter,
    },
};
</script>

<style scoped>

</style>