<template>
    <b-container class="container">
        <h3>Error Messages</h3>
        <b-container class="
                messages
                w-100
                p-4
                d-flex
                align-items-center
                justify-content-center
            ">
            {{ errorMessage }}
        </b-container>
    </b-container>
</template>

<script lang="ts">import { defineComponent } from 'vue';

//setting up the vehicle data for computing
export default defineComponent({
    props: {
        vehicleData: Object,
    },
    //If the vehicle data does not return good data, an error message will be returned
    computed: {
        errorMessage(): string {
            if (!this.vehicleData) return "-----";
            return this.vehicleData["err_msg"];
        },
    },
});
</script>

<style scoped>
h3 {
    text-decoration: underline;
}

/* //Creating the container for the message */
.container {
    padding: 15px 0px 0px 0px;
    height: 7vh;
    width: 100%;
}

/* //Formatting/Style for the message */
.messages {
    background: #f3f3f3;
    font-size: 15pt;
    /* height: 10vh;
    width: 10vw; */
    padding: 10px;
    border: 2px solid #eeeeee;
    border-radius: 2%;
}
</style>
