<template>
    <div>
        <b-container class="emergency-button-container">
            <b-button
                class="emergency-button"
                style="font-weight: bold"
                @click="eModalShow = !eModalShow"
                variant="danger"
            >
                EMERGENCY STOP ALL VEHICLES
                <b-img
                    style="padding-left: 5px; width: 42px; color: #ffffff"
                    :src="require('@/assets/stop.png')"
                ></b-img>
            </b-button>
        </b-container>
        <b-modal
            centered
            v-model="eModalShow"
            hide-footer
            title="Emergency Stop"
        >
            <h3>Send Emergency Stop Command?</h3>
            <b-row>
                <b-col>
                    <b-button
                        variant="danger"
                        block
                        @click="eModalShow = !eModalShow"
                    >
                        No
                    </b-button>
                </b-col>
                <b-col>
                    <b-button
                        variant="success"
                        block
                        @click="sendEmergencyStopCommand"
                    >
                        Yes
                    </b-button>
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            eModalShow: false,
        };
    },
    methods: {
        sendEmergencyStopCommand() {
            this.eModalShow = !this.eModalShow;
            const path = "http://localhost:5000/send";

            // MAC
            let payload = {
                id: "Stage Selection",
                data: {
                    current_stage: -1,
                    stage_name: "Emergency Stop",
                    vehicle_name: "MAC",
                    estop: true,
                },
            };
            axios
                .post(path, payload)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            // ERU
            payload = {
                id: "Stage Selection",
                data: {
                    current_stage: -1,
                    stage_name: "Emergency Stop",
                    vehicle_name: "ERU",
                    estop: true,
                },
            };
            axios
                .post(path, payload)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            // MEA
            payload = {
                id: "Stage Selection",
                data: {
                    current_stage: -1,
                    stage_name: "Emergency Stop",
                    vehicle_name: "MEA",
                    estop: true,
                },
            };
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

<style scoped>
.emergency-button-container {
    width: 100%;
    padding-top: 10px;
}
.emergency-button {
    /* width: 100%; */
    height: 50px;
}
</style>