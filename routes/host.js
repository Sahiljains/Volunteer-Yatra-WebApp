var express = require("express");
var router = express.Router();
const { protect, authorize } = require("../middleware/auth");
const upload = require("../config/imageUpload");

const {
	createOppotunity,
	deleteOppotunity,
	editOpportunity,
	getAllOppotunity
} = require("../api/controllers/host/createoppotunity/service");
const { route } = require("./apis");

// Normally
// router.route("/createopportunity").post(protect, authorize("Host"), createOppotunity);
// router.route("/deleteopportunity").delete(protect, authorize("Host"), deleteOppotunity);

// Postman
router.route("/allOpportunity").get(getAllOppotunity);
router.route("/createopportunity").post(upload.fields([{name: "place", maxCount: 10}]), createOppotunity)
router.route("/deleteopportunity/:placeId").delete(deleteOppotunity);
router.route("/editopportunity/:placeId").put(editOpportunity);

module.exports = router;
