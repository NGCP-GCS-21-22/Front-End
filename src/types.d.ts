export type VehicleData = {
  yaw: number;
  latitude: number;
  longitude: number;
  rotation: number;
  battery: number;
  last_packet_time: number;
  mode: string;
  current_stage: string;
};

export type Icon = {
  path: string;
  fillColor: string;
};
export type Stage = {
  id: string;
  stage: string;
};
export type VehicleMission = {
  icon: Icon;
  stages: Stage[];
};
export type MissionData = {
  ERU: VehicleMission;
  MAC: VehicleMission;
  MEA: VehicleMission;
};

export type Waypoint = {};
export type Coordinates = {};
export type SearchArea = {};
export type GeoFence = {};
export type GeoFenceWorkspace = {};
export enum WidgetType {
  "Geofence",
  "MissionWaypoint",
  "HomeCoordinates",
  "SearchArea",
  "ManualControl",
}
export type WidgetData = {
  type?: WidgetType;
  [key: string]: any; // this is hacky and really should be fixed.
  missionWaypoint?: Waypoint;
  homeCoordinates?: Coordinates;
  searchArea?: SearchArea;
  geofence?: GeoFence;
  geofenceWorkspace?: GeoFenceWorkspace;
};

export type Marker = {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  icon: {
    path: string;
    fillColor: string;
    fillOpacity: number;
    strokeWeight: number;
    rotation: number;
    scale: number;
    anchor: {
      x: number;
      y: number;
    };
  };
};
