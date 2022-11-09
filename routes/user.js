const router = require("express").Router();
const { ensureAuth } = require("../middleware");
const {
	addLocationData,
	removeLocationData,
	clearLocationData,
	getUserProfile,
	getLocationHistory
} = require("../controllers/user");

// Auth middlware
router.use(ensureAuth);

// Routes
router.get("/profile", getUserProfile);
router
	.route("/history")
	.get(getLocationHistory)
	.post(addLocationData)
	.delete(clearLocationData);
router.delete("/history/:itemId", removeLocationData);

module.exports = router;
