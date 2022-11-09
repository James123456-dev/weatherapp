const { verifyToken } = require("../utils");
const { ErrorResponse } = require("../utils");
//Ensure user is logged in
const ensureAuth = (req, res, next) => {
	let token;

	if (req.headers.authorization)
		token = req.headers.authorization.split(" ")[1];
	else token = req.cookies["authorization"];

	if (!token)
		return next(new ErrorResponse(401, "Not authorized", "Please log in"));

	// Verify token & allow user access
	try {
		const decoded = verifyToken(token);
		req.user = decoded;
		next();
	} catch (error) {
		next(new ErrorResponse(401, "Not authorized, Please log in"));
	}
};

module.exports = ensureAuth;
