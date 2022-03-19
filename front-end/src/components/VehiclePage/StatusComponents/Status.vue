<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col>
        <b-row class="justify-content-md-center"> Status:</b-row>
        <b-row class="justify-content-md-center">
          <p class="StatusIcon">
            <b-icon
              icon="circle-fill"
              v-if="status_==1"
              variant="success"
            ></b-icon>
            <b-icon
              icon="circle-fill"
              v-if="status_==2"
              variant="warning"
            ></b-icon>
            <b-icon
              icon="circle-fill"
              v-if="status_==3"
              variant="danger"
            ></b-icon>
            <b-icon
              icon="circle-fill"
              v-if="status_==4"
              variant="primary"
            ></b-icon>
            <b-icon
              icon="circle-fill"
              v-if="status_==5"
              variant="secondary"
            ></b-icon>
          </p>
          {{ status }}
        </b-row>
      </b-col>
      <b-col>
        <b-row class="justify-content-md-center"> Sensors: </b-row>
        <b-row class="justify-content-md-center">
          <p class="SensorIcon">
            <b-icon
              icon="circle-fill"
              v-if="functional==1"
              variant="success"
            ></b-icon>
            <b-icon
              icon="circle-fill"
              v-if="functional==2"
              variant="warning"
            ></b-icon>
            <b-icon
              icon="circle-fill"
              v-if="functional==3"
              variant="danger"
            ></b-icon>
            <b-icon
              icon="circle-fill"
              v-if="functional==4"
              variant="primary"
            ></b-icon>
            <b-icon
              icon="circle-fill"
              v-if="functional==5"
              variant="secondary"
            ></b-icon>
          </p>
          {{sensors}}
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
      else if (this.status_ == 2) return "waiting";
      else if (this.status_ == 3) return "active";
      else if (this.status_ == 4) return "unknown 1";
      else if (this.status_ == 5) return "unknown 2";
    },
    sensors() {
      if (!this.vehicleData) return 0;
      this.functional = this.vehicleData["sensors_ok"];
      if (this.functional == 1) return "functional 1";
      else if (this.functional == 2) return "functional 2";
      else if (this.functional == 3) return "functional 3";
      else if (this.functional == 4) return "functional 4";
      else if (this.functional == 5) return "functional 5";
    },
  },
};
</script>

<style>
.StatusIcon .b-icon{
  margin-right: 10px;
}
.SensorIcon .b-icon{
  margin-right: 10px;
}
</style>