class SuccessResponse {
	constructor(data, statusCode, message) {
		if (message) this.message = message;
		this.statusCode = statusCode || 200;
		this.data = data;
	}
}
module.exports = SuccessResponse;
