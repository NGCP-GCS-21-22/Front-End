const axios = require("axios")
// const defaultLat = require("./coordinates.js")
import { defaultLat } from "./coordinates.js"
import { defaultLng } from "./coordinates.js"
import { defaultPolygon } from "./coordinates.js"

const getMissionData = (vehicleName) => {
	let path = "http://localhost:5000/getNewMission"

	return new Promise((resolve, reject) => {
		axios
			.get(path)
			.then((response) => {
				if (vehicleName == "all") resolve(response.data)
				resolve(response.data[vehicleName]) // give the mission data for a specific vehicle
			})
			.catch((error) => {
				reject(error)
			})
	})
}

const getGeneralStage = () => {
	let path = "http://localhost:5000/getGeneralStage"

	return new Promise((resolve, reject) => {
		axios
			.get(path)
			.then((response) => {
				resolve(`${response.data["vehicle"]}: ${response.data["name"]}`)
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

	// return {}

	let widgetData = {}

	if (!widgetData["missionWaypoint"])
		widgetData["missionWaypoint"] = {
			lat: defaultLat,
			lng: defaultLng,
		}

	if (!widgetData["homeCoordinates"])
		widgetData["homeCoordinates"] = {
			lat: defaultLat,
			lng: defaultLng,
		}

	if (!widgetData["searchArea"])
		widgetData["searchArea"] = [...defaultPolygon]

	if (!widgetData["geofence"])
		widgetData["geofence"] = [
			{
				coordinates: [...defaultPolygon],
				keep_in: true
			}
		]

	widgetData["geofenceWorkspace"] = {
		coordinates: [...defaultPolygon],
		keep_in: true
	}

	return widgetData
}

export { getMissionData, getGeneralStage, getVehicleData, getWidgetData }
