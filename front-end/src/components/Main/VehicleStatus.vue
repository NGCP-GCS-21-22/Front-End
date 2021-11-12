<template>
  <div>
    <b-container>
      <b-card style="width:550px; height:190px">
        <b-row>
          <b-col>
            <h2 align="left">{{vehicleName}} Status</h2>
          </b-col>
          <b-col cols="1">
            <b-img
              :src="require('@/assets/airplane.png')"
              style="width:60px; height:50px"
              >
            </b-img>
          </b-col>    
          <b-col>
            Connection: Online
            </br>
            Last Packet: 2ms
          </b-col>
            <b-icon icon="reception4" style="color: #29C16E; width:50px; height:50px"></b-icon>
          
        </b-row>
        
        <b-row>
        <b-card-sub-title align="left">Mission Stage: Return to Base</b-card-sub-title>
        </b-row>
        <b-row>
            <b-col cols="7">
              <b-icon icon="battery-full" style="color: #29C16E; width:60px; height:28px" ></b-icon>
              97%
            </b-col>
            <b-col>
              <b-card bg-variant="secondary" text-variant="white" style="width:165px; height:25px;" no-body>Mode: Autonomous</b-card>
            </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button v-b-modal.modal-1 variant="primary" class="mb-2" style="width:230px; height:50px">
              <b-icon icon="exclamation-circle-fill" variant="white"></b-icon> STAGE SELECTION
            </b-button>

            <b-modal id="modal-1" title="Stage Selection">
              <p class="my-4">This is Stage Selection</p>
                <template #modal-footer="{ok, cancel}">
                 <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="success" @click="ok()">Yes</b-button>
                <b-button size="sm" variant="danger" @click="cancel()">No</b-button>
                </template>
            </b-modal>
          </b-col>
          <b-col>
            <b-button v-b-modal.modal-2 variant="danger" class="mb-2" style="width:230px; height:50px">
              
              <b-icon icon="exclamation-circle-fill" variant="white"></b-icon> EMERGENCY STOP
            </b-button>

            <b-modal id="modal-2" title="Emergency Stop">
              <p class="my-4">Are you sure?</p>
              <template #modal-footer="{ ok, cancel }">
                 <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button size="sm" variant="success" @click="ok()">Yes</b-button>
                <b-button size="sm" variant="danger" @click="cancel()">No</b-button>
              </template>
            </b-modal>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["vehicleName"],
};
</script>

<style scoped>
img {
  display: block;
  width: 20;
  height: 20;
}
</style>