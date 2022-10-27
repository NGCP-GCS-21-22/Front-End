<template>
    <div>
        <b-row class="justify-content-md-center">
            <h5>Yaw: {{ heading }}</h5>
        </b-row>
        <b-row class="justify-content-md-center">
            <Heading :size="150" :heading="heading" class="dial" />
        </b-row>
    </div>
</template>

<script >
import { Heading as Heading } from "vue-flight-indicators";
export default {
    props: {
        heading: Number,
    },
    components: {
        Heading,
    },
};
</script>

<style scoped>
h5 {
    background: #343a40;
    margin: 0;
    padding: 3px 10px;
    color: #ffffff;
    border-radius: 3px;
    border: 1px solid rgb(121, 112, 99);
}

.dial {
    margin-top: -8px;
}
</style>