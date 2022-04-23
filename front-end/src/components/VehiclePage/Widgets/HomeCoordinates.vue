<template>
    <b-container>
        <b-button class="back-button" @click="goBack">Back</b-button>
        <h2 class="mx-auto">
            {{ name }}
            <b-img
                class="widget-icon"
                style="width: 40px; height: 40px"
                :src="require('@/assets/map_icons/home.png')"
            ></b-img>
        </h2>
        <div class="latlng-wrapper">
            <b-row>
                <b-col
                    class="latlng"
                    cols="3"
                    offset="2"
                    style="padding-top: 6.5px"
                    align="left"
                >
                    <label class="latlng-label">Latitude:</label>
                </b-col>

                <b-col cols="5">
                    <b-form-input
                        id="input-1"
                        v-model="homeCoordinates.lat"
                        type="email"
                        placeholder="Enter Latitude"
                        required
                    >
                    </b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col
                    class="latlng"
                    cols="3"
                    offset="2"
                    style="padding-top: 6.5px"
                    align="left"
                >
                    <label class="latlng-label">Longitude:</label>
                </b-col>

                <b-col cols="5">
                    <b-form-input
                        id="input-1"
                        v-model="homeCoordinates.lng"
                        type="email"
                        placeholder="Enter Longtitude"
                        required
                    >
                    </b-form-input>
                </b-col>
            </b-row>
        </div>

        <b-row class="buttons">
            <b-button class="button" @click="reset">Reset</b-button>
            <b-button
                class="button"
                variant="success"
                :disabled="waypointNotChanged()"
                @click="postData"
                >Submit</b-button
            >
        </b-row>
    </b-container>
</template>

<script>
import axios from "axios";
import { defaultLat, defaultLng } from "@/helpers/coordinates.js";
export default {
    props: {
        name: String,
        homeCoordinates: Object,
        vehicleName: String,
    },
    data() {
        return {
            initialHomeCoordinates: this.homeCoordinates,
        };
    },
    mounted() {
        this.initialHomeCoordinates = this.homeCoordinates;
        if (Object.keys(this.homeCoordinates).length == 0) {
            this.$emit("updateWidgetData", "homeCoordinates", {
                lat: defaultLat,
                lng: defaultLng,
            });
        }
    },
    methods: {
        goBack() {
            this.$emit(
                "updateWidgetData",
                "homeCoordinates",
                this.initialHomeCoordinates
            );
            this.$emit("goBack");
        },
        reset() {
            let coordinates = {
                lat: defaultLat,
                lng: defaultLng,
            };
            this.$emit("updateWidgetData", "homeCoordinates", coordinates);
        },
        waypointNotChanged() {
            if (
                this.homeCoordinates.lat == this.initialHomeCoordinates.lat &&
                this.homeCoordinates.lng == this.initialHomeCoordinates.lng
            ) {
                return true;
            }

            return false;
        },
        postData() {
            let path = `http://localhost:5000/postHomeCoordinates/${this.vehicleName}`;
            axios
                .post(path, payload)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            this.$emit("goBack");
        },
    },
};
</script>

<style scoped>
.back-button {
    position: absolute;
    top: 20px;
    left: 20px;
}
.latlng {
    margin-bottom: 10px;
}
.button {
    margin-right: 10px;
}
.widget-icon {
    height: 4vh;
}
.latlng-wrapper {
    padding-top: 12vh;
    /* padding-bottom: 10vh; */
    height: 20vh;
}

.buttons {
    position: absolute;
    bottom: 20px;
    right: 25px;
}

.latlng-label {
    font-size: 15pt;
}
</style>