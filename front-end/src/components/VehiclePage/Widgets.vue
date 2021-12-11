 <template>
	<b-container>
		<b-card>
			<div v-for="widget in widgetList" :key="widget.name">
				<b-button v-if="!selected" @click="selectWidget(widget.name)">
					{{ widget.name }}
				</b-button>

				<Waypoint
					v-if="
						widget.type == 'Waypoint' && cardSelected == widget.name
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
						widget.type == 'Geofence' && cardSelected == widget.name
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

			widgetList: [
				{
					type: "Waypoint",
					name: "ERU Drop Location",
					id: 1
				},
				{
					type: "Waypoint",
					name: "Home Coordinates",
					id: 2
				},
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
					id: 3
				},
				{
					type: "SearchArea",
					name: "Search Area",
					id: 4
				},
				{
					type: "Geofence",
					name: "Geofence",
					id: 5
				},
				{
					type: "ManualControl",
					name: "Manual Control",
					id: 6
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
</style>