import { api } from "./axios";
import { apiDetail } from "../utils/constants";
import { setHeadersWithUserToken } from "./axios";

const login = async (email, password) => {

	const userDetail = { email, password };

	try {
		const afterSuccess = await api.post(apiDetail.login.url, userDetail);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error in login : ", error);
		// throw error;
		return error.response;
	}
};

const googleLogin = async (email, google_id) => {
	const userDetail = { email, google_id };

	try {
		const afterSuccess = await api.post(apiDetail.googleLogin.url, userDetail);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error in login : ", error);
		// throw error;
		return error.response;
	}
};

const FBLogin = async (email, id) => {
	const userDetail = { email,id };

	try {
		const afterSuccess = await api.post(apiDetail.FBLogin.url, userDetail);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error in login : ", error);
		// throw error;
		return error.response;
	}
};



const register = async (firstname, lastname, phone, email, password, role) => {
	const userDetail = {
		firstName: firstname,
		lastName: lastname,
		mobileNo: "+91" + phone,
		email: email,
		password,
		role: role.charAt(0).toUpperCase() + role.slice(1),
	};

	console.log(userDetail)
	try {
		const afterRegistration = await api.post(
			apiDetail.register.url,
			userDetail
		);
		return afterRegistration;
	} catch (error) {
		console.error("error in partner signup in auth servier = ", error);
		throw error;
	}
};

// email, firstName, lastName, role, username, profilePic, google_id, access_token

const registerViaGoogle = async (givenName, familyName, email, imageUrl, google_id, access_token, role) => {
	const userDetail = {
		firstName: givenName,
		lastName: familyName,
		email,
		role: role.charAt(0).toUpperCase() + role.slice(1),
		profilePic: imageUrl,
		google_id,
		access_token
	};

	console.log(userDetail)
	try {
		const afterRegistration = await api.post(
			apiDetail.registerGoogle.url,
			userDetail
		);
		return afterRegistration;
	} catch (error) {
		console.error("error in partner signup in auth servier = ", error.message);
		throw error;
	}
};

const registerViaFB = async (givenName, familyName, email,imageUrl, fb_id ,access_token, role) => {
	const userDetail = {
		firstName: givenName,
		lastName: familyName,
		email,
		role: role.charAt(0).toUpperCase() + role.slice(1),
		profilePic: imageUrl,
		fb_id,
		access_token 
		
	};

	console.log(userDetail)
	try {
		const afterRegistration = await api.post(
			apiDetail.registerFB.url,
			userDetail
		);
		return afterRegistration;
	} catch (error) {
		console.error("error in partner signup in auth servier = ", error);
		throw error;
	}
};



export { login, googleLogin, register, registerViaGoogle,registerViaFB,FBLogin };
