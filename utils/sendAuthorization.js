const SuccessResponse = require("./SuccessResponse");
const jwt = require("./jwt");
const {
	AuthConfig: { jwtCookie }
} = require(`../config/${process.env.NODE_ENV}.js`);

module.exports = (statusCode, user, res) => {
	// Generate new authorization token
	const token = jwt.generateToken(user);

	// Authorization cookie options
	const cookieOptions = jwtCookie;

	// Send auth token in response and in cookie
	res.status(statusCode)
		.cookie("authorization", token, cookieOptions)
		.json(new SuccessResponse({ token }, statusCode));
};
