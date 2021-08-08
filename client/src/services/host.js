import { api } from "./axios";
import { apiDetail } from "../utils/constants";
import { setHeadersWithUserToken } from "./axios";

const createOpportunity = async (placeName,
    positionDescription,
    city,
    state,
    pincode,
    images) => {


        const data = new FormData();

        data.append('placeName', placeName)
        data.append('positionDescription', positionDescription)
        data.append('city', city)
        data.append('state', state)
        data.append('pincode', pincode)

        for(let i=0; i< images.length; i++) {
            data.append('place', images[i]);
        }
    // const data = {placeName,
    //     positionDescription,
    //     city,
    //     state,
    //     pincode,
    //     place};

	try {
		const afterSuccess = await api.post(apiDetail.hostCreateOpportunity.url, data);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
};

const getAllOpportunities = async() => {
    try {
		const afterSuccess = await api.get(apiDetail.hostgetAllOpportunity.url, {userId: "d38dc914-20b3-4b64-9ef5-1bc938261ff0"});
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

export { createOpportunity, getAllOpportunities };
