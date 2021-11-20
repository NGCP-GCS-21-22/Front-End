<template>
	<b-container>
		<b-card class="widget-card">
			<b-row v-for="group in widgetGroups" :key="group.groupId">
				<b-col v-for="widget in group.widgetGroup" :key="widget.name">
					<b-button
						class="widget-button"
						variant="dark"
						v-if="!selected"
						@click="selectWidget(widget.name)"
					>
						{{ widget.name }}
					</b-button>
				</b-col>
			</b-row>

			<div v-for="group in widgetGroups" :key="group.groupId">
				<div
					v-for="widget in group.widgetGroup"
					:key="widget.name"
				>
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
						:options="widget.options"
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
	data() {
		return {
			selected: false,
			cardSelected: null,

			widgetGroups: [
				// group 1
				{
					widgetGroup: [
						{
							type: "Waypoint",
							name: "ERU Drop Location",
						},
						{
							type: "Waypoint",
							name: "Home Coordinates",
						},
					],
					groupId: 1,
				},
				// group 2
				{
					widgetGroup: [
						{
							type: "StageCommand",
							name: "Stage Command",
							// Stages
							options: [
								{
									text: "Ready to Start",
									value: {
										id: 1,
										stage: "Ready to Start",
									},
								},
								{
									text: "ERU Landing Sequence",
									value: {
										id: 5,
										stage: "ERU Landing Sequence",
									},
								},
								{
									text: "Drive to Hiker",
									value: {
										id: 6,
										stage: "Drive to Hiker",
									},
								},
								{
									text: "Load the Hiker",
									value: {
										id: 7,
										stage: "Load the Hiker",
									},
								},
								{
									text: "Go to EZ",
									value: {
										id: 8,
										stage: "Go to EZ",
									},
								},
								{
									text: "Transferring Hiker",
									value: {
										id: 9,
										stage: "Transferring Hiker",
									},
								},
								{
									text: "Return to Home/Travel to Position",
									value: {
										id: 10,
										stage: "Return to Home/Travel to Position",
									},
								},
							],
						},
						{
							type: "SearchArea",
							name: "Search Area",
						},
					],
					groupId: 2,
				},
				// group 3
				{
					widgetGroup: [
						{
							type: "Geofence",
							name: "Geofence",
						},
						{
							type: "ManualControl",
							name: "Manual Control",
						},
					],
					groupId: 3,
				},
			],
		};
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
	height: calc(50vh/3);
}
</style>