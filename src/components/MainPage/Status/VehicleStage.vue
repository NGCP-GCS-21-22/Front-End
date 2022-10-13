<template>
    <b-container class="stage-container">
        <b-row class="justify-content-md-center">
            <svg
                class="vehicleImg"
                v-if="path && fillColor"
                viewBox="0 0 100 100"
            >
                <path :d="path" :fill="fillColor" />
            </svg>
            <h2>{{ vehicleName }}: {{ currentStage }}</h2>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: {
        vehicleData: Object,
        vehicleName: String,
        missionData: Object,
        vehicleIcon: Object,
        large: Boolean,
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
        stages() {
            if (!this.missionData) return null;
            if (!this.vehicleName) return null;
            // return stages array
            let vehicleStages = this.missionData[this.vehicleName].stages;
            let stages = [];
            for (let i = 0; i < vehicleStages.length; i++) {
                let stage = {
                    id: vehicleStages[i].id,
                    stage: vehicleStages[i].stage,
                };
                stages.push(stage);
            }
            return stages;
        },
        currentStage() {
            if (this.vehicleData == null) return "No Stage Selected";
            let currentStage = this.vehicleData.current_stage;
            if (this.stages != null) {
                for (let i = 0; i < this.stages.length; i++) {
                    let stage = this.stages[i];
                    if (stage.id == currentStage) {
                        return stage.stage;
                    }
                }
            }

            return "ERROR - INVALID STAGE";
        },
    },
};
</script>

<style scoped>
.stage-container {
    margin-top: 10px;
}
.vehicleName {
    padding: 10px 0px;
}
.vehicleImg {
    width: 50px;
    height: 50px;
    margin-top: -8px;
    margin-right: 10px;
}
</style>