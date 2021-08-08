const ErrorResponse = require("../../../utils/errorResponse");
const asyncHandler = require("../../../middleware/async");
const {  getHost, getAllYatriDetails, getAllHostDetails, getCount, getDeletedCount, getOpportunityCount,deleteAccount, getNotifications, getHostDetails, getYatriDetails, getOpportunityCountByHost} = require("./controller");

// const upload = require("../../../config/imageUpload");
const fs = require("fs");

const { MESSAGES } = require("../../../config/constantMessages");

exports.getAllYatriDetails = asyncHandler(async(req, res, next) => {

    const yatris = await getAllYatriDetails();

    if(yatris.err) {
        return res.status(400).json({
            success: false,
            data: {
                err: yatris.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            yatris
        }
    })
})

exports.getYatriDetails = asyncHandler(async(req, res, next) => {

    const userId = req.params.id;

    const yatri = await getYatriDetails(userId);

    if(yatri.err) {
        return res.status(400).json({
            success: false,
            data: {
                err: yatri.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            yatri
        }
    })
})

exports.getAllHostDetails = asyncHandler(async(req, res, next) => {

    const hosts = await getAllHostDetails();

    if(hosts.err) {
        return res.status(400).json({
            success: false,
            data: {
                err: hosts.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            hosts
        }
    })
})

exports.getHostDetails = asyncHandler(async(req, res, next) => {

    const userId = req.params.id;

    console.log("Here ", userId)

    const host = await getHostDetails(userId);

    if(host.err) {
        return res.status(400).json({
            success: false,
            data: {
                err: host.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            host
        }
    })
})

exports.getCount = asyncHandler(async(req, res , next) => {

    const count = await getCount(req.params.role);

    if(count.err) {
        return res.status(400).json({
            success: false,
            data: {
                err: count.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            count
        }
    })
})

exports.getDeletedCount = asyncHandler(async(req, res , next) => {

    const count = await getDeletedCount(req.params.role);

    if(count.err) {
        return res.status(400).json({
            success: false,
            data: {
                err: count.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            count
        }
    })
})

exports.getOpportunityCount = asyncHandler(async(req, res, next) => {

    const count = await getOpportunityCount();

    if(count.err) {
        return res.status(400).json({
            success: false,
            data: {
                err: count.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            count
        }
    })
})

exports.getOpportunityCountByHost = asyncHandler(async(req, res, next) => {

    const userId = req.params.id;

    const host = await getHost(userId);

    // console.log("Here ;  ", host)

    if(host.err) return next(host.err);

    const count = await getOpportunityCountByHost(host.hostId);

    if(count.err) {
        return res.status(400).json({
            success: false,
            data: {
                err: count.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            count
        }
    })
})

exports.deleteAccount = asyncHandler(async(req, res , next) => {

    const response = await deleteAccount(req.params.id);

    if(response.err) {
        return res.status(400).json({
            success: false,
            data: {
                err: response.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            response
        }
    })
})

exports.getNotifications = asyncHandler(async(req, res, next) => {
    const notifications = await getNotifications();

    if(notifications.err) {
        // console.log(notifications)
        return res.status(400).json({
            success: false,
            data: {
                err: notifications.err
            }
        })
    }

    res.status(200).json({
        success: true,
        data: {
            notifications
        }
    })
})