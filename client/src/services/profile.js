import { api } from "./axios";
import { apiDetail } from "../utils/constants";
import { setHeadersWithUserToken } from "./axios";

const getBasicInfo = async() => {
    try {
		// console.log("After success ")
		const afterSuccess = await api.get(apiDetail.profileGetBasicInfo.url)
		// console.log("After success ", afterSuccess)
        
        if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const getPersonalInfo = async() => {
    try {
		// console.log("After success ")
		const afterSuccess = await api.get(apiDetail.profileGetPersonalInfo.url)
		// console.log("After success ", afterSuccess)
        
        if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const editBasicInfo = async(firstName, lastName, gender) => {

	const basicInfo = { firstName, lastName, gender };

    try {
		console.log("After success ")
		const afterSuccess = await api.put(apiDetail.profileUpdateBasicInfo.url, basicInfo)
		// console.log("After success ", afterSuccess)
        
        if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const editPersonalInfo = async(mobileNo, address, city, state, zip) => {

	const personalInfo = { mobileNo: `+91${mobileNo}`, address: {
		line1: address,
		city,
		state,
		pincode: zip,
	} };

    try {
		console.log("After success ")
		const afterSuccess = await api.put(apiDetail.profileUpdatePersonalInfo.url, personalInfo)
		// console.log("After success ", afterSuccess)
        
        if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const editBio = async(bio) => {

	const bioInfo = { bio };

    try {
		console.log("After success ")
		const afterSuccess = await api.put(apiDetail.profileUpdateBio.url, bioInfo)
		// console.log("After success ", afterSuccess)
        
        if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const deleteAccount = async() => {
	try {
		const afterSuccess = await api.delete(apiDetail.deleteUser.url);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

export { getBasicInfo, getPersonalInfo, editBasicInfo, editPersonalInfo, editBio, deleteAccount };
