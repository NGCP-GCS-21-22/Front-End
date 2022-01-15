const axios = require("axios")

let path = "http://localhost:5000/postData"

const getMissionData = (vehicleName) => {
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
	}

	if (vehicleName == "all") return missionData

	return missionData[vehicleName]
}

const getGeneralStage = () => {
	return "ERU: Ready for Takeoff"
}

const getVehicleData = (vehicleName, callback) => {
	let payload = {
		vehicle_name: "testing",
	}

	// let payload = {
	// 	vehicle_name: vehicleName,
	// }

	axios
		.post(path, payload) // "MAC"
		.then((response) => {
			callback(response.data)
		})
		.catch((error) => {
			console.log(error)
		})
}

const getWidgetData = (vehicleName) => {
	// get ERU Drop Location
	// GET request macMissionData.missionWaypoint
	// let missionWaypointPath = `http://127.0.0.1/${macMissionData.missionWaypoint}`
	// axios.get(missionWaypointPath).then((response) => {
	// 	this.missionWaypointData = res.data
	// })
	return {}
}

export { getMissionData, getGeneralStage, getVehicleData, getWidgetData }
