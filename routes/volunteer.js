var express = require("express");
var router = express.Router();
const { protect, authorize } = require("../middleware/auth");
// const upload = require("../config/imageUpload");

const {
	// updateSkills,
	getStates,
	getAllOppurtunities
} = require("../api/controllers/volunteer/service");
// const { route } = require("./apis");

// For Postman
// router.route("/details").post( upload.single("aadharPic") , uploadAadhar);
// router.route("/details").get(getAadhar);
// router.route("/markVerified/:userId").post(markVerified);
// router.route("/pendingVerifications").get(getPendingVerifications);


// Normally
// router.route("/updateSkills").put(protect, authorize("Yatri"), updateSkills);
router.route("/oppurtunities/states").get(getStates);
router.route("/oppurtunities/search").get(getAllOppurtunities);


module.exports = router;
