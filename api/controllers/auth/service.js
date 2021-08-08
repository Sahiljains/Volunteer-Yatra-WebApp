const ErrorResponse = require("../../../utils/errorResponse");
const asyncHandler = require("../../../middleware/async");
const {
	register,
	login,
	googleLogin,
	getallUsers,
	userProfile,
	logout,
	forgotPassword,
	verifyOTP,
	addUserViaGoogle,
	addUserViaFB,
	FBLogin, 
	verifyEmail
} = require("./controller");
const { MESSAGES } = require("../../../config/constantMessages");

// @desc    Register a user
// @route   POST /vy/api/v1/auth/register
// @access  Public
exports.registerUser = asyncHandler(async (req, res, next) => {
	// console.log("req body :", req.body);
	// console.log('nnext : ', next);
	// console.log('req in reg service : ', req);
	const user = await register(req.body);
	// console.log("user  response : ", user);
	if (user.err) return next(user.err);
	res
		.status(200)
		.cookie("accessToken", user.accessToken, user.cookieOptions)
		.json({
			success: true,
			data: {
				token: user.accessToken,
				message: MESSAGES.Account.ActivateAccount ,
			},
		});
});

exports.verifyEmail = asyncHandler(async(req, res, next) => {
	console.log(req.params.email, req.params.token);

	const { email, token } = req.params;

	const emailverified = await verifyEmail(email, token);
	
	if(emailverified.err) {
		res
			.status(404)
			.send(`<div style="height: 100vh; display: flex; flex-direction: column;justify-content: center; align-items: center;"><h1>Not Found! <strong>:(</strong></h1></div>`)
	} else {
		res
			.status(200)
			.send(`<div style="height: 100vh; display: flex; flex-direction: column;justify-content: center; align-items: center;"><h1>${MESSAGES.Account.Activated}</h1><h3>You can <a href="http://localhost:3000/login">Login now</a></h3></div>`)
	}
})

exports.registerUserViaGoogle = asyncHandler(async(req, res, next) => {

	// Check if google user already Exists
	const googleUser = await addUserViaGoogle(req.body);

	if(googleUser.err) return next(googleUser.err);

	res
		.status(200)
		.cookie("accessToken", googleUser.accessToken, googleUser.cookieOptions)
		.json({
			success: true,
			data: {
				token: googleUser.accessToken,
				message: MESSAGES.success.registrationSuccess
			}
		})

})


exports.registerUserViaFB = asyncHandler(async(req, res, next) => {

	// Check if google user already Exists
	const FBUser = await addUserViaFB(req.body);

	if(FBUser.err) return next(FBUser.err);

	res
		.status(200)
		.cookie("accessToken", FBUser.accessToken, FBUser.cookieOptions)
		.json({
			success: true,
			data: {
				token: FBUser.accessToken,
				message: MESSAGES.success.registrationSuccess
			}
		})

})

// @desc    Login a user
// @route   POST /vy/api/v1/auth/login
// @access  Public
exports.loginUser = asyncHandler(async (req, res, next) => {
	// console.log("request in controller : ", req);
	const { email, password } = req.body;

	if (!email || !password)
		return res.status(400).json({
			success: false,
			message: "Please provide all credentials",
		});
	// return next(new ErrorResponse(`Please provide all credentials`, 400));

	const result = await login(email, password);
	// console.log("result :", result);

	if (result.message)
		return res.status(result.statusCode).json({
			success: false,
			message: result.message,
		});
	// return next(new ErrorResponse(result.message, result.statusCode));

	res
		.status(200)
		// .cookie("accessToken", result.accessToken, result.cookieOptions)
		.json({
			success: true,
			data: {
				accessToken: result.accessToken,
				userId: result.userId,
				userRole: result.role,
			},
		});
});

exports.loginGoogleUser = asyncHandler(async (req, res, next) => {
	// console.log("request in controller : ", req);
	const { email, google_id } = req.body;

	if (!email || !google_id)
		return res.status(400).json({
			success: false,
			message: "Please provide all credentials",
		});
	// return next(new ErrorResponse(`Please provide all credentials`, 400));

	const result = await googleLogin(email, google_id);
	// console.log("result :", result);

	if (result.message)
		return res.status(result.statusCode).json({
			success: false,
			message: result.message,
		});
	// return next(new ErrorResponse(result.message, result.statusCode));

	res
		.status(200)
		// .cookie("accessToken", result.accessToken, result.cookieOptions)
		.json({
			success: true,
			data: {
				accessToken: result.accessToken,
				userId: result.userId,
				userRole: result.role,
			},
		});
});

exports.loginFBUser = asyncHandler(async (req, res, next) => {
	// console.log("request in controller : ", req);
	const { email,id } = req.body;
	console.log(req.body);

	if (!email || !id)
		return res.status(400).json({
			success: false,
			message: "Please provide all credentials",
		});
	// return next(new ErrorResponse(`Please provide all credentials`, 400));

	const result = await FBLogin(email,id);
	// console.log("result :", result);

	if (result.message)
		return res.status(result.statusCode).json({
			success: false,
			message: result.message,
		});
	// return next(new ErrorResponse(result.message, result.statusCode));

	res
		.status(200)
		// .cookie("accessToken", result.accessToken, result.cookieOptions)
		.json({
			success: true,
			data: {
				accessToken: result.accessToken,
				userId: result.userId,
				userRole: result.role,
			},
		});
});

// @desc    Logout a user
// @route   POST /vy/api/v1/auth/logout
// @access  Private
exports.logoutUser = asyncHandler(async (req, res, next) => {
	// console.log("req service : ", req);
	// req.cookies.set("accessToken", { expires: Date.now() });
	// console.log("res service : ", res);

	const exit = await logout();
	// console.log("exit : ", exit);
});

// @desc    Get user details
// @route   GET /vy/api/v1/auth/me
// @access  Private
exports.userProfile = asyncHandler(async (req, res, next) => {
	const user = await userProfile(req.user.userId);
	res.status(200).json({ success: true, data: user });
});

exports.getallUsers = asyncHandler(async (req, res, next) => {
	const users = await getallUsers();
	// console.log('users: ', users);
	res.status(200).json({ success: true, data: users });
});

// exports.forgotPassword = asyncHandler(async (req, res, next) => {
// 	const { email, password } = req.body;

// 	if (!email || !password)
// 		return res.status(400).json({
// 			success: false,
// 			message: "Email cannot be empty",
// 		});

// 	// return next(new ErrorResponse(`Email cannot be empty`, 400));

// 	const result = await forgotPassword(email, password);
// 	// console.log("result :", result);

// 	if (result.err)
// 		return res.status(result.statusCode).json({
// 			success: false,
// 			message: result.message,
// 		});
// 	// return next(new ErrorResponse(result.message, result.statusCode));

// 	res.status(200).json({
// 		success: true,
// 		data: {
// 			message: result.message,
// 			// accessToken: result.accessToken,
// 		},
// 	});
// });

exports.forgotPassword = asyncHandler( async(req, res, next) => {
	const {email} = req.body;
	
	console.log(req.body)

	if(!email) {
		return res.status(400).json({
			success: false,
			message: "Email and Mobile number both are required!",
		});
	}

	const result = await forgotPassword(email);
	// console.log("result :", result);

	if (result.err)
		return res.status(result.statusCode).json({
			success: false,
			message: result.message,
		});
	// return next(new ErrorResponse(result.message, result.statusCode));

	res.status(200).json({
		success: true,
		data: {
			message: result.message,
			user: result.user
			// accessToken: result.accessToken,
		},
	});
})

exports.verifyOTP = asyncHandler( async(req, res, next) => {
	const { userId, otp } = req.body;

	if(!userId || !otp) {
		return res.status(400).json({
			success: false,
			message: "UserId and OTP not supplied!",
		});
	}

	const result = await verifyOTP(userId, otp);
	// console.log("result :", result);

	if (result.err)
		return res.status(result.statusCode).json({
			success: false,
			message: result.message,
		});
	// return next(new ErrorResponse(result.message, result.statusCode));

	res.status(200).json({
		success: true,
		data: {
			message: result.message,
			user: result.user
		},
	});
})