var express = require("express");
var router = express.Router();
const { protect } = require("../middleware/auth");

const {
	registerUser,
	registerUserViaGoogle,
	loginUser,
	loginGoogleUser,
	getallUsers,
	userProfile,
	logoutUser,
	forgotPassword,
	verifyOTP,
	loginFBUser,
	registerUserViaFB,
	verifyEmail
} = require("../api/controllers/auth/service");
const { route } = require("./apis");
router.post("/register", registerUser);
router.post("/registerViaGoogle", registerUserViaGoogle);
router.get("/verifyEmail/:email/:token", verifyEmail);
router.post("/login", loginUser);
router.post("/googleLogin", loginGoogleUser);
router.post("/FBLogin", loginFBUser);
router.post("/registerViaFB", registerUserViaFB);
router.post("/forgotpassword", forgotPassword); /* req.body contains email and phone number (including +91 to be done in frontend) */
router.post("/forgotpassword/verifyOTP", verifyOTP); /* req.body contains userId and OTP */
router.route("/logout").post(protect, logoutUser);
router.route("/profile").get(protect, userProfile);
router.get("/getUsers", getallUsers);

module.exports = router;
