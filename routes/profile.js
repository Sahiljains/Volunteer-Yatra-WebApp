var express = require("express");
var router = express.Router();
const { protect, authorize } = require("../middleware/auth");
const upload = require("../config/imageUpload");

const {updateBasicInfo,updatePersonalInfo,deleteProfile,getBasicInfo,getPersonalInfo,Bio,uploadProfilePic} = require("../api/controllers/profile/service");

// Normally
//router.route("/basicinfo").put(protect, updateBasicInfo);
//router.route("/personalinfo").put(protect, updatePersonalInfo);
//router.route("/deleteprofile").delete(protect,deleteUser);
//router.route("/bio").put(protect, Bio);
//router.route("/picture").post(protect, upload.single("profilePic"), uploadProfilePic);

// Postman
router.route("/basicinfo").put(updateBasicInfo).get(getBasicInfo);
router.route("/personalinfo").put( updatePersonalInfo).get(getPersonalInfo);
router.route("/deleteprofile").delete(deleteProfile);
router.route("/bio").put(Bio);
router.route("/picture").post(upload.single("profilePic"), uploadProfilePic);



module.exports = router;
