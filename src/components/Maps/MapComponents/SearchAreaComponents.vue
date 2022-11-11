<template>
    <div v-if="searchArea && vehicleName =='MAC'">
        <div v-if="widgetTypeSelected == 'SearchArea'">
            <!-- Search Area for the MAC is selected -->
            <!-- v-if search selected v-for number of points in UI, create marker -->
            <div>
                <GmapMarker
                    :key="coordinate.id"
                    v-for="(coordinate, index) in searchAreaPolygon.coordinates"
                    :position="{ lat: coordinate.lat, lng: coordinate.lng }"
                    :draggable="true"
                    :zIndex="1000"
                    :label="{
                        color: '#000',
                        fontSize: '12px',
                        fontWeight: '600',
                        text: `${index + 1}`,
                    }"
                    @drag="moveSearchAreaVertex($event, coordinate.id)"
                />
            </div>
        </div>
        <!-- polygon -->
        <GmapPolygon
            :path="searchAreaPolygon.coordinates"
            :clickable="false"
            :options="searchAreaOptions"
        />
    </div>
</template>

<script>
export default {
    props: {
        widgetData: Object,
        widgetTypeSelected: String,
        vehicleName: String,
    },
    computed: {
        searchArea() {
            if (!this.widgetData.searchArea) return null;

            return this.widgetData.searchArea.map((coordinate) => {
                return {
                    lat: parseFloat(coordinate.lat),
                    lng: parseFloat(coordinate.lng),
                }; // uses parseFloat to ensure the values are converted to a number
            });
        },
        searchAreaPolygon() {
            if (!this.searchArea)
                return {
                    id: "searchArea",
                    coordinates: this.paths,
                    draggable: this.widgetTypeSelected === "SearchArea",
                };

            let coordinates = [];
            this.searchArea.forEach((element, index) => {
                let coordinate = {
                    id: index,
                    lat: element.lat,
                    lng: element.lng,
                };
                coordinates.push(coordinate);
            });
            return {
                id: "searchArea",
                coordinates: coordinates,
                draggable: this.widgetTypeSelected === "SearchArea",
            };
        },
    },
    data() {
        return {
            searchAreaOptions: {
                strokeColor: "#0000FF",
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: "#0000FF",
                fillOpacity: 0.6,
            },
        };
    },
    methods: {
        isSelected(marker) {
            if (!marker || !marker.draggable) return false;
            return true;
        }, // return true if user clicked on a marker that is draggable
        moveSearchAreaVertex(e, index) {
            this.searchAreaPolygon.coordinates[index].lat = e.latLng.lat();
            this.searchAreaPolygon.coordinates[index].lng = e.latLng.lng();
            this.$emit(
                "moveMarker",
                "searchArea",
                this.searchAreaPolygon.coordinates
            );
        }, // updates latitude and longitude based on event of moving the mouse
    },
};
</script>

<style scoped>
</style>
