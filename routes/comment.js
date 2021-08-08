var express = require("express");
var router = express.Router();
const { protect, authorize } = require("../middleware/auth");
// const upload = require("../config/imageUpload");

const {
	addComment,
    getAllComments
} = require("../api/controllers/comment/service");
const { route } = require("./auth");
// const { route } = require("./apis");

// For Postman
// router.route("/:blogId").post(addComment).get(getAllComments);

// Normally
router.route("/:blogId").post(protect, addComment).get(protect, getAllComments);

module.exports = router;
