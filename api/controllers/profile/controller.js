const User = require("../../../models/User");
const Notification = require("../../../models/Notification");
const Verification = require("../../../models/Verification");
const Token = require("../../../models/Token");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
var helper = require("../../../config/helpers");
const Otp = require("../../../models/Otp");
const generator = require("generate-password");
const Address = require("../../../models/Address");

exports.updateBasicInfo = async (body, userId) => {
	const { gender, firstName, lastName } = body;
	let user = {};

	try {
		user = await User.update(
			{
				gender,
				firstName,
				lastName,
			},
			{ where: { userId } }
		);

		return user;
	} catch (err) {
		user.err = err;
		return user;
	}
};

exports.updatePersonalInfo = async(body, userId) => {

	const { mobileNo, address} = body

	try {
		
		await User.update({mobileNo}, {where: {userId}});
		// Check if user has address
		const userDetails = await User.findOne({where: {userId}});

		if(userDetails.addressId == null) {
			// Create address
			const newAddress = await Address.create({
				line1: address.line1,
				line2: address.line2,
				city: address.city,
				state: address.state,
				pincode: address.pincode,
			})

			await User.update({addressId: newAddress.addressId, mobileNo: body.mobileNo}, {where: {userId}})
		} else {
			const newAddress = await Address.update({
				line1: address.line1,
				line2: address.line2,
				city: address.city,
				state: address.state,
				pincode: address.pincode
			}, {where: {addressId: userDetails.addressId}})

			await User.update({mobileNo: body.mobileNo}, {where: {userId}})
		}

		return {
			success: true
		}

	} catch (error) {
		console.log(error)
		return {
			err: error.message
		}
	}

}

exports.deleteProfile = async (userId) => {
	let user = {};

	try {
		user = await User.findOne({where: { userId }});
		
		await User.destroy({where: { userId }})

		await Notification.create({userId: user.userId, name: `${user.firstName} ${user.lastName}`, role: user.role, type: "Deleted"})
		
		// user = await User.destroy({ where: { userId } });


		return user;
	} catch (err) {
		user.err = err;
		return user;
	}
};

exports.getBasicInfo = async (userId) => {
	let user = {};

	try {
		user = await User.findOne({
			where: { userId },
			attributes: ["age", "dob", "gender", "firstName", "lastName", "userId", "profilePic", "bio"],
		});
		return user;
	} catch (err) {
		user.err = err;
		return user;
	}
};

exports.getPersonalInfo = async (userId) => {
	let result = {};

	try {
		const user = await User.findOne({
			where: { userId },
			attributes: ["email", "mobileNo", "addressId"],
		});
		const address = await Address.findOne({
			where: { addressId: user.addressId },
		});

		return { user, address };
	} catch (err) {
		result.err = err;
		return result;
	}
};

exports.Bio = async (userId, bio) => {
	let user = {};

	try {
		user = await User.update(
			{ bio },
			{ where: { userId }, attributes: ["bio"] }
		);

		return user;
	} catch (err) {
		user.err = err;
		return user;
	}
};

exports.uploadProfilePic = async (userId, filename) => {
	// console.log(file);
	try {
		const profilePic = `${filename}`;

		const updated = await User.update({ profilePic }, { where: { userId } });

		return {
			profilePic,
		};
	} catch (error) {
		return {
			err: error.message,
		};
	}
};

exports.getProfilePic = async (userId) => {
	try {
		// console.log("in profile details")
		const profile = await User.findOne({
			where: { userId },
			attributes: ["profilePic"],
		});

		console.log(profile);
		return {
			profilePic: profile.profilePic,
		};
	} catch (error) {
		return {
			err: error.message,
		};
	}
};
