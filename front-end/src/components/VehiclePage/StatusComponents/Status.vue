<template>
    <b-container class="status-container">
        <!-- Status -->
        <b-row class="justify-content-md-center">
            <b-col>
                <b-row class="justify-content-md-center"><h3>Status</h3></b-row>
                <b-row class="status justify-content-md-center">
                    {{ status }}
                    <p class="StatusIcon">
                        <b-icon
                            icon="circle-fill"
                            v-if="status_ == 1"
                            variant="success"
                        ></b-icon>
                        <b-icon
                            icon="circle-fill"
                            v-if="status_ == 2"
                            variant="warning"
                        ></b-icon>
                        <b-icon
                            icon="circle-fill"
                            v-if="status_ == 3"
                            variant="danger"
                        ></b-icon>
                        <b-icon
                            icon="circle-fill"
                            v-if="status_ == 4"
                            variant="primary"
                        ></b-icon>
                        <b-icon
                            icon="circle-fill"
                            v-if="status_ == 5"
                            variant="secondary"
                        ></b-icon>
                    </p>
                </b-row>
            </b-col>
        </b-row>

        <!-- Sensors -->
        <b-row class="justify-content-md-center">
            <b-col>
                <b-row class="justify-content-md-center"
                    ><h3>Sensors</h3></b-row
                >
                <b-row class="status justify-content-md-center">
                    {{ sensors }}
                    <p class="SensorIcon">
                        <b-icon
                            icon="circle-fill"
                            v-if="functional == 1"
                            variant="success"
                        ></b-icon>
                        <b-icon
                            icon="circle-fill"
                            v-if="functional == 2"
                            variant="warning"
                        ></b-icon>
                        <b-icon
                            icon="circle-fill"
                            v-if="functional == 3"
                            variant="danger"
                        ></b-icon>
                        <b-icon
                            icon="circle-fill"
                            v-if="functional == 4"
                            variant="primary"
                        ></b-icon>
                        <b-icon
                            icon="circle-fill"
                            v-if="functional == 5"
                            variant="secondary"
                        ></b-icon>
                    </p>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: {
        vehicleData: Object,
    },
    data() {
        return {
            status_: null,
            functional: null,
        };
    },
    computed: {
        status() {
            if (!this.vehicleData) return 0;

            this.status_ = this.vehicleData["status"];
            if (this.status_ == 1) return "unactive";
            else if (this.status_ == 2) return "Waiting";
            else if (this.status_ == 3) return "Active";
            else if (this.status_ == 4) return "unknown 1";
            else if (this.status_ == 5) return "unknown 2";
        },
        sensors() {
            if (!this.vehicleData) return 0;
            this.functional = this.vehicleData["sensors_ok"];
            if (this.functional == 1) return "Functional";
            else if (this.functional == 2) return "Functional";
            else if (this.functional == 3) return "Functional";
            else if (this.functional == 4) return "Functional";
            else if (this.functional == 5) return "Functional";
        },
    },
};
</script>

<style scoped>
.StatusIcon .b-icon {
    margin-left: 10px;
}
.SensorIcon .b-icon {
    margin-left: 10px;
}
h3 {
    text-decoration: underline;
}
.status {
    font-size: 15pt;
}
</style>