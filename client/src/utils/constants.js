const defaultEnv = {
	baseURL: process.env.REACT_APP_API_BASE_URL,
};
let environment = {
	baseURL: defaultEnv.baseURL,
};

const shorts = {
	auth: "/vy/api/v1/auth",
	admin: "vy/api/v1/admin",
	host: "/vy/api/v1/host",
	profile: "/vy/api/v1/profile",
	volunteer: "/vy/api/v1/volunteer",
};

// console.log("shorts auth:", shorts.auth);

let apiDetail = {
	login: {
		url: `${shorts.auth}/login`,
		method: "POST",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	},
	googleLogin: {
		url: `${shorts.auth}/googleLogin`,
		method: "POST",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	},
	FBLogin: {
		url: `${shorts.auth}/FBLogin`,
		method: "POST",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	},
	register: {
		url: `${shorts.auth}/register`,
		method: "POST",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	},
	registerGoogle: {
		url: `${shorts.auth}/registerViaGoogle`,
		method: "POST",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	},
	registerFB: {
		url: `${shorts.auth}/registerViaFB`,
		method: "POST",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	},
	adminGetAllYatriDetails: {
		url: `${shorts.admin}/yatri`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	adminGetAllHostDetails: {
		url: `${shorts.admin}/host`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	getYatrisCount: {
		url: `${shorts.admin}/count/Yatri`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	getHostsCount: {
		url: `${shorts.admin}/count/Host`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	getDeletedYatrisCount: {
		url: `${shorts.admin}/deleted-count/Yatri`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	getDeletedHostsCount: {
		url: `${shorts.admin}/deleted-count/Host`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	getTotalOpportunities: {
		url: `${shorts.admin}/totalOpportunity`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	getNotifications: {
		url: `${shorts.admin}/notifications`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	hostCreateOpportunity: {
		url: `${shorts.host}/createopportunity`,
		method: "POST",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	hostgetAllOpportunity: {
		url: `${shorts.host}/allOpportunity`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	profileGetBasicInfo: {
		url: `${shorts.profile}/basicinfo`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	profileGetPersonalInfo: {
		url: `${shorts.profile}/personalinfo`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	profileUpdateBasicInfo: {
		url: `${shorts.profile}/basicinfo`,
		method: "PUT",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	profileUpdatePersonalInfo: {
		url: `${shorts.profile}/personalinfo`,
		method: "PUT",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	profileUpdateBio: {
		url: `${shorts.profile}/bio`,
		method: "PUT",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	deleteUser: {
		url: `${shorts.profile}/deleteprofile`,
		method: "DELETE",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	volunteerGetStates: {
		url: `${shorts.volunteer}/oppurtunities/states`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	volunteerGetOpportunities: {
		url: `${shorts.volunteer}/oppurtunities/search`,
		method: "GET",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		}
	},
	// ------------------------------------------------------------- //
};

export { environment, apiDetail };