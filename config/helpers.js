const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
// import CONSTANTS from "./constants";
const CONSTANTS = require("./constants");
const handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { getMaxListeners } = require("../routes/apis");
const { info } = require("console");
// require('dotenv')

exports.generateToken = (user, statusCode) => {
	// console.log("user  in token:", user.dataValues);
	let result = {};

	// calling user instance method to get signed JWT token from Model
	const accessToken = user.getJWTSignedToken();
	const userId = user.dataValues.userId;
	const role = user.dataValues.role;
	// console.log("userId : ", userId);
	// var accessToken = jwt.sign({ id: user.userId }, process.env.JWT_SECRET, {
	// 	expiresIn: 86400, // 24 hours
	// });
	// console.log("token :", accessToken);
	const options = {
		expiresIn: Math.floor(Date.now() / 1000) + 60 * 60, // 24 hours time
		httpOnly: true,
	};

	// Use HTTPS if env is production
	if (process.env.NODE_ENV === "production") {
		option.secure = true;
	}

	result.accessToken = accessToken;
	result.statusCode = statusCode;
	result.cookieOptions = options;
	result.userId = userId;
	result.role = role;
	// console.log("result : ", result);
	return result;
};

// exports.sendmail = async (toEmail, subject, content, userToken) => {
// 	var smtpTransport = nodemailer.createTransport({
// 		service: "gmail",
// 		auth: {
// 			// user: CONSTANTS.EMAIL_AUTH.USERNAME,
// 			// pass: CONSTANTS.EMAIL_AUTH.PASSWORD,
// 			user: process.env.USERNAME,
// 			pass: process.env.PASSWORD,
// 		},
// 	});
// 	var mailOptions = {
// 		from: process.env.USERNAME,
// 		to: toEmail,
// 		subject: "Account Verification Link",
// 		text: "Email link verification link has been sent",
// 		// subject: subject,
// 		// html: content,
// 	};
// 	var info = "";
// 	try {
// 		info = await smtpTransport.sendMail(mailOptions);
// 		return true;
// 	} catch (err) {
// 		console.log({ status: false, data: {}, msg: "mail send error : " + err });
// 	}
// 	return info;
// };

// var transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD } });
// var mailOptions = { from: 'no-reply@example.com', to: user.email, subject: 'Account Verification Link',
// text: 'Hello '
// + req.body.name +',\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/'
// + req.headers.host + '\/confirmation\/' + user.email + '\/' + token.token + '\n\nThank You!\n' };
// transporter.sendMail(mailOptions, function (err) {
// 	if (err) {
// 		return res.status(500).send({msg:'Technical Issue!, Please click on resend for verify your Email.'});
// 		}
// 	return res.status(200).send('A verification email has been sent to ' + user.email + '. It will be expire after one day. If you not get verification Email click on resend token.');
// });

exports.sendmail = async (email, subject, payload, template) => {
	try {
		// create reusable transporter object using the default SMTP transport
		// console.log(process.env.USERNAME, process.env.PASSWORD);
		const transporter = nodemailer.createTransport({
			service: "Gmail",
			auth: {
				user: process.env.EMAIL ,
				pass: process.env.PASSWORD // naturally, replace both with your real credentials or an application-specific password
			},
		});

		const source = fs.readFileSync(path.join(__dirname, template), "utf8");
		const compiledTemplate = handlebars.compile(source);
		const options = {
			from: process.env.EMAIL,
			to: email,
			subject: subject,
			html: compiledTemplate(payload),
		};

		let info = await transporter.sendMail(options);
		info.success = true;

		// console.log({ status: false, data: {}, msg: "mail send error : " + err });

		return info;
	} catch (error) {
		return {
			success: false,
			message: error.message,
		};
	}
};

// 	try {
// 		info = await smtpTransport.sendMail(mailOptions);
// 		return true;
// 	} catch (err) {
// 		console.log({ status: false, data: {}, msg: "mail send error : " + err });
// 	}
// 	return info;

exports.generateOTP = () => {
	let digits = "0123456789",
		OTP = "";
	for (let i = 0; i < 6; i++) {
		OTP += digits[Math.floor(Math.random() * 10)];
	}
	return OTP;
};

exports.getTimeDifference = (createdAt) => {
	// return time difference in minutes.

	// 6/12/2021, 4:37:16 PM - This is the format of time stored in database

	// console.log("Created At+++++++++++++++++++++++", createdAt);

	const curDate = new Date();

	const creDate = new Date(createdAt);

	const diff = (curDate.getTime() - creDate.getTime()) / (1000 * 60);

	// console.log("Diff is +++++++++++++++++++++++", diff);
	return diff;
};
