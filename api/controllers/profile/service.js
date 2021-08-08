const ErrorResponse = require("../../../utils/errorResponse");
const asyncHandler = require("../../../middleware/async");
const { uploadProfilePic, getProfilePic, updateBasicInfo,updatePersonalInfo,deleteProfile,getBasicInfo,getPersonalInfo,Bio } = require("./controller");

// const upload = require("../../../config/imageUpload");
const fs = require("fs");

const { MESSAGES } = require("../../../config/constantMessages");


exports.updateBasicInfo = asyncHandler(async (req, res, next) => {  

	// Postman
	// const user = {userId:req.body.userId};
	const user = {
		userId: "22eccf63-f19a-4673-89be-247b052d2d54"
	}
	
	// Normally
	//const user = req.user;

	const updateduser = await updateBasicInfo(req.body,user.userId);
	
	if(updateduser.err) return next(updateduser.err);
	
	
	res.status(200).json({
			success: true,
			data: {
				updateduser
			},
		});
}); 

exports.updatePersonalInfo = asyncHandler(async (req, res, next) => {
	
	// Postman
	// const user = {userId:req.body.userId};
	const user = {
		userId: "22eccf63-f19a-4673-89be-247b052d2d54"
	}
	
	// Normally
	//const user = req.user;
	
	const updateduser = await updatePersonalInfo(req.body,user.userId);
	
	if (updateduser.err) return next(updateduser.err);
	res
		.status(200)
		.json({
			success: true,
			data: {
				updateduser
			},
		});
});

exports.deleteProfile = asyncHandler(async (req, res, next) => {
	// Postman
	// const user = {userId:req.body.userId};
	const user = {
		userId: "22eccf63-f19a-4673-89be-247b052d2d54"
	}
	
	// Normally
	//const user = req.user;
	
	const deleteduser = await deleteProfile(user.userId);
	
	if (deleteduser.err) return next(deleteduser.err);
	res
		.status(200)
		.json({
			success: true,
			data: {
				deleteduser
			},
		});
});


exports.getBasicInfo = asyncHandler(async (req, res, next) => {
	// Postman
	// const user = {userId:req.body.userId};
	// console.log('Basic Info called')

	const user = {
		userId: "22eccf63-f19a-4673-89be-247b052d2d54"
	}
	
	const basicinfo = await getBasicInfo(user.userId);
	
	// Normally
	//const user = req.user;
	
	
	if (basicinfo.err) return next(basicinfo.err);
	res
	.status(200)
	.json({
		success: true,
		data: {
			basicinfo
		},
	});
});


exports.getPersonalInfo = asyncHandler(async (req, res, next) => {
	
	// Postman
	// const user = {userId:req.body.userId};
	
	const user = {
		userId: "22eccf63-f19a-4673-89be-247b052d2d54"
	}

	const personalinfo = await getPersonalInfo(user.userId);
	// Normally
	//const user = req.user;
	
	if (personalinfo.err) return next(personalinfo.err);
	res
		.status(200)
		.json({
			success: true,
			data: {
				personalinfo
			},
		});
});

exports.Bio = asyncHandler(async (req, res, next)=>{
	// Postman
	// const user = {userId:req.body.userId};

	const user = {
		userId: "22eccf63-f19a-4673-89be-247b052d2d54"
	}
	
	// Normally
	//const user = req.user;

	const Biouser = await Bio(user.userId,req.body.bio);
	
	if (Biouser.err) return next(Biouser.err);
	res 
		.status(200)
		.json({
			success: true,
			data: {
				Biouser
			},
		});
});

exports.uploadProfilePic = asyncHandler(async(req, res, next) => {
    // For postman
    // const user = {
    //     userId: req.body.userId 
    // };

	const user = {
		userId: "22eccf63-f19a-4673-89be-247b052d2d54"
	}

    console.log("Request File", req.file);
    // const isVerified = await checkVerified(user.userId);

    // Normally
    // const user = req.user;

    if (req.file == undefined) {
        return res.status(400).json({
            success: false,
            message: "Please attach Image",
        });
    }

    // Check if already image exists
    const picDetails = await getProfilePic(user.userId);

    if(picDetails.err) {
        console.log(picDetails.err)
        return res.status(400).json({
            success: false,
            message: "Error",
        });
    }

    if(picDetails.profilePic != null && picDetails.profilePic.startsWith("profilePic")) {
        // delete previous image
        let path = `client\\public\\images\\${picDetails.profilePic}`;

        fs.unlink(path, (err) => {
            if(err) {
                console.log(err);
                return res.status(400).json({
                    success: false,
                    message: "Error",
                });
            } else {
                console.log('Old Profile Image deleted')
            }
        })
    }

    const profile = await uploadProfilePic(
        user.userId,
        req.file.filename
    );

    if (profile.err) {
        // Delete img
        fs.unlink(req.file.path , function (err) {
            // console.log("File path", req.file.path)
            if (err) {
              console.log(err);
            } else {
              console.log("Deleted!");
            }
        });

        return res.status(400).json({
            success: false,
            message: profile.err,
        });
    }

    res.status(200).json({
        success: true,
        data: {
            profilePic: profile.profilePic,
        },
    });
})