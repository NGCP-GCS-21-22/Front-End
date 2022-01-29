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
						@updateWidgetData="updateWidgetData"
					/>
					<HomeCoordinates
						v-if="
							widget.type == 'HomeCoordinates' &&
							cardSelected == widget.name
						"
						:name="widget.name"
						:homeCoordinates="homeCoordinates"
						@goBack="showWidgets"
						@updateWidgetData="updateWidgetData"
					/>
					<SearchArea
						v-if="
							widget.type == 'SearchArea' &&
							cardSelected == widget.name
						"
						:name="widget.name"
						:searchArea="searchArea"
						@updateWidgetData="updateWidgetData"
						@goBack="showWidgets"
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
import MissionWaypoint from "@/components/VehiclePage/Widgets/MissionWaypoint.vue";
import HomeCoordinates from "@/components/VehiclePage/Widgets/HomeCoordinates.vue";
import SearchArea from "@/components/VehiclePage/Widgets/SearchArea.vue";
import Geofence from "@/components/VehiclePage/Widgets/Geofence.vue";
import ManualControl from "@/components/VehiclePage/Widgets/ManualControl.vue";

export default {
	components: {
		MissionWaypoint,
		HomeCoordinates,

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
		searchArea() {
			if (!this.widgetData.searchArea) return null;

			return this.widgetData.searchArea.map((coordinate) => {
				return {
					lat: parseFloat(coordinate.lat),
					lng: parseFloat(coordinate.lng),
				};
			});
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
			// Mission Waypoint and Home Cboordinates
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

			// Geofence and
			// Search Area (optional) or Manual Control (optional)
			let widgetGroup = [];

			// Geofence
			widgetGroup.push({
				type: "Geofence",
				name: "Geofence",
			});

			// Search Area
			if (this.vehicleMissionData.searchArea) {
				let widget = {
					type: "SearchArea",
					name: "Search Area",
				};
				widgetGroup.push(widget);
			}

			// Manual Control
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

			let widgetGroup2 = {
				widgetGroup: widgetGroup,
				buttonGroupId: "Button Group 2",
				widgetGroupId: "Widget Group 2",
			};

			this.widgetGroups.push(widgetGroup1, widgetGroup2);
		},
		updateWidgetData(widgetType, value) {
			this.$emit("updateWidgetData", widgetType, value);
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