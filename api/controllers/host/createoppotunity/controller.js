const Host = require("../../../../models/Host");
const Places = require("../../../../models/Places");
const PlaceImage = require("../../../../models/PlaceImage");
const Notification = require("../../../../models/Notification");
const User = require("../../../../models/User");
const sequelize = require("sequelize");
const Address = require("../../../../models/Address");

exports.createOppotunity = async (
	userId,
	name,
	role,
	hostId,
	placeName,
	positionDescription,
	city,
	state,
	pincode,
	fileNames
) => {
	let response = {};

	try {
		const address = await Address.create({city, state, pincode})

		const opportunity = await Places.create({
			hostId,
			placeName,
			positionDescription,
			addressId: address.addressId
		})
		
		const data = []
		
		fileNames.forEach(fileName => {
			console.log("-------Placeid", opportunity.placeId )
			data.push({
				placeImagePic: `${fileName}`,
				placeId: `${opportunity.placeId}`
			})
		})
		
		console.log(data)
		
		await PlaceImage.bulkCreate(data).catch(async(err) => {
			await Places.destroy({where: {placeId: opportunity.placeId}})
			await Address.destroy({where: {addressId: address.addressId}})
			response.err = err;
			return response;
		});

		await Notification.create({userId, name, role, type: "Created opportunity"})
		
		response.message = `Opportunity created`;
		
		return response;
	} catch (err) {
		console.log(err)
		response.err = err;
		return response;
	}
};



exports.getHost = async(userId) => {
	
	try {
		
		const host = await Host.findOne({where: {userId}});
		
		console.log("Host ", host)

		if(!host) {
			throw new Error("Host doesn't exist!!")
		}

		return host;
		
	} catch (err) {
		// console.log("error in getHost ", err)
		return {err}
	}
	
}

exports.getOppotunity = async(placeId) => {
	try {
		
		const opportunity = await Places.findOne({where: {placeId}});
		
		return opportunity;
		
	} catch (err) {
		console.log("error in Places", err)
		return { err }
		
	}
}

exports.getAllOppotunity = async(hostId) => {
	try {
		
		const opportunities = await Places.findAll({where: {hostId}, include:[{model: Address}]});

		// const placeImages = await PlaceImage.findAll({where: {placeId: opportunities.placeId}, include:[{model: PlaceImage}]})
		for(let i=0; i<opportunities.length; i++) {
			let images = await PlaceImage.findAll({where: {placeId: opportunities[i].placeId}});
			opportunities[i] = {...opportunities[i].dataValues, images}
		}
		
		return opportunities;
		
	} catch (err) {
		console.log("error in getAllOppo controller", err)
		return { err }
		
	}
}

exports.getPlaceImages = async(placeId) => {
	try {
		const images = await PlaceImage.findAll({where: {placeId}});
		
		return images;
	} catch (err) {
		return { err }
	}
}

exports.deleteOppotunity = async(userId, name, role, hostId, placeId) => {
	
	try {
		const opportunity = await Places.destroy({where: {hostId, placeId}})

		const notification = await Notification.create({userId, name, role, type: "Deleted opportunity"})
		
		return {
			message: "Opportunity deleted!!"
		}

	} catch (err) {
		return { err }
	}

}

exports.editOpportunity = async (
	placeName,
	positionDescription,
	category,
	duration,
	perks,
	placeId
) => {

	try {
		const place = await Places.update(
			{
				placeName,
				positionDescription,
				category,
				duration,
				perks,
			},
			{ where: { placeId } }
		);

		return place;
	} catch (err) {
		console.log("error is ",err)
		return { err };
	}
};

exports.getUser = async(userId) => {
	try {
		
		const user = await User.findOne({where: {userId}})
		return user;
	} catch (err) {
		return { err }
	}
}

// File path:  public\images\place1625476871093.png
// [0] File path:  public\images\place1625476871096.png
// [0] File path:  public\images\place1625476871098.png