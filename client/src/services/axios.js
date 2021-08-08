import axios from "axios";
import { environment } from "../utils/constants";

let api;
let apiDetail = {
	baseURL: environment.baseURL,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
};

const setAPI = (apiDetail) => {
	// console.log('apiDetail : ', apiDetail);
	api = axios.create(apiDetail);
};

setAPI(apiDetail);

const setHeadersWithUserToken = (token) => {
	api.defaults.headers.common["Authorization"] = "Basic " + token;
};

const unsetHeadersWithUserToken = () => {
	delete api.defaults.headers.common["Authorization"];
};

export { api, setHeadersWithUserToken, unsetHeadersWithUserToken };
