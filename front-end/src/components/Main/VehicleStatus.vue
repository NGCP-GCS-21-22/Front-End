<template>
	<div>
		<b-container> 
			<b-card>
				<!-- top row -->
				<b-row>
					<b-col class="top-left-col" cols="6">
						<VehicleStatusTitle :vehicleName="vehicleName" />
					</b-col>
					<b-col class="top-right-col" cols="6">
						<ConnectionStatus :latency="latency" />
					</b-col>
				</b-row>

				<!-- bottom row -->
				<b-row>
					<b-col>
						<!-- Stage Selection Dropdown -->
						<b-button size="sm" class="stage-selection-button" @click="sModalShow = !sModalShow" variant="primary">{{selectedStage}}</b-button>
            
            <b-modal centered v-model="sModalShow" hide-footer v-bind:title="vehicleName + ' Stage Selection'" >
              <!-- include form dropdown & submit button -->
              <b-form-select v-model="selected" :options="options">
                <b-form-select-option :value="null" disabled>-- Please select an option </b-form-select-option> 
				</b-form-select>

        
              <div class="mt-3">Selected ID: <strong>{{selectedId}}</strong></div>
			  <div class="mt-3">Selected Stage: <strong>{{selectedStage}}</strong></div>
			  <!--<div class="mt-3">Stage: <strong>{{ options.text }}</strong></div>-->
              <b-button @click="submit(sModalShow)" variant="primary" style="padding='5px'" >Submit {{submit.text}}</b-button>
            </b-modal>

					</b-col>
					<b-col>
						<!-- bottom right -->
						<b-row>
							<b-col cols="6">
								<Battery :batteryPercentage="batteryPercentage" />
							</b-col>
							<b-col cols="6">
								<Mode :mode="mode" />
							</b-col>
						</b-row>
						<b-row class="justify-content-md-center">
							<EmergencyStop />
						</b-row>
					</b-col>
				</b-row>
			</b-card>
		</b-container>
	</div>
</template>

<script>
import axios from "axios";
import VehicleStatusTitle from "@/components/Main/VehicleStatusTitle.vue";
import ConnectionStatus from "@/components/Main/ConnectionStatus.vue";
import EmergencyStop from "@/components/Main/EmergencyStop.vue";
import Battery from "@/components/Main/Battery.vue";
import Mode from "@/components/Main/Mode.vue"

export default {
	props: {
		vehicleName: String,
	},
	components: {
		VehicleStatusTitle,
		ConnectionStatus,
		EmergencyStop,
		Battery,
    	Mode
	},
	computed: {
		selectedStage() {
			if (this.selected) {
				return this.selected.stage;
			}
			return 'Stage Selection';
		},
		selectedId() {
			if (this.selected) {
				return this.selected.id;
			}
			return null;
		},
	},
	data() {
		return {
			latency: 2,
			batteryPercentage: 97,
			mode: "Autonomous",
			sModalShow: false,
			selected: null,
			form: {
        		option: null,
      		},
			options: [
				{
					text: 'Ready to Start',
					value: {
						id: 1,
						stage: "Ready to Start"
					},
				},
				{
					text: 'ERU Landing Sequence',
					value: {
						id: 5,
						stage: 'ERU Landing Sequence'
					},
				},
				{
					text: 'Drive to Hiker',
					value:{ 
						id: 6,
						stage: 'Drive to Hiker'
					},
				},
				{
					text: 'Load the Hiker',
					value: {
						id: 7,
						stage:'Load the Hiker'
					},
				},
				{
					text: 'Go to EZ',
					value: {
						id: 8,
						stage:'Go to EZ'
					},
				},
				{
					text: 'Transferring Hiker',
					value: {
						id: 9,
						stage: 'Transferring Hiker'
					},
				},
				{
					text: 'Return to Home/Travel to Position',
					value: {
						id: 10,
						stage: 'Return to Home/Travel to Position'
					},
				},
			],
		};
	},
	methods: {
		submit(sModalShow) {
    	    this.sModalShow = !sModalShow;
		    console.log("selectedStage: " + this.selectedStage);
    },
  },
};
</script>

<style scoped>
img {
	display: block;
	width: 20;
	height: 20;
}

.top-left-col {
	/* background-color: red; */
}

.top-right-col {
	/* background-color: blue; */
}

.stage_selection {
	width: 230px;
	height: 50px;
}
</style>