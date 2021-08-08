const User = require("../../../models/User");
const Blog = require("../../../models/Blog");
const Comment = require("../../../models/Comment");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
var helper = require("../../../config/helpers");

exports.getAllComments = async (blogId) => {
	try {

        const comments = await Comment.findAll({
            where: { blogId },
			include: [{ model: User, attributes: ['firstName', 'lastName', 'userId', 'profilePic']}] ,
        })

		return comments;
	} catch (err) {
		return { err };
	}
};

exports.addComment = async( blogId, userId, commentDescription ) => {

	try {

		const comment = await Comment.create({ userId, commentDescription, blogId });

		return comment;

	} catch (err) {
		return { err };
	}

}
