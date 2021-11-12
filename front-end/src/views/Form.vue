<template>
  <div>
    <b-container>
      <b-card style="max-width: 45rem">
        <b-row>
          <b-button style="height: 40px" size="sm" variant="outline-primary"
            >Back</b-button
          >
          <h1>{{ longitude }}</h1>

          <h1>MAC</h1>
        </b-row>
        <b-row>
          <p class="text-left font-weight-bold">Waypoints</p>
          <!-- Add and Delete icon -->

          <b-button pill variant="danger" size="sm" class="mb-2">
            <b-icon
              icon="dash-circle-fill"
              font-scale="1"
              aria-label="Delete"
            ></b-icon>
          </b-button>

          <b-button pill variant="success" size="sm" class="mb-2">
            <b-icon
              icon="plus-circle-fill"
              font-scale="1"
              aria-label="Add"
            ></b-icon>
          </b-button>
        </b-row>

        <b-form>
          <b-row>
            <b-col cols="4">
              <b-form-input
                v-model="waypointName"
                placeholder="Enter Waypoint Name"
              ></b-form-input>
            </b-col>

            <b-col cols="2">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="latitude"
                />
                <label class="custom-control-label" for="latitude"
                  >Latitude</label
                >
              </div>
            </b-col>

            <b-col cols="2">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="longitude"
                />
                <label class="custom-control-label" for="longitude"
                  >Longitude</label
                >
              </div>
            </b-col>

            <b-col cols="2">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="altitude"
                />
                <label class="custom-control-label" for="altitude"
                  >Altitude</label
                >
              </div>
            </b-col>

            <!-- Add and Delete icon -->
            <!--
            <b-col cols="1">
              <b-button pill variant="danger" size="sm" class="mb-2">
                <b-icon
                  icon="dash-circle-fill"
                  font-scale="1"
                  aria-label="Delete"
                ></b-icon>
              </b-button>
            </b-col>

            <b-col cols="1">
              <b-button pill variant="success" size="sm" class="mb-2">
                <b-icon
                  icon="plus-circle-fill"
                  font-scale="1"
                  aria-label="Add"
                ></b-icon>
              </b-button>
            </b-col> -->
          </b-row>
        </b-form>

        <b-button variant="primary">ADD</b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longitude: null,
      latitude: null,
    };
  },
};
</script>

<style>
.btn-circle.btn-sm {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  font-size: 8px;
  text-align: center;
}
</style>