<template>
	<b-container>
		<b-card class="widget-card">
			<b-row v-for="group in widgetGroups" :key="group.buttonGroupId">
				<b-col v-for="widget in group.widgetGroup" :key="widget.name">
					<b-button
						class="widget-button"
						variant="dark"
						v-if="!selected && widget.type != 'Placeholder'"
						@click="selectWidget(widget.name, widget.type)"
					>
						{{ widget.name }}
					</b-button>
				</b-col>
			</b-row>

			<div v-for="group in widgetGroups" :key="group.widgetGroupId">
				<div v-for="widget in group.widgetGroup" :key="widget.name">
					<MissionWaypoint
						v-if="
							widget.type == 'MissionWaypoint' &&
							cardSelected == widget.name
						"
						:name="widget.name"
						:missionWaypoint="missionWaypoint"
						@goBack="showWidgets"
						@moveCoordinates="moveCoordinates"
					/>
					<HomeCoordinates
						v-if="
							widget.type == 'HomeCoordinates' &&
							cardSelected == widget.name
						"
						:name="widget.name"
						:homeCoordinates="homeCoordinates"
						@goBack="showWidgets"
						@moveCoordinates="moveCoordinates"
					/>

					<StageCommand
						v-if="
							widget.type == 'StageCommand' &&
							cardSelected == widget.name
						"
						:name="widget.name"
						:stages="widget.stages"
						@goBack="showWidgets"
					/>
					<SearchArea
						v-if="
							widget.type == 'SearchArea' &&
							cardSelected == widget.name
						"
						:name="widget.name"
					/>
					<Geofence
						v-if="
							widget.type == 'Geofence' &&
							cardSelected == widget.name
						"
						:name="widget.name"
					/>
					<ManualControl
						v-if="
							widget.type == 'ManualControl' &&
							cardSelected == widget.name
						"
						:name="widget.name"
					/>
				</div>
			</div>
		</b-card>
	</b-container>
</template>

<script>
import MissionWaypoint from "@/components/Widgets/MissionWaypoint.vue";
import HomeCoordinates from "@/components/Widgets/HomeCoordinates.vue";
import StageCommand from "@/components/Widgets/StageCommand.vue";
import SearchArea from "@/components/Widgets/SearchArea.vue";
import Geofence from "@/components/Widgets/Geofence.vue";
import ManualControl from "@/components/Widgets/ManualControl.vue";

export default {
	components: {
		MissionWaypoint,
		HomeCoordinates,
		StageCommand,
		SearchArea,
		Geofence,
		ManualControl,
	},
	props: {
		vehicleName: String,
		vehicleMissionData: Object,
		widgetData: Object,
	},
	computed: {
		missionWaypoint() {
			if (!this.widgetData.missionWaypoint) return null;
			return this.widgetData.missionWaypoint;
		},
		homeCoordinates() {
			if (!this.widgetData.homeCoordinates) return null;
			return this.widgetData.homeCoordinates;
		},
	},
	data() {
		return {
			selected: false,
			cardSelected: null,
			widgetTypeSelected: null,
			widgetGroups: [],
		};
	},
	mounted() {
		this.getWidgetGroups();
	},
	methods: {
		selectWidget(widgetName, widgetType) {
			this.selected = true;
			this.cardSelected = widgetName;
			this.widgetTypeSelected = widgetType;
			this.$emit("widgetTypeSelected", this.widgetTypeSelected);
		},
		showWidgets() {
			this.selected = false;
			this.cardSelected = null;
			this.widgetTypeSelected = null;
			this.$emit("widgetTypeSelected", this.widgetTypeSelected);
		},
		getWidgetGroups() {
			// missionWaypoint and home coordinates
			let widgetGroup1 = {
				widgetGroup: [
					{
						type: "MissionWaypoint",
						name: this.vehicleMissionData.missionWaypoint,
					},
					{
						type: "HomeCoordinates",
						name: "Home Coordinates",
					},
				],
				buttonGroupId: "Button Group 1",
				widgetGroupId: "Widget Group 1",
			};

			// Stage Command and Geofence
			let widgetGroup2 = {
				widgetGroup: [
					{
						type: "StageCommand",
						name: "Stage Command",
						stages: this.vehicleMissionData.stages,
					},
					{
						type: "Geofence",
						name: "Geofence",
					},
				],
				buttonGroupId: "Button Group 2",
				widgetGroupId: "Widget Group 2",
			};

			this.widgetGroups.push(widgetGroup1, widgetGroup2);

			// Search Area (optional) and Manual Control (optional)
			let widgetGroup = [];
			if (this.vehicleMissionData.searchArea) {
				let widget = {
					type: "SearchArea",
					name: "Search Area",
				};
				widgetGroup.push(widget);
			}
			if (this.vehicleMissionData.manualControl) {
				let widget = {
					type: "ManualControl",
					name: "Manual Control",
				};
				widgetGroup.push(widget);
			}

			while (widgetGroup.length < 2) {
				let widgetPlaceholder = {
					type: "Placeholder",
					name: "Placeholder " + widgetGroup.length,
				};
				widgetGroup.push(widgetPlaceholder);
			}

			// if (widgetGroup.length == 2) {
			let widgetGroup3 = {
				widgetGroup: widgetGroup,
				buttonGroupId: "Button Group 3",
				widgetGroupId: "Widget Group 3",
			};

			this.widgetGroups.push(widgetGroup3);
			// }
		},
		moveCoordinates(direction, coordinate) {
			this.$emit("moveCoordinates", direction, coordinate);
		},
	},
};
</script>

<style>
p {
	color: black;
}
.widget-card {
	overflow: auto;
	width: 40vw;
}
.widget-button {
	width: 90%;
	margin-bottom: 10px;

	/* 50 / number of groups - extra margins */
	height: calc(50vh / 3);
}
.invisible {
	visibility: hidden;
}
</style>