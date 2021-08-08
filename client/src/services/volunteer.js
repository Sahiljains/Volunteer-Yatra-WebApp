import { api } from "./axios";
import { apiDetail } from "../utils/constants";
import { setHeadersWithUserToken } from "./axios";

const getStates = async() => {
    try {
		// console.log("After success ")
		const afterSuccess = await api.get(apiDetail.volunteerGetStates.url)
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

const getOpportunities = async(state) => {
	try {
		// state = "Rajasthan"
		// console.log("After success ")
		console.log("State is : ", state);

		let afterSuccess;
		if(state == '' || !state) {
			afterSuccess = await api.get(apiDetail.volunteerGetOpportunities.url);
		} else {
			if(state.includes(" ")) {
				state = state.replace(" ", "+");
			}
			afterSuccess = await api.get(`${apiDetail.volunteerGetOpportunities.url}?state=${state}`);
		}

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



export { getStates, getOpportunities };
