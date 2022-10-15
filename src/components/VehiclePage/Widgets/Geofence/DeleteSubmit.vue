<template>
    <div>
        <b-button
            @click="deleteModalShow = !deleteModalShow"
            variant="danger"
            class="button"
        >
            Delete All
        </b-button>
        <b-modal
            centered
            v-model="deleteModalShow"
            hide-footer
            :title="'Delete All'"
        >
            <h3>Delete {{ vehicleName }} Geofence?</h3>
            <b-row>
                <b-col>
                    <b-button
                        variant="danger"
                        block
                        @click="deleteModalShow = !deleteModalShow"
                    >
                        No
                    </b-button>
                </b-col>
                <b-col>
                    <b-button variant="success" block @click="deleteAll">
                        Yes
                    </b-button>
                </b-col>
            </b-row>
        </b-modal>

        <b-button
            @click="submitAll"
            :disabled="geofence.length == 0"
            variant="success"
            class="button"
        >
            Submit All
        </b-button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: {
        name: String,
        vehicleName: String,
        geofence: Array,
    },
    data() {
        return {
            deleteModalShow: false,
        };
    },
    methods: {
        deleteAll() {
            this.deleteModalShow = !this.deleteModalShow;
            const path = `http://localhost:5000/postGeofence/${this.vehicleName}`;
            let payload = {
                geofence: [],
            };
            axios
                .post(path, payload)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            this.$emit("updateWidgetData", "geofence", []);
        },
        submitAll() {
            const path = `http://localhost:5000/postGeofence/${this.vehicleName}`;
            let payload = {
                geofence: this.geofence,
            };
            axios
                .post(path, payload)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            this.$emit("goBackSubmit");
        },
    },
};
</script>

<style scoped>
.button {
    margin-left: 5px;
}
</style>