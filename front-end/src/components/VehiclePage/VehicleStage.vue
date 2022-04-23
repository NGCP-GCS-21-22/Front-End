<template>
    <b-container class="stage-container">
        <b-card class="stage-card">
            <h4>{{ vehicleName }} Mission Stage:</h4>
            <h3 v-if="currentStage">
                {{ currentStage }}
            </h3>
            <h3 v-else>No stage selected</h3>
        </b-card>
    </b-container>
</template>

<script>
export default {
    props: {
        vehicleData: Object,
        vehicleName: String,
        missionData: Object,
    },
    computed: {
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
            if (this.vehicleData == null) return null;
            let currentStage = this.vehicleData.current_stage;
            if (this.stages != null) {
                for (let i = 0; i < this.stages.length; i++) {
                    let stage = this.stages[i];
                    if (stage.id == currentStage) {
                        return stage.stage;
                    }
                }
            }
        },
    },
};
</script>

<style scoped>
h2,
h4 {
    color: #2c3e50;
}
h3 {
    text-decoration: underline;
}
.stage-container {
    margin-top: 10px;
}
.stage-card {
    height: 13vh;
}
</style>