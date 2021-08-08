var express = require("express");
var router = express.Router();
const { protect, authorize } = require("../middleware/auth");
const upload = require("../config/imageUpload");

const {
	uploadAadhar,
	getAadhar,
	getPendingVerifications,
	markVerified
} = require("../api/controllers/aadhar/service");
const { route } = require("./auth");
// const { route } = require("./apis");

// For Postman
// router.route("/details").post( upload.single("aadharPic") , uploadAadhar);
// router.route("/details").get(getAadhar);
// router.route("/markVerified/:userId").post(markVerified);
// router.route("/pendingVerifications").get(getPendingVerifications);

// Normally
router.route("/details").post(protect, authorize("Yatri"), upload.single("aadharPic"), uploadAadhar);
router.route("/details").get(protect, authorize("Yatri"), getAadhar);
router.route("/markVerified/:userId").post(protect, authorize("Admin"), markVerified);
router.route("/pendingVerifications").get(protect, authorize("Admin"), getPendingVerifications);

module.exports = router;
