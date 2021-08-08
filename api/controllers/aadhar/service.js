const ErrorResponse = require("../../../utils/errorResponse");
const asyncHandler = require("../../../middleware/async");
const { uploadAadhar, getAadhar, checkVerified, markVerified, getPendingVerifications } = require("./controller");

const upload = require("../../../config/imageUpload");
const fs = require("fs");

const { MESSAGES } = require("../../../config/constantMessages");

exports.uploadAadhar = asyncHandler(async(req, res, next) => {
    // For postman
    // const user = {
    //     userId: req.body.userId 
    // };
    // console.log("Request File", req.file);
    // const isVerified = await checkVerified(user.userId);

    // Normally
    const user = req.user;
    const isVerified = await checkVerified(user.userId);

    if (isVerified.err) {
        return res.status(500).json({
            success: false,
            message: isVerified.err.message,
        });
    } else if (isVerified == 1) {
        // Unlink the uploaded file
        fs.unlink(req.file.path , function (err) {
            // console.log("File path", req.file.path)
            if (err) {
              console.log(err);
            } else {
              console.log("Deleted!");
            }
        });
        return res.status(403).json({
            success: false,
            message: "Cannot edit Aadhar details once verified.",
        });
    }

    // if (err) {
    //     console.log("Error in aadhar/service.js-uploadAadhar() : ", err);
    //     return res.status(500).json({
    //         success: false,
    //         message: err.message,
    //     });
    // }

    if (req.file == undefined) {
        return res.status(400).json({
            success: false,
            message: "Please attach Image",
        });
    }

    // Check if already image exists
    const aadharDetails = await getAadhar(user.userId);

    if(aadharDetails.aadharPic != null) {
        // delete previous image
        // let path = `public\\images\\${aadharDetails.aadharPic.slice(26)}`;
        let path = `client\\public\\images\\${aadharDetails.aadharPic}`;

        fs.unlink(path, (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Old Image deleted')
            }
        })
    } 

    const aadhar = await uploadAadhar(
        user.userId,
        req.body.aadhar,
        req.file.filename
    );

    if (aadhar.err) {
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
            message: aadhar.err,
        });
    }

    res.status(200).json({
        success: true,
        data: {
            aadharPic: aadhar.aadharPic,
            aadhar: aadhar.aadhar,
        },
    });
})

exports.getAadhar = asyncHandler(async(req, res, next) => {
    // For postman
    // const user = {
    //     userId: req.body.userId 
    // };
    // Normally
    const user = req.user;

    const aadharDetails = await getAadhar(user.userId);

    const verified = await checkVerified(user.userId);

    if(aadharDetails.err || verified.err) {
        let err = aadharDetails.err ? aadharDetails.err : verified.err;
        return res.status(400).json({
            success: false,
            message: err,
        });
    }

    res.status(200).json({
        success: true,
        data: {
            aadharPic: aadharDetails.aadharPic,
            aadhar: aadharDetails.aadhar,
            verified
        }
    })
})

exports.markVerified = asyncHandler(async(req, res, next) => {
    const userId = req.params.userId;

    const result = await markVerified(userId);

    if(result.err) {
        return res.status(400).json({
            success: false,
            message: result.err,
        });
    }

    res.status(200).json({
        success: true
    })
})

exports.getPendingVerifications = asyncHandler(async(req, res, next) => {

    const pendings = await getPendingVerifications();

    if(pendings.err) {
        return res.status(400).json({
            success: false,
            message: pendings.err
        })
    }

    res.status(200).json({
        success: true, 
        data: pendings
    })

})