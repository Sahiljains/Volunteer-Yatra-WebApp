const {Op} = require('sequelize')
const User = require("../../../models/User");
const Verification = require("../../../models/Verification");
const Volunteer = require("../../../models/Volunteer");
const Token = require("../../../models/Token");
const Places = require("../../../models/Places");
const PlaceImage = require("../../../models/PlaceImage");
// const crypto = require("crypto");
// const jwt = require("jsonwebtoken");
const helper = require("../../../config/helpers");
const Address = require("../../../models/Address");
// const Otp = require("../../../models/Otp");

exports.updateSkills = async(skills) => {
    try {
        // const skills = await Volunteer.update({})
        return skills;
    } catch (err) {
        return {err}
    }
}

exports.getStates = async() => {
    try {
        
        const resp = await Places.findAll({where: {}, attributes: ['addressId']});

        const addressIds = [];

        resp.forEach(s => {
            addressIds.push(s.getDataValue('addressId'))
        })

        const states = await Address.findAll({where: {addressId: addressIds}, attributes: ['state'], group: ['state']})

        return states;

    } catch (err) {
        return {err}
    }
}

exports.getOppurtunities = async( state ) => {
    try {
        let oppurtunities;
        if(state) {
            opportunities = await Places.findAll( {include:[{model: Address, where:{state}}]});
        } else {
            opportunities = await Places.findAll( {include:[{model: Address}]});
        }

		// const placeImages = await PlaceImage.findAll({where: {placeId: opportunities.placeId}, include:[{model: PlaceImage}]})
		for(let i=0; i<opportunities.length; i++) {
			let images = await PlaceImage.findAll({where: {placeId: opportunities[i].placeId}});
			opportunities[i] = {...opportunities[i].dataValues, images}
		}
		
		return opportunities;
		
	} catch (err) {
		console.log("error in getOppo controller", err)
		return { err }
		
	}
}