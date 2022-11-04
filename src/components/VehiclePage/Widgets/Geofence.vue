<template>
    <b-container>
        <b-button class="back-button" @click="goBackReset">Back</b-button>
        <h2>
            <!-- Setting up Header for Vehicle -->
            <svg
                class="vehicleImg"
                v-if="path && fillColor"
                viewBox="0 0 100 100"
            >
                <path :d="path" :fill="fillColor" />
            </svg>
            <!-- vehicleName and name prop -->
            {{ vehicleName }} {{ name }}
        </h2>
        <b-row>
            <!-- Squares to hold information in -->
            <b-card class="cartCards">
                <Workspace
                    ref="Workspace"
                    :geofenceWorkspace="geofenceWorkspace"
                    @addGeofencePolygon="addGeofencePolygon"
                    @updateWidgetData="updateWidgetData"
                    style="width: 100%"
                />
            </b-card>
        </b-row>
        <!-- Squares to hold information in -->
        <b-row class="cart">
            <b-col style="padding: 0 10px 0 0">
                <!-- Creating "Keep In" Zones -->
                <b-card class="cartCards">
                    <h5>Keep In</h5>
                    <div class="cont">
                        <!-- Buttons to change polygon-->
                        <Cart
                            :polygons="keepInPolygons"
                            :keepIn="true"
                            @deletePolygon="deletePolygon"
                            @editPolygon="editPolygon"
                        />
                    </div>
                </b-card>
            </b-col>
            <!-- Creating "Keep Out" Zones -->
            <b-col style="padding: 0 0 0 10px">
                <b-card class="cartCards">
                    <h5>Keep Out</h5>
                    <div class="cont">
                        <!-- Buttons to change polygon-->
                        <Cart
                            :polygons="keepOutPolygons"
                            :keepIn="false"
                            @deletePolygon="deletePolygon"
                            @editPolygon="editPolygon"
                        />
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <!-- Row under top carts for delete and submit buttons-->
        <b-row class="deletesubmit-buttons">
            <DeleteSubmit
                :name="name"
                :vehicleName="vehicleName"
                :geofence="geofence"
                @updateWidgetData="updateWidgetData"
                @goBackSubmit="goBackSubmit"
            />
        </b-row>
    </b-container>
</template>

<script>
import Workspace from "@/components/VehiclePage/Widgets/Geofence/Workspace.vue";
import Cart from "@/components/VehiclePage/Widgets/Geofence/Cart.vue";
import DeleteSubmit from "@/components/VehiclePage/Widgets/Geofence/DeleteSubmit.vue";

export default {
    props: {
        name: String,
        vehicleName: String,
        vehicleIcon: Object,
        geofence: Array,
        geofenceWorkspace: Object,
    },
    components: {
        Workspace,
        Cart,
        DeleteSubmit,
    },
    data() {
        return {
            initialGeofence: null,
        };
    },
    mounted() {
        this.initialGeofence = [...this.geofence];
    },
    computed: {
        path() {
            if (!this.vehicleIcon) return null;
            return this.vehicleIcon.path;
        },
        fillColor() {
            if (!this.vehicleIcon) return null;
            return this.vehicleIcon.fillColor;
        },
        // Returns all KeepIn polygons by indexing through geofence array
        keepInPolygons() {
            if (!this.geofence) return null;
            let polygons = [];
            for (let i = 0; i < this.geofence.length; i++) {
                let current = {
                    coordinates: this.geofence[i],
                    index: i,
                };
                if (current.coordinates["keep_in"] == true) {
                    polygons.push(current);
                }
            }
            return polygons;
        },
        // Returns all KeepOut polygons by indexing through geofence array
        keepOutPolygons() {
            if (!this.geofence) return null;
            let polygons = [];
            for (let i = 0; i < this.geofence.length; i++) {
                let current = {
                    coordinates: this.geofence[i],
                    index: i,
                };
                if (current.coordinates["keep_in"] == false) {
                    polygons.push(current);
                }
            }
            return polygons;
        },
    },
    methods: {
        goBackReset() {
            this.$refs.Workspace.resetCoordinates();
            this.$emit("updateWidgetData", "geofence", this.initialGeofence);
            this.$emit("goBack");
        },
        goBackSubmit() {
            this.$refs.Workspace.resetCoordinates();
            this.$emit("goBack");
        },
        // Adds polygon to given array and at index.
        addGeofencePolygon(geofencePolygon, index) {
            let newGeofence = this.geofence;
            if (index == null) {
                newGeofence.push(geofencePolygon);
            } else {
                newGeofence.splice(index, 0, geofencePolygon);
            }
            this.$emit("updateWidgetData", "geofence", newGeofence);
        },
        updateWidgetData(widgetType, value) {
            this.$emit("updateWidgetData", widgetType, value);
        },
        // Deletes polygon to at index in geofence array.
        deletePolygon(index) {
            let newGeofence = this.geofence; // create a copy of the current geofence
            newGeofence.splice(index, 1); // modify it/ removing
            this.$emit("updateWidgetData", "geofence", newGeofence); // pass it up with updateWidgetData
        },
        editPolygon(index, keep_in) {
            this.$emit(
                "updateWidgetData",
                "geofenceWorkspace",
                this.geofence[index]
            );
            this.$refs.Workspace.keep_in = keep_in;
            this.$refs.Workspace.polygonIndex = index;
            this.deletePolygon(index);
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

.deletesubmit-buttons {
    position: absolute;
    bottom: 20px;
    right: 25px;
}

.cartCards {
    background: #f3f3f3;
}

.cart {
    padding-top: 20px;
}

.cont {
    height: calc(45vh - 200px);
    overflow: auto;
}
.vehicleImg {
    width: 50px;
    height: 50px;
    margin-top: -8px;
    margin-right: 10px;
}
</style>
