const { asyncHandler } = require("../middleware");
const { User } = require("../models");
const { ErrorResponse, sendAuthorization } = require("../utils");
const {
	bcrypt: { encryptPassword, comparePassword }
} = require("../utils");

//@description          //Register user
//@route                //api/auth/register
//@requireAuth          //false
exports.register = asyncHandler(async (req, res, next) => {
	const user = req.body;
	// Encrypt user password
	user.Password = await encryptPassword(user.Password);

	//Create new user
	const newUser = await User.create(user);

	//Send reponse
	sendAuthorization(201, { userId: newUser.User_Id }, res);
});

//@description          //Login user
//@route                //api/auth/login
//@requireAuth          //false
exports.login = asyncHandler(async (req, res, next) => {
	const { Username, Password } = req.body;

	const user = await User.findOne({ Username, Password });

	//No user found
	if (!user) return next(new ErrorResponse(401, "Invalid Credentials"));

	// Valid date user Password
	const matchPassword = comparePassword(Password, user.Password);

	// Paawords don't match
	if (!matchPassword)
		return next(new ErrorResponse(401, "Invalid Credentials"));

	sendAuthorization(201, { userId: user.User_Id }, res);
});
