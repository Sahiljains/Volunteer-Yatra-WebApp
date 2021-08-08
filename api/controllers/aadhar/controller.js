const {Op} = require('sequelize')
const User = require("../../../models/User");
const Verification = require("../../../models/Verification");
const Token = require("../../../models/Token");
// const crypto = require("crypto");
// const jwt = require("jsonwebtoken");
const helper = require("../../../config/helpers");
const Address = require("../../../models/Address");
// const Otp = require("../../../models/Otp");

exports.checkVerified = async (userId) => {
	try {
		const verified = await Verification.findOne({ where: { userId } });

		return verified.isAadhar;
	} catch (error) {
		return {
			err: error.message,
		};
	}
};

exports.uploadAadhar = async (userId, aadhar, filename) => {
	// console.log(file);
	try {
		const aadharPic = `${filename}`;

		const updated = await User.update(
			{ aadhar, aadharPic },
			{ where: { userId } }
		);

		return {
			aadharPic,
			aadhar,
		};
	} catch (error) {
		return {
			err: error.message,
		};
	}
};

exports.getAadhar = async (userId) => {
	try {
		const aadharDetails = await User.findOne({ where: { userId } });

		return {
			aadhar: aadharDetails.aadhar,
			aadharPic: aadharDetails.aadharPic,
		};
	} catch (error) {
		return {
			err: error.message,
		};
	}
};

exports.markVerified = async (userId) => {
	try {

        const userRole = await User.findOne({where: {userId}, attributes: ['role']});
        
        if(userRole.role != 'Yatri') {
            return {
                err: `User with ${userRole.role} role not Authorized to access this route.`
            }
        }

		const verificationDetails = await Verification.findOne({
			where: { userId },
		});

		if (verificationDetails.isEmail == 1) {
			await verificationDetails.update({ isAadhar: 1, isVerified: 1 });
		} else {
			await verificationDetails.update({ isAadhar: 1 });
		}

		return {
			success: true,
		};
	} catch (error) {
		return {
			err: error.message,
		};
	}
};

exports.getPendingVerifications = async () => {
	try {
		// return userdetails
		const pendings = await User.findAll({
			where: { role: "Yatri", aadharPic: {[Op.not ]: null} },
            attributes: ['firstName', 'lastName', 'email', 'mobileNo', 'gender', 'profilePic', 'dob', 'aadhar', 'aadharPic', 'addressId'],
			include: [{ model: Verification, where: { isAadhar: 0 }, attributes: ['isEmail', 'isAadhar', 'isVerified'] }, {model: Address}],
		});

        // console.log(pendings)
        return pendings;
	} catch (error) {
		return {
			err: error.message,
		};
	}
};
