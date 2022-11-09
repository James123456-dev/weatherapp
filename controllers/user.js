const { asyncHandler } = require("../middleware");

//@description          //Upload user photo
//@route                //api/auth/register
//@requireAuth          //false
exports.uploadPhoto = asyncHandler(async (req, res, next) => {
	res.json({
		message: "registered"
	});
});

//@description          //Add location search data to history
//@route                //api/auth/login
//@requireAuth          //false
exports.addLocationData = asyncHandler(async (req, res, next) => {
	res.json({
		message: "add location data"
	});
});

//@description          // Delete location search data from history
//@route                //api/auth/passwordreset
//@requireAuth          //false
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
