<template>
    <div>
        <b-button class="stage-selection-button" style="font-weight: bold" @click="sModalShow = !sModalShow"
            variant="primary">{{ "STAGE SELECTION" }}
            <b-img style="padding-left: 6px; width: 32px; color: #ffffff" src="@/assets/select.png"></b-img>
        </b-button>

        <b-modal centered v-model="sModalShow" hide-footer :title="vehicleName + ' Stage Selection'">
            <!-- include form dropdown & submit button -->
            <b-form-select v-model="selected" :options="stages">
                <b-form-select-option :value="null" disabled>-- Please select an option
                </b-form-select-option>
            </b-form-select>

            <div class="mt-3">
                Selected ID: <strong>{{ selectedId }}</strong>
            </div>
            <div class="mt-3">
                Selected Stage: <strong>{{ selectedStage }}</strong>
            </div>
            <!--<div class="mt-3">Stage: <strong>{{ stages.text }}</strong></div>-->
            <b-button @click="submit(sModalShow)" variant="primary" style="padding='5px'">Submit
            </b-button>
        </b-modal>
    </div>
</template>

<script >
import axios from "axios";

export default {
    props: {
        vehicleName: String,
        missionData: Object,
        vehicleData: Object,
    },
    computed: {
        currentStage() {
            if (this.vehicleData == null) return null;
            return this.vehicleData.current_stage;
        },
        selectedStage() {
            if (this.selected) {
                return this.selected.stage;
            }
            return null;
        },
        selectedId() {
            if (this.selected) {
                return this.selected.id;
            }
            return null;
        },
        stages() {
            if (!this.missionData) return null;
            if (!this.vehicleName) return null;
            // return stages array
            let vehicleStages = this.missionData[this.vehicleName].stages;
            let stages = [];
            for (let i = 0; i < vehicleStages.length; i++) {
                let stage = {
                    text: vehicleStages[i].stage,
                    value: {
                        id: vehicleStages[i].id,
                        stage: vehicleStages[i].stage,
                    },
                };
                stages.push(stage);
            }
            return stages;
        },
    },
    data() {
        return {
            sModalShow: false,
            selected: null,
            form: {
                option: null,
            },
        };
    },
    mounted() {
        // set the selected stage if available
        // if (this.stages != null) {
        //     this.stages.forEach((stage) => {
        //         if (stage.id == this.currentStage) {
        //             this.selected = stage;
        //             console.log(this.currentStage);
        //             console.log(this.selected);
        //         }
        //     });
        // }
    },
    methods: {
        submit() {
            this.sModalShow = !this.sModalShow;
            const path = "http://localhost:5000/send";
            let payload = {
                id: "Stage Selection",
                data: {
                    current_stage: this.selectedId,
                    stage_name: this.selectedStage,
                    vehicle_name: this.vehicleName,
                    estop: false,
                },
            };
            axios
                .post(path, payload)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style scoped>
.stage-selection-button {
    width: 230px;
    height: 50px;
}
</style>