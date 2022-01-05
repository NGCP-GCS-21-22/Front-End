let getMissionData = (vehicleName) => {
    // GET request

    let missionData = {
        MAC: {
            icon: "https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/mac.png",
            stages: [
                {
                    stage: "Ready to Start",
                    id: 1,
                },
                {
                    stage: "ERU Landing Sequence",
                    id: 5,
                },
                {
                    stage: "Drive to Hiker",
                    id: 6,
                },
                {
                    stage: "Load the Hiker",
                    id: 7,
                },
                {
                    stage: "Go to EZ",
                    id: 8,
                },
                {
                    stage: "Transferring Hiker",
                    id: 9,
                },
                {
                    stage: "Return to Home/Travel to Position",
                    id: 10,
                },
            ],
            missionWaypoint: "ERU Drop Location",
            searchArea: true,
            manualControl: false,
        },
        ERU: {
            icon: "https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/eru.png",
            stages: [
                {
                    stage: "Ready to Start",
                    id: 1,
                },
                {
                    stage: "ERU Landing Sequence",
                    id: 5,
                },
                {
                    stage: "Drive to Hiker",
                    id: 6,
                },
                {
                    stage: "Load the Hiker",
                    id: 7,
                },
                {
                    stage: "Go to EZ",
                    id: 8,
                },
                {
                    stage: "Transferring Hiker",
                    id: 9,
                },
                {
                    stage: "Return to Home/Travel to Position",
                    id: 10,
                },
            ],
            missionWaypoint: "Evacuation Zone",
            searchArea: false,
            manualControl: true,
        },
        MEA: {
            icon: "https://raw.githubusercontent.com/NGCP-GCS-2021/front-end-21/harvey/src/assets/map_icons/mea.png",
            stages: [
                {
                    stage: "Ready to Start",
                    id: 1,
                },
                {
                    stage: "ERU Landing Sequence",
                    id: 5,
                },
                {
                    stage: "Drive to Hiker",
                    id: 6,
                },
                {
                    stage: "Load the Hiker",
                    id: 7,
                },
                {
                    stage: "Go to EZ",
                    id: 8,
                },
                {
                    stage: "Transferring Hiker",
                    id: 9,
                },
                {
                    stage: "Return to Home/Travel to Position",
                    id: 10,
                },
            ],
            missionWaypoint: "Evacuation Zone",
            searchArea: false,
            manualControl: false,
        },
    };
    return missionData[vehicleName];
}

let getGeneralStage = () => {
	return "ERU: Ready for Takeoff"
}

let getVehicleData = (vehicleName) => {
	// GET request at x endpoint

	// console.log("Data received!");
	return {
		latitude: 33.93459532438122,
		longitude: -117.6311926970484,
	}
}

let getWidgetData = (vehicleName) => {
	// get ERU Drop Location
	// GET request macMissionData.missionWaypoint
	// let missionWaypointPath = `http://127.0.0.1/${macMissionData.missionWaypoint}`
	// axios.get(missionWaypointPath).then((response) => {
	// 	this.missionWaypointData = res.data
	// })
}

export { getMissionData, getGeneralStage, getVehicleData, getWidgetData}
