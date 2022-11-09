const { asyncHandler } = require("../middleware");

//@description          //Upload user photo
//@route                //api/auth/register
//@requireAuth          //false
exports.uploadPhoto = asyncHandler(async (req, res, next) => {
	res.json({
		message: "registered"
	});
});

//@description          //Upload user photo
//@route                //api/auth/register
//@requireAuth          //false
exports.getUserProfile = asyncHandler(async (req, res, next) => {
	res.json({
		message: "get User Profile"
	});
});

//@description          //Get location search data to history
//@route                //api/user/history
//@requireAuth          //true
exports.getLocationHistory = asyncHandler(async (req, res, next) => {
	res.json({
		message: "add location data"
	});
});

//@description          //Add location search data to history
//@route                //api/user/history
//@requireAuth          //true
exports.addLocationData = asyncHandler(async (req, res, next) => {
	res.json({
		message: "add location data"
	});
});

//@description          // Delete location search data from history
//@route                //api/user/history/:itemId
//@requireAuth          //true
exports.removeLocationData = asyncHandler(async (req, res, next) => {
	res.json({
		message: "remove location data"
	});
});

//@description          // Delete all location search data from history
//@route                //api/auth/me
//@requireAuth          //true
exports.clearLocationData = asyncHandler(async (req, res, next) => {
	res.json({
		message: "clear location data"
	});
});
