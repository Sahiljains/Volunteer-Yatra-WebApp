const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("./async");

// Protect route
exports.protect = asyncHandler(async (req, res, next) => {
	let token;
	// console.log("inside protect : ", req);
	var clear = req.cookies;
	// console.log("clear : ", clear);
	// console.log('res : ',res.clearCookie());
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	)
		token = req.headers.authorization.split(" ")[1];
	// else if (req.cookies.token) token = req.cookies.token
	// console.log('token : ', token);
	// Make sure token is sent
	if (!token)
		return res.status(401).json({
			success: false,
			message: "Not Authorized to Access this route",
		});
	// return next(new ErrorResponse(`Not Authorized to Access this route`, 401));

	try {
		// Verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		// console.log('decoded : ', decoded);
		req.user = await User.findByPk(decoded.userId);

		next();
	} catch (err) {
		return res.status(401).json({
			success: false,
			message: "Not Authorized to Access this route",
		});
		// return next(new ErrorResponse(`Not Authorized to Access this route`, 401));
	}
});

exports.checkDuplicateUsernameOrEmail = (req, res, next) => {
	// Username
	User.findOne({
		where: {
			username: req.body.username,
		},
	}).then((user) => {
		if (user) {
			res.status(400).send({
				message: "Failed! Username is already in use!",
			});
			return;
		}

		// Email
		User.findOne({
			where: {
				email: req.body.email,
			},
		}).then((user) => {
			if (user) {
				res.status(400).send({
					message: "Failed! Email is already in use!",
				});
				return;
			}

			next();
		});
	});
};

// Authorize routes for only certain roles
exports.authorize = (...roles) => {
	// console.log("...roles : ", roles);
	return (req, res, next) => {
		// console.log('req in authorize : ', req);
		if (!roles.includes(req.user.role)) {
			next(
				new ErrorResponse(
					`User with ${roles} role not Authorized to access this route`,
					401
				)
			);
		}
		next();
	};
};
