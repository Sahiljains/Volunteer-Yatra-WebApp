const ErrorResponse = require("../../../../utils/errorResponse");
const asyncHandler = require("../../../../middleware/async");
const { createOppotunity, deleteOppotunity, getOppotunity, getPlaceImages, getHost, editOpportunity, getUser, getAllOppotunity } = require("./controller");
const { MESSAGES } = require("../../../../config/constantMessages");
const fs = require('fs');

exports.createOppotunity = asyncHandler(async (req, res, next) => {
	// console.log("req body :", req.body);
	// Normally
	// const userId = req.user.userId

	// Postman
	const userId = "22eccf63-f19a-4673-89be-247b052d2d54";
	
	const host = await getHost(userId);

	const {
		placeName,
		positionDescription,
		city,
		state,
		pincode
	} = req.body;
	
	if (!placeName || !positionDescription || !city || !state || !pincode || !host.hostId){
		return res.status(400).json({
			success: false,
			err: "Please provide all the details",
		});
	}

	if (req.files == undefined) {
		console.log("here")
        return res.status(400).json({
            success: false,
            err: "Please attach Image",
        });
    }

	const fileNames = [];

	req.files['place'].forEach(file => {
		fileNames.push(file.filename)
		console.log("File path: ",file.path)
	});

	const user = await getUser(userId);

	const opportunity = await createOppotunity(
		user.userId,
		`${user.firstName} ${user.lastName}`,
		user.role,
		host.hostId,
		placeName,
		positionDescription,
		city,
		state,
		pincode,
		fileNames
		);
		
	if (opportunity.err){
		// If error image should be deleted
		// Add here
		// Delete the image
		req.files['place'].forEach(file => {
			fs.unlink(file.path , function (err) {
				if (err) {
				  console.log(err);
				} else {
				  console.log("Deleted!");
				}
			})
		})
		return next(opportunity.err);
	} 
	
	res
		.status(200)
		.json({
			success: true,
			data: {
				message: opportunity.message,
			},
		});
});

exports.deleteOppotunity = asyncHandler(async(req, res, next) => {

	// Normally
	// const userId = req.user.userId

	// Postman
	const userId = req.body.userId; 

	const host = await getHost(userId);

	const placeId = req.params.placeId;

	// First check if hostId == places's hostId
	const opportunity = await getOppotunity(placeId);
	if(opportunity.err) return next(opportunity.err)

	if(opportunity.hostId != host.hostId) {

		// console.log(opportunity.hostId, " -- ", host.hostId )
		return res.status(403).json({
			success: false,
			message: "Not allowed to access this."
		})
	}

	// Now delete all images 
	const images = await getPlaceImages(placeId);
	if(images.err) return next(images.err)

	const user = await getUser(userId);
	if(user.err) return next(user.err);

	// Now delete the opportunity
	const deleted = await deleteOppotunity( 
		user.userId,
		`${user.firstName} ${user.lastName}`,
		user.role,
		host.hostId,
		placeId);
	if(deleted.err) return next(deleted.err);
	

	images.forEach(image => {
		let path = `client\\public\\images\\${image.placeImagePic}`

		fs.unlink(path , function (err) {
			if (err) {
			  console.log(err);
			} else {
			  console.log("Deleted!");
			}
		})
	})


	res
		.status(200)
		.json({
			success: true,
			data: {
				message: deleted.message,
			},
		});

})

exports.editOpportunity = asyncHandler(async (req, res, next) => {   

	const placeId = req.params.placeId;
	
	const {
		placeName,
		positionDescription,
		category,
		duration,
		perks,
	} = req.body;

	const user = {userId:req.body.userId};
	
	const host = await getHost(user.userId)
	if(host.err) return next(host.err)
	
	const place = await getOppotunity(placeId); 
	if(place.err) return next(place.err)

	if (!placeName || !positionDescription || !category || !duration || !perks || !host.hostId || !place.hostId){
		return res.status(400).json({
			success: false,
			message: "Please provide all the details",
		});
	}
		
	if(host.hostId != place.hostId){
		return res.status(403).json({
			message:"Not allowed to access"
		})
	}
	
	const editoppo = await editOpportunity(placeName,
		positionDescription,
		category,
		duration,
		perks, 
		placeId);
		
	if(editoppo.err) return next(editoppo.err);
		
	res.status(200).json({
		success: true,
		data: {
			editoppo
		},
	});
}); 

exports.getAllOppotunity = asyncHandler(async(req, res, next) => {

	// Normally
	// const userId = req.user.userId

	// Postman
	const userId ="22eccf63-f19a-4673-89be-247b052d2d54";

	const user = await getUser(userId);

	const host = await getHost(userId);
	// console.log("here host->", host)

	const opportunities = await getAllOppotunity(host.hostId);

	console.log("here")

	if(opportunities.err) return next(opportunities.err)

	res.status(200).json({
		success: true,
		data: opportunities,
		user: {
			name: `${user.firstName} ${user.lastName}`,
			userId: user.userId
		}
	})

})