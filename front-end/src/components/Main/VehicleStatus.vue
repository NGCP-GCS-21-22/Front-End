<template>
  <div>
    <b-container fluid="sm">
      <b-card fluid style="width:auto; height:auto; padding-right:0;" align-self="center">
        <b-row>
          <b-col>
            <h2>{{vehicleName}} Status</h2>
          </b-col>
          <b-col >
            <b-img
              :src="require('@/assets/airplane.png')"
              style="width:auto; height:auto"
              >
            </b-img>
          </b-col>    
          <b-col>
            Connection: Online
            </br>
            Last Packet: 2ms
          </b-col>
            <b-icon icon="reception4" style="color: #29C16E; width:auto; height:auto"></b-icon>
          
        </b-row>
        
        <b-row>
        <b-card-subtitle align="left">Mission Stage: Return to Base</b-card-subtitle>
        </b-row>
        <b-row>
            <b-col cols="7">
              <b-icon icon="battery-full" style="color: #29C16E; width:auto; height:auto" ></b-icon>
              97%
            </b-col>
            <b-col>
              <b-card bg-variant="secondary" text-variant="white" style="width:auto; height:auto;" no-body>Mode: Autonomous</b-card>
            </b-col>
        </b-row>
        &nbsp
        <b-row>
          <b-col>
            <b-button @click="show-true" v-b-modal.modal-1 variant="primary" class="mb-2" style="width:auto; height:auto">
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
            <b-button @click="show-true" v-b-modal.modal-1 variant="danger" class="mb-2" style="width:auto; height:auto">
              
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
    props: ['vehicleName']
};
</script>

<style>
img {
  display: block;
  width: auto;
  height: auto;
}
</style>