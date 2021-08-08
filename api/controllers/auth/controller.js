const User = require("../../../models/User");
const Verification = require("../../../models/Verification");
const Token = require("../../../models/Token");
const Notification = require("../../../models/Notification");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
var helper = require("../../../config/helpers");
const Otp = require("../../../models/Otp");
const generator = require('generate-password');
// const { where } = require("sequelize/types");

// const successHandler = require("../../../utils/successHandler");
// const router = require("./router");

// const { register, login, getMe } = require("../services/authService");

exports.register = async (body) => {
	// console.log('request in reg controller : ', req);
	/**
	 * when registered entries added in user, verification and token models
	 * user - user details
	 * verification - isVerified
	 * token - token, expireAt
	 * delete all matching entries when user gets deleted
	 */
	const { mobileNo, email, firstName, lastName, password, role, username } =
		body;
	// console.log("body : ", mobileNo);
	let result = {};
	try {
		// password = await helper.encryptPassword(password);
		
		const user = await User.create({
			mobileNo,
			email,
			firstName,
			lastName,
			password,
			role,
			username,
		});

		// jwt token
		result = helper.generateToken(user, 200);

		/**
		 * if error while registraion -> not to add entries in any table -> user,
		 * verification, token -> destroy it
		 */

		await Verification.create({
			userId: user.userId,
		}).catch(async (err) => {
			console.log("error catch : ", err);
			await Verification.destroy({ where: { userId: user.userId } });
			await User.destroy({ where: { userId: user.userId } });
			result.err = err;
		});
		// console.log("user : ", user);
		// token model used to store token, 24 hours default retention
		// crypto token for email link
		var token = await Token.create({
			userId: user.userId,
			token: crypto.randomBytes(16).toString("hex"),
			// expireAt: result.cookieOptions.expiresIn
		}).catch(async (err) => {
			console.log("error catch : ", err);
			await User.destroy({ where: { userId: user.userId } });
			await Token.destroy({ where: { userId: user.userId } });
			result.err = err;
		});

		// send mail with verification link
		// console.log("token : ", token);
		let verification_link = `http://localhost:5000/vy/api/v1/auth/verifyEmail/${email}/${token.token}`

		let emailResponse = await helper.sendmail(
			user.email,
			"Account Verification Link",
			{ name:user.firstName, verification_link },
			"../utils/email/templates/emailVerification.handlebars"
		);

		if(!emailResponse.success) {
			console.log(emailResponse.message )
			await User.destroy({ where: { userId: user.userId } });
			await Token.destroy({ where: { userId: user.userId } });
			result.err = "Email not sent";
		}

		return result;
	} catch (err) {
		result.err = err;
		console.log(err)
		return result;
	}
};

exports.verifyEmail = async(email, token) => {

	let result = {};

	try {
		const user = await User.findOne({where: {email}});

		const verification = await Verification.findOne({where: {userId: user.userId}});

		if(verification.isEmail == 1) {
			result.err = "Email already verified and Account is activated."
		}

		const savedToken = await Token.findOne({where: {userId: user.userId}});

		if(savedToken.token == token) {
			// email verified set isEmail to 1 and delete from token table
			await verification.update({isEmail: 1});
			await savedToken.destroy();
			await Notification.create({userId: user.userId, name: `${user.firstName} ${user.lastName}`, role: user.role, type: "Registered"})
			result.message = "Email verified and Account Activated";
		}
		
		return result
	} catch (error) {
		result.err = error.message;
		return result
	}
	
}

exports.addUserViaGoogle = async(body) => {
	
	const { email, firstName, lastName, role, username, profilePic, google_id, access_token} = body;
	
	let result = {};
	
	const password = generator.generate({
		length: 10,
		lowercase: true,
		uppercase: true,
		numbers: true
	});
	
	try {
		const user = await User.create({
			email,
			firstName,
			lastName,
			password,
			role,
			username,
			profilePic,
			google_id,
			google_access_token: access_token
		});
		
		// jwt token
		result = helper.generateToken(user, 200);
		
		/**
		 * if error while registraion -> not to add entries in any table -> user,
		 * verification, token -> destroy it
		 */
		
		await Verification.create({
			userId: user.userId,
			isEmail: 1,
			isGoogleAuth: 1
		}).catch(async (err) => {
			console.log("error catch : ", err);
			await Verification.destroy({ where: { userId: user.userId } });
			await User.destroy({ where: { userId: user.userId } });
			result.err = err;
		});

		await Notification.create({userId: user.userId, name: `${user.firstName} ${user.lastName}`, role: user.role, type: "Registered"})
		.catch(async (err) => {
			console.log("error catch : ", err);
			await Verification.destroy({ where: { userId: user.userId } });
			await User.destroy({ where: { userId: user.userId } });
			result.err = err;
		})
		// console.log("user : ", user);
		// token model used to store token, 24 hours default retention
		// crypto token for email link
		// var token = await Token.create({
			// 	userId: user.userId,
			// 	token: crypto.randomBytes(16).toString("hex"),
			// 	// expireAt: result.cookieOptions.expiresIn
			// }).catch(async (err) => {
				// 	console.log("error catch : ", err);
				// 	await User.destroy({ where: { userId: user.userId } });
				// 	await Token.destroy({ where: { userId: user.userId } });
				// 	result.err = err;
				// });
				// console.log("token : ", token);
				// send mail with verification link
				// await helper.sendmail(email, "", "", token.token);
				return result;
			} catch (error) {
				result.err = err;
		return result;
	}
}



exports.addUserViaFB = async(body) => {
	
	
	const { email, firstName, lastName, role, username, profilePic, id, access_token} = body;
	console.log(email, firstName, lastName, role, username, profilePic, id, access_token);

	let result = {};

	const password = generator.generate({
		length: 10,
		lowercase: true,
		uppercase: true,
		numbers: true
	});

	try {
		const user = await User.create({
			email,
			firstName,
			lastName,
			password,
			role,
			username,
			profilePic,
			fb_id : id,
			fb_access_token: access_token
		});


		// jwt token
		result = helper.generateToken(user, 200);

		/**
		 * if error while registraion -> not to add entries in any table -> user,
		 * verification, token -> destroy it
		 */

		await Verification.create({
			userId: user.userId,
			isEmail: 1,
			isFacebookAuth: 1
		}).catch(async (err) => {
			console.log("error catch : ", err);
			await Verification.destroy({ where: { userId: user.userId } });
			await User.destroy({ where: { userId: user.userId } });
			result.err = err;
		});

		await Notification.create({userId: user.userId, name: `${user.firstName} ${user.lastName}`, role: user.role, type: "Registered"})
		.catch(async (err) => {
			console.log("error catch : ", err);
			await Verification.destroy({ where: { userId: user.userId } });
			await User.destroy({ where: { userId: user.userId } });
			result.err = err;
		})
		// console.log("user : ", user);
		// token model used to store token, 24 hours default retention
		// crypto token for email link
		// var token = await Token.create({
		// 	userId: user.userId,
		// 	token: crypto.randomBytes(16).toString("hex"),
		// 	// expireAt: result.cookieOptions.expiresIn
		// }).catch(async (err) => {
		// 	console.log("error catch : ", err);
		// 	await User.destroy({ where: { userId: user.userId } });
		// 	await Token.destroy({ where: { userId: user.userId } });
		// 	result.err = err;
		// });
		// console.log("token : ", token);
		// send mail with verification link
		// await helper.sendmail(email, "", "", token.token);
		return result;
	} catch (error) {
		result.err = err;
		return result;
	}
}


exports.login = async (email, password) => {
	let result = {};
	const user = await User.scope("withPwd").findOne({ where: { email } });
	// console.log("user : ", user);
	if (!user) {
		result.message = `User Not Found`;
		result.statusCode = 401;
		return result;
	}

	const verification = await Verification.findOne({where: {userId: user.userId}});

	if(verification.isEmail == 0) {
		// Email not verifed so ask to do that first
		result.message = "Account not activated. Please check your email for Activation Link.";
		result.statusCode = 401;
		return result;
	}

	// Check for password match
	const isMatch = await user.comparePassword(password);
	if (!isMatch) {
		result.message = `Invalid Credentials`;
		result.statusCode = 401;
		return result;
	}

	result = helper.generateToken(user, 200);
	// console.log("result : ", result);
	return result;
};

exports.googleLogin = async (email, google_id) => {
	let result = {};
	const user = await User.findOne({ where: { email, google_id } });
	// console.log("user : ", user);
	if (!user) {
		result.message = `Invalid Credentials`;
		result.statusCode = 401;
		return result;
	}

	// Check for password match
	// const isMatch = await user.comparePassword(password);
	// if (!isMatch) {
	// 	result.message = `Invalid Credentials`;
	// 	result.statusCode = 401;
	// 	return result;
	// }

	result = helper.generateToken(user, 200);
	// console.log("result : ", result);
	return result;
};


exports.FBLogin = async (email,id) => {
	let result = {};
	const user = await User.findOne({ where: { email, fb_id:id } });
	// console.log("user : ", user);
	if (!user) {
		result.message = `Invalid Credentials`;
		result.statusCode = 401;
		return result;
	}

	// Check for password match
	// const isMatch = await user.comparePassword(password);
	// if (!isMatch) {
	// 	result.message = `Invalid Credentials`;
	// 	result.statusCode = 401;
	// 	return result;
	// }

	result = helper.generateToken(user, 200);
	// console.log("result : ", result);
	return result;
};


// logout
exports.logout = async (req, res, next) => {
	// console.log('logout success');
	// console.log("req controller : ", req);
	// console.log("res controller : ", res);
	// return req.cookie
	let result = {};
	// console.log('res :', req);
	cookie = req.cookies;
	// console.log("cookie : ", cookie);
	// for (var prop in cookie) {
	// 	if (!cookie.hasOwnProperty(prop)) {
	// 		continue;
	// 	}
	// 	res.cookie(prop, "", { expires: new Date(0) });
	// }
	// res.redirect("/");
	// const user =
	// console.log("req user :", req);
	// res.clearCookie("accessToken").then((message) => {
	// 	result.message = `Logout success`;
	// 	result.statusCode = 200;
	// 	return result;
	// });
	// console.log("logout successfully");
	// await req.user.save();
	// res.cookie.set(
	// 	"accessToken",
	// 	{ expires: Date.now() }.then((message) => {
	// 		result.message = `Logout success`;
	// 		result.statusCode = 200;
	// 		return result;
	// 	})
	// );
	// return res.sendStatus(200);

	// let sess = req
};

// profile or logged in user details
exports.userProfile = async (userId) => {
	const user = await User.findOne({
		where: { userId },
		include: [
			{
				model: Verification,
			},
		],
	});
	return user;
};

// get all users list
exports.getallUsers = async (req, res) => {
	let result = {};

	const users = await User.findAll()
		// .then((data) => {
		// 	res.send(data);
		// })
		.catch((err) => {
			result.err = err;
			return result;
			// res.status(500).send({
			// 	message:
			// 		err.message || "Some error occurred while retrieving tutorials.",
			// });
		});
	// console.log("length : ", users.length);
	return users;
};

// exports.forgotPassword = async (email, mobileNo) => {
// 	let result = {};
// 	await User.findOne({ where: { email , mobileNo} }).then((record) => {
// 		if (!record) {
// 			result.message = `Email doesn't match`;
// 			result.statusCode = 401;
// 			return result;
// 			// throw new Error("no record");
// 		}

// 		return record.update({ password }).then((updateRecord) => {
// 			// console.log("updated rows : ", updateRecord);
// 			result.message = `password changed`;
// 			result.statusCode = 200;
// 			return result;
// 		});
// 	});
// 	return result;
// };

exports.forgotPassword = async (email) => {
	let result = {};
	await User.findOne({ where: { email } })
		.then(async (record) => {
			if (!record) {
				result.message = `Email invalid`;
				result.statusCode = 401;
				result.err = result.message;
				return result;
				// throw new Error("no record");
			}

			let user = record.dataValues;

			let otpCheck = await this.checkOtpAvailable(user.userId);

			// console.log('OTP CHECK ++++++++++++++++++++++++++++++',otpCheck)

			if(otpCheck) {
				if ( otpCheck.dataValues && !otpCheck.err) {
					// otp already exists for this user
					// so check expiry
	
					let diff = helper.getTimeDifference(otpCheck.dataValues.time);
	
					// console.log("diff is ++++++++++++++++++++++++++ ", diff)
	
					if (diff < parseInt(otpCheck.dataValues.expiresIn)) {
						// Already exists
						result.message = "OTP is already sent";
						result.statusCode = 401;
						result.err = result.message;
						return result;
					} else {
						// Otp expired so delete it
						await otpCheck.destroy();
					}
				} else if(otpCheck.err) {
					result.message = otpCheck.err;
					result.statusCode = 401;
					result.err = result.message;
					return result;
				}
			}

			
			// Send OTP in mail
			const otp = helper.generateOTP();

			const date= new Date();

			const otpResponse = await Otp.create({
				userId: user.userId,
				otp,
				expiresIn: 5,
				time: date.toLocaleString()
			});

			let emailResponse = await helper.sendmail(
				email,
				"Verification of Forgot Password Request.",
				{ otp },
				"../utils/email/templates/forgotPasswordOTP.handlebars"
			);

			if (emailResponse.success) {
				result = emailResponse;
				result.statusCode = 200;
				result.user = {
					userId: user.userId,
					email,
				};
			} else {
				// console.log("Destroying em");
				await otpResponse.destroy();
				throw new Error("Email not sent");
			}
		})
		.catch((err) => {
			result.message = err.message;
			result.statusCode = 401;
			result.err = result.message;
		});

	// console.log(result)

	// return record.update({ password }).then((updateRecord) => {
	// 	// console.log("updated rows : ", updateRecord);
	// 	result.message = `password changed`;
	// 	result.statusCode = 200;
	// 	return result;
	// });
	return result;
};

exports.checkOtpAvailable = async (userId) => {
	try {
		const otp = await Otp.findOne({
			where: {
				userId,
			},
		});
		
		// console.log('+++++++++++++OTP',otp)

		return otp;
	} catch (error) {
		return {
			err: error.message,
		};
	}
};

exports.verifyOTP = async(userId, otp) => {

	let result = {};

	const record = await this.checkOtpAvailable(userId);

		if(record == null) {
			result.message =  `OTP not found try requesting for OTP again`;
			result.statusCode = 401;
			result.err = result.message;
			return result;
		}else if(record.err != undefined) {
			result.message =  record.err;
			result.statusCode = 401;
			result.err = result.message;
			return result;
		}
		// Check if expired

		// console.log(record.dataValues.time)
		let diff = helper.getTimeDifference(record.dataValues.time);

		const userRecord = await User.findOne({where: {userId}});

		const {email} = userRecord.dataValues;

		if(diff >= parseInt(record.dataValues.expiresIn)) {
			// Destroy otp and ask for new one
			await record.destroy();

			result.message = `OTP expired ask for new one`;
			result.statusCode = 401;
			result.err = result.message;
			return result;
		}

		if(record.dataValues.otp == otp) {
			// otp match then reset password and destroy record
			let newPassword =  generator.generate({
				length: 10,
				lowercase: true,
				uppercase: true,
				numbers: true
			});

			// newPassword = await helper.encryptPassword(newPassword);

			await User.update({ password: newPassword }, { where: { userId }}).then(async() => {

				let emailResponse = await helper.sendmail(
					email,
					"Password reset for account.",
					{ newPassword },
					"../utils/email/templates/passwordReset.handlebars"
				);
	
				if (emailResponse.success) {
					result = emailResponse;
					result.statusCode = 200;
					result.user = {
						userId,
						email,
					};

					await record.destroy();
				} else {
					// console.log("Destroying em");
					// await otpResponse.destroy();
					// throw new Error("Email not sent");
				}
			})
		}

		return result;
}
