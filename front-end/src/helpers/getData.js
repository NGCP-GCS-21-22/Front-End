const axios = require("axios")

const getMissionData = (vehicleName) => {
	// let payload = {
	// 	mission_data: "mission_data",
	// }

	// return new Promise((resolve, reject) => {
	// 	axios
	// 		.post(path, payload)
	// 		.then((response) => {
	// 			let missionData = response.data
	// 			if (vehicleName == "all") resolve(missionData)
	// 			resolve(missionData[vehicleName])
	// 		})
	// 		.catch((error) => {
	// 			reject(error)
	// 		})
	// })

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
	let path = "http://localhost:5000/generalStage"

	return new Promise((resolve, reject) => {
		axios
			.get(path)
			.then((response) => {
				resolve(response.data["name"])
			})
			.catch((error) => {
				reject(error)
			})
	})
}

const getVehicleData = (vehicleName) => {
	let path = "http://localhost:5000/postData"
	let payload = {
		// vehicle_name: "testing",
		vehicle_name: vehicleName,
	}

	return new Promise((resolve, reject) => {
		axios
			.post(path, payload)
			.then((response) => {
				resolve(response.data)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

const getWidgetData = (vehicleName) => {
	// let payload = {
	// 	widget_data: vehicleName,
	// }

	// return new Promise((resolve, reject) => {
	// 	axios
	// 		.post(path, payload)
	// 		.then((response) => {
	// 			resolve(response.data)
	// 		})
	// 		.catch((error) => {
	// 			reject(error)
	// 		})
	// })

	return {}
}

export { getMissionData, getGeneralStage, getVehicleData, getWidgetData }

