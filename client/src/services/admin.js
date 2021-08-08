import { api } from "./axios";
import { apiDetail } from "../utils/constants";
import { setHeadersWithUserToken } from "./axios";

const getAllYatriDetails = async () => {

	try {
		const afterSuccess = await api.get(apiDetail.adminGetAllYatriDetails.url);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
};

const getAllHostDetails = async () => {

	try {
		const afterSuccess = await api.get(apiDetail.adminGetAllHostDetails.url);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
};

const getHostDetails = async (userId) => {

	try {
		const afterSuccess = await api.get(`${apiDetail.adminGetAllHostDetails.url}/${userId}`);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
};

const getYatrisCount = async () => {
	try {
		const afterSuccess = await api.get(apiDetail.getYatrisCount.url);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const getHostsCount = async () => {
	try {
		const afterSuccess = await api.get(apiDetail.getHostsCount.url);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const getDeletedYatrisCount = async () => {
	try {
		const afterSuccess = await api.get(apiDetail.getDeletedYatrisCount.url);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const getDeletedHostsCount = async () => {
	try {
		const afterSuccess = await api.get(apiDetail.getDeletedHostsCount.url);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const getTotalOpportunities = async () => {
	try {
		const afterSuccess = await api.get(apiDetail.getTotalOpportunities.url);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

const getHostOpportunities = async (userId) => {
	try {
		const afterSuccess = await api.get(`${apiDetail.getTotalOpportunities.url}/${userId}`);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}



const getNotifications = async () => {
	try {
		const afterSuccess = await api.get(apiDetail.getNotifications.url);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error: ", error);
		// throw error;
		return error.response;
	}
}

export { getAllYatriDetails, getAllHostDetails, getYatrisCount, getDeletedYatrisCount, getHostsCount, getDeletedHostsCount, getTotalOpportunities, getNotifications, getHostDetails, getHostOpportunities };
