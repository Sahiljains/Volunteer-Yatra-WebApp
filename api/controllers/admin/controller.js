const {Op} = require('sequelize')
const User = require("../../../models/User");
const Host = require("../../../models/Host");
const Address = require("../../../models/Address")
const Notification = require("../../../models/Notification");
const Blog = require("../../../models/Blog");
const Comment = require("../../../models/Comment");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
var helper = require("../../../config/helpers");
const Places = require('../../../models/Places');

exports.getHost = async(userId) => {
	
	try {
		
		const host = await Host.findOne({where: {userId}});
		
		// console.log("Host ", host)

		if(!host) {
			throw new Error("Host doesn't exist!!")
		}

		return host;
		
	} catch (err) {
		// console.log("error in getHost ", err)
		return {err}
	}
	
}

exports.getAllYatriDetails = async () => {
	try {

        const yatris = await User.findAll({
            where: { role: "Yatri" },
			attributes: ['userId', 'firstName', 'lastName', 'email', 'age','gender', 'mobileNo', 'profilePic'],
            order: [['updatedAt', 'DESC']]
        });
        
		return yatris;
	} catch (err) {
        return { err };
	}
};

exports.getYatriDetails = async (userId) => {
	try {

        const yatri = await User.findOne({
            where: { userId },
			// attributes: ['userId', 'firstName', 'lastName', 'email', 'age','gender', 'mobileNo', 'profilePic'],
            // order: [['updatedAt', 'DESC']]
            include: [{model: Address}]
        });
        
		return yatri;
	} catch (err) {
        return { err };
	}
};

exports.getAllHostDetails = async () => {
    try {
        
        const hosts = await User.findAll({
            where: { role: "Host" },
            attributes: ['userId', 'firstName', 'lastName', 'email', 'age','gender', 'mobileNo', 'profilePic'],
            order: [['updatedAt', 'DESC']],
            include: [{ model: Address }]
        });

		return hosts;
	} catch (err) {
		return { err };
	}
};

exports.getHostDetails = async (userId) => {
    try {
        
        const hosts = await User.findOne({
            where: { userId },
            include: [{ model: Address }]
        });

		return hosts;
	} catch (err) {
		return { err };
	}
};

exports.getCount = async (role) => {
    try {
        const count = await User.count({where: {role}})

        return count;
    } catch (err) {
        return { err };
    }
}

exports.getDeletedCount = async (role) => {
    try {
        const count = await User.count({where: {role, deletedAt: {[Op.not]: null}}, paranoid: false})
        
        return count;
        
    } catch (err) {
        return { err }
    }
}

exports.getOpportunityCount = async() => {

    try {
        const count = await Places.count({where: {}});

        return count;
    } catch (err) {
        return { err }
    }
}

exports.getOpportunityCountByHost = async(hostId) => {

    try {
        const count = await Places.count({where: {hostId}});

        return count;
    } catch (err) {
        return { err }
    }
}

exports.deleteAccount = async (userId) => {
    try {
        const result = await User.destroy({where: {userId}});

        return result;
    } catch (err) {
        return { err };
    }
}

exports.getNotifications = async () => {

    try {
        
        const  notifications = await Notification.findAll({where: {}, order: [['updatedAt', 'DESC']]});

        // console.log(notifications)

        return notifications;
    } catch (err) {
        return { err }
    }

}