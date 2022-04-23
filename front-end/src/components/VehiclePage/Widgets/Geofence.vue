<template>
    <b-container>
        <b-button class="back-button" @click="goBack">Back</b-button>
        <h2>
            <svg
                class="vehicleImg"
                v-if="path && fillColor"
                viewBox="0 0 100 100"
            >
                <path :d="path" :fill="fillColor" />
            </svg>
            {{ vehicleName }} {{ name }}
        </h2>
        <b-row>
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
        <b-row class="cart">
            <b-col style="padding: 0 10px 0 0">
                <b-card class="cartCards">
                    <h5>Keep In</h5>
                    <div class="cont">
                        <Cart
                            :polygons="keepInPolygons"
                            :keepIn="true"
                            @deletePolygon="deletePolygon"
                            @editPolygon="editPolygon"
                        />
                    </div>
                </b-card>
            </b-col>
            <b-col style="padding: 0 0 0 10px">
                <b-card class="cartCards">
                    <h5>Keep Out</h5>
                    <div class="cont">
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
        <b-row class="deletesubmit-buttons">
            <DeleteSubmit
                :name="name"
                :vehicleName="vehicleName"
                :geofence="geofence"
                @updateWidgetData="updateWidgetData"
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
        goBack() {
            this.$refs.Workspace.resetCoordinates();
            this.$emit("updateWidgetData", "geofence", this.initialGeofence);
            this.$emit("goBack");
        },
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
