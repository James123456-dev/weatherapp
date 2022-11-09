class ErrorResponse extends Error {
	constructor(statusCode, message, other) {
		super(message);
		this.statusCode = statusCode;
		if (other) this.other = other;
	}
}
module.exports = ErrorResponse;
