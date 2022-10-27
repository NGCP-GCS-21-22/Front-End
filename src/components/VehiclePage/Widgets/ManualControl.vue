<template>
    <div>
        <b-button class="back-button" @click="goBack">Back</b-button>
        <h2>{{ name }}</h2>
        <div class="control">
            <h3>{{ vehicleName }} Mode:</h3>
            <span bg-variant="secondary" text-variant="white" class="mode">
                {{ mode }}
                <b-icon :icon="mode == 'Autonomous' ? 'cpu-fill' : 'controller'"></b-icon>
            </span>
        </div>

        <!-- //Setting the different modes for control - Automatic, and Manual. By default it's on Autonomous. -->
        <b-button v-if="mode == 'Autonomous'" class="switch-to-manual" variant="primary" @click="switchToManual">
            Switch to Manual
        </b-button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    //Different "object" names that will be used - name, VehicleName, and vehicleData.
    props: {
        name: String,
        vehicleName: String,
        vehicleData: Object,
    },
    computed: {
        //If data is not null, return the mode the vehicle is in.
        mode() {
            if (!this.vehicleData) return null;
            return this.vehicleData.mode;
        },
    },
    methods: {
        goBack() {
            this.$emit("goBack");
        },
        //Command to switch controls to manual. Will send a payload to the const path. That payload will switch the vehicle's mode
        switchToManual() {
            const path = "http://localhost:5000/send";
            let payload = {
                id: "Manual Control Override",
                data: {
                    vehicle_name: this.vehicleName,
                    mode: "Manual",
                },
            };
            console.log(payload);
            axios
                .post(path, payload)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
//Design and style for the back button
<style scoped>
.back-button {
    position: absolute;
    top: 20px;
    left: 20px;
}

.control {
    position: absolute;
    left: 50%;
    bottom: 20%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
}

.mode {
    font-size: 30pt;
}

/* Position for the swith to manual button */
.switch-to-manual {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, -50%);
    margin: 0 auto;
}
</style>
