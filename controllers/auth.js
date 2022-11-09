const { asyncHandler } = require("../middleware");

//@description          //Register user
//@route                //api/auth/register
//@requireAuth          //false
exports.register = asyncHandler(async (req, res, next) => {
	res.json({
		message: "registered"
	});
});

//@description          //Login user
//@route                //api/auth/login
//@requireAuth          //false
exports.login = asyncHandler(async (req, res, next) => {
	res.json({
		message: "login"
	});
});

//@description          // Reset user password
//@route                //api/auth/passwordreset
//@requireAuth          //false
exports.resetpassword = asyncHandler(async (req, res, next) => {
	res.json({
		message: "password reset"
	});
});
