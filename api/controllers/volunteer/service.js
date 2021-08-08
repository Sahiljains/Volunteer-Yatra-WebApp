const ErrorResponse = require("../../../utils/errorResponse");
const asyncHandler = require("../../../middleware/async");
const { updateSkills, getStates, getOppurtunities } = require("./controller");
// const upload = require("../../../config/imageUpload");
// const fs = require("fs");

const { MESSAGES } = require("../../../config/constantMessages");

exports.updateSkills = asyncHandler(async(req, res, next) => {
    
    console.log("Skills: ", req.body.skills);

    const skills = req.body.skills;
    const userId = req.user.userId;

    if(!skills || !userId) {
        return res.status(400).json({
			success: false,
			message: "Please provide all credentials",
		});
    }

    const result = await updateSkills(skills, userId);

    if(result.err) {
        return res.status(400).json({
            success: false,
            message: result.err
        })
    }

    res.status(200).json({
        success:true,
        data:{
            result
        }
    })
})

exports.getStates = asyncHandler( async(req, res, next) => {

    const states = await getStates();

    if(states.err) return next(states.err);

    res.status(200).json({
        success: true,
        data: {
            states
        }
    })

} )

exports.getAllOppurtunities = asyncHandler( async(req, res, next) => {

    const { state } = req.query;

	const opportunities = await getOppurtunities( state );

	// console.log("here")

	if(opportunities.err) return next(opportunities.err)

	res.status(200).json({
		success: true,
		data: opportunities,
	})

} )