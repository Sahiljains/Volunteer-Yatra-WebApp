const ErrorResponse = require("../../../utils/errorResponse");
const asyncHandler = require("../../../middleware/async");
const { getAllComments, addComment } = require("./controller");

// const upload = require("../../../config/imageUpload");
const fs = require("fs");

const { MESSAGES } = require("../../../config/constantMessages");

exports.getAllComments = asyncHandler(async(req, res, next) => {

    const blogId = req.params.blogId;
    
    const comments = await getAllComments(blogId);
    
    if(comments.err) return next(comments.err);
    
    res.status(200).json({
        sucess: true,
        data: {
            comments
        }
    })
    
})


exports.addComment = asyncHandler(async(req, res, next) => {
    
    // Postman
    const user = {
        userId: req.body.userId
    }
    
    // Normally
    // const user = req.user;
    
    const commentDescription = req.body.commentDescription
    const blogId = req.params.blogId;

    // if(commentDescription == "") return next(comment.err)


    const comment = await addComment( blogId, user.userId, commentDescription);

    if(comment.err) return next(comment.err);

    res.status(200).json({
        sucess: true,
        data: {
            comment
        }
    })
})