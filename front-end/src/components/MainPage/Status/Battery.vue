<template>
    <div class="batteryContainer">
        <b-icon class="battery" :style="batteryStyle" :icon="batteryIcon">
        </b-icon>
        <div class="batteryPercent">{{ batteryPct }}%</div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        batteryPct: Number,
        batteryColor: String,
    },
    computed: {
        batteryIcon() {
            if (!this.batteryPct) return "battery";

            if (this.batteryPct < 33) return "battery";
            else if (this.batteryPct < 66) return "battery-half";
			else return "battery-full";
        },
        batteryStyle() {
            if (this.batteryPct < 33) return `color: red`;
            else if (this.batteryPct < 66) return `color: yellow`;
            else return `color: green`;
        },
    },
};
</script>

<style scoped>
.batteryContainer {
    overflow: auto;
    padding: 10px 0px;
}

.battery {
    width: 60px;
    height: 38px;
    margin-top: -8px;
    float: left;
}

.batteryPercent {
    float: left;
    font-size: 11pt;
}
</style>