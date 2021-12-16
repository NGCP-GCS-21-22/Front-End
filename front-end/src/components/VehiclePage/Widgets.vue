<template>
	<b-container>
		<b-card class="widget-card">
			<b-row v-for="group in widgetGroups" :key="group.buttonGroupId">
				<b-col v-for="widget in group.widgetGroup" :key="widget.name">
					<b-button
						class="widget-button"
						variant="dark"
						v-if="!selected && widget.type != 'Placeholder'"
						@click="selectWidget(widget.name)"
					>
						{{ widget.name }}
					</b-button>
				</b-col>
			</b-row>

			<div v-for="group in widgetGroups" :key="group.widgetGroupId">
				<div v-for="widget in group.widgetGroup" :key="widget.name">
					<Waypoint
						v-if="
							widget.type == 'Waypoint' &&
							cardSelected == widget.name
						"
						:name="widget.name"
						@goBack="showWidgets"
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
import Waypoint from "@/components/Widgets/Waypoint.vue";
import StageCommand from "@/components/Widgets/StageCommand.vue";
import SearchArea from "@/components/Widgets/SearchArea.vue";
import Geofence from "@/components/Widgets/Geofence.vue";
import ManualControl from "@/components/Widgets/ManualControl.vue";

export default {
	components: {
		Waypoint,
		StageCommand,
		SearchArea,
		Geofence,
		ManualControl,
	},
	props: {
		vehicleName: String,
		missionData: Object,
	},
	computed: {
		// widgetGroups() {
		// }
	},
	data() {
		return {
			selected: false,
			cardSelected: null,
			widgetGroups: [],
		};
	},
	mounted() {
		this.setUpWidgetGroups();
	},
	methods: {
		selectWidget(widgetName) {
			this.selected = true;
			this.cardSelected = widgetName;
		},
		showWidgets() {
			this.selected = false;
			this.cardSelected = null;
		},
		setUpWidgetGroups() {
			if (this.vehicleName == "MAC") {
				this.getWidgetGroups(missionData.MAC);
			} else if (this.vehicleName == "ERU") {
				this.getWidgetGroups(missionData.ERU);
			} else if (this.vehicleName == "MEA") {
				this.getWidgetGroups(missionData.MEA);
			}
		},
		getWidgetGroups(missionData) {
			// missionWaypoint and home coordinates
			let widgetGroup1 = {
				widgetGroup: [
					{
						type: "Waypoint",
						name: missionData.missionWaypoint,
					},
					{
						type: "Waypoint",
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
						stages: missionData.stages,
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
			if (missionData.searchArea) {
				let widget = {
					type: "SearchArea",
					name: "Search Area",
				};
				widgetGroup.push(widget);
			}
			if (missionData.manualControl) {
				let widget = {
					type: "ManualControl",
					name: "Manual Control",
				};
				widgetGroup.push(widget);
			}

			while (widgetGroup.length < 2) {
				let widgetPlaceholder = {
					type: "Placeholder",
					name: "Placeholder",
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