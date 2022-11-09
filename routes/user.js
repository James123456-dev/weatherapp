const router = require("express").Router();
const { ensureAuth } = require("../middleware");
const {
	uploadPhoto,
	addLocationData,
	removeLocationData,
	clearLocationData,
	getUserProfile
} = require("../controllers/user");

// Auth middlware
router.use(ensureAuth);

// Routes
router.post("/upload_profile_photo", uploadPhoto);
router.post("/profile", getUserProfile);
router
	.route("/history")
	.get(getLocationHistory)
	.post(addLocationData)
	.delete(clearLocationData);
router.delete("/history/:itemId", removeLocationData);

module.exports = router;
