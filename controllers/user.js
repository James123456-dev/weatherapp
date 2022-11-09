const { asyncHandler } = require("../middleware");
const { LocationHistory, User } = require("../models");
const { SuccessResponse } = require("../utils");

//@description          //Upload user photo
//@route                //api/auth/register
//@requireAuth          //false
exports.getUserProfile = asyncHandler(async (req, res, next) => {
	const user = await User.findOne({ where: { User_Id: req.user.userId } });

	res.json(new SuccessResponse(user, 200));
});

//@description          //Get location search data to history
//@route                //api/user/history
//@requireAuth          //true
exports.getLocationHistory = asyncHandler(async (req, res, next) => {
	const historyItems = await LocationHistory.findAll({
		where: { User_Id: req.user.userId }
	});

	res.json(new SuccessResponse(historyItems, 200));
});

//@description          //Add location search data to history
//@route                //api/user/history
//@requireAuth          //true
exports.addLocationData = asyncHandler(async (req, res, next) => {
	const { Location } = req.body;

	await LocationHistory.create({ User_Id: req.user.userId, Location });

	res.send(new SuccessResponse({}, 201, "Location history added"));
});

//@description          // Delete location search data from history
//@route                //api/user/history/:itemId
//@requireAuth          //true
exports.removeLocationData = asyncHandler(async (req, res, next) => {
	await LocationHistory.destroy({
		where: { Location_Id: req.params.itemId }
	});

	res.send(new SuccessResponse({}, 200, "Location history item deleted"));
});

//@description          // Delete all location search data from history
//@route                //api/auth/me
//@requireAuth          //true
exports.clearLocationData = asyncHandler(async (req, res, next) => {
	await LocationHistory.destroy({
		where: { User_Id: req.user.userId }
	});

	res.send(new SuccessResponse({}, 200, "Location history items deleted"));
});
