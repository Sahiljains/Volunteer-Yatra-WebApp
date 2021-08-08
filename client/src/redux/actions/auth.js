import axios from "axios";

const config = {
	header: {
		"Content-type": "application/json",
	},
};

const register = (userData) => async (dispatch) => {
	try {
		const { data } = await axios.post(
			"/vy/api/v1/auth/register",
			userData,
			config
		);
		// console.log(data);
	} catch (err) {
		console.error(err);
	}
};

const login = (userData) => async (dispatch) => {
	try {
		const { data } = await axios.post(
			"/vy/api/v1/auth/login",
			userData,
			config
		);
		console.log(data);
	} catch (err) {
		console.error(err);
	}
};

export { register, login };
