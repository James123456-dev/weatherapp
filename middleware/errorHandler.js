const { ErrorResponse } = require("../utils");

module.exports = (err, req, res, next) => {
	const error = { ...err };
	error.message = err.message;

	res.status(err.statusCode || 500).json(
		new ErrorResponse(
			err.statusCode || 500,
			error.message,
			err.other || null
		)
	);
};
