var express = require("express");
var router = express.Router();
const { protect, authorize } = require("../middleware/auth");
// const upload = require("../config/imageUpload");

const {
	getAllYatriDetails,
    getYatriDetails,
    getAllHostDetails,
    getHostDetails,
    getCount,
    getDeletedCount,
    getOpportunityCount,
    getOpportunityCountByHost,
    deleteAccount,
    getNotifications
} = require("../api/controllers/admin/service");
// const { route } = require("./auth");
// const { route } = require("./apis");

// For Postman
router.route("/yatri").get(getAllYatriDetails);
router.route("/yatri/:id").get(getYatriDetails);
router.route("/host/:id").get(getHostDetails);
router.route("/host").get(getAllHostDetails);
router.route("/count/:role").get(getCount);
router.route("/deleted-count/:role").get(getDeletedCount);
router.route("/totalOpportunity").get(getOpportunityCount);
router.route("/totalOpportunity/:id").get(getOpportunityCountByHost);
router.route("/delete/:id").delete(deleteAccount);
router.route("/notifications").get(getNotifications);

// Normally
// router.route("/yatri").get(protect, authorize("Admin"), getAllYatriDetails);
// router.route("/host").get(protect, authorize("Admin"), getAllHostDetails);

module.exports = router;
