module.exports = app => {
	// Mount routers
	app.use("/api/auth", require("./auth"));
	app.use("/api/weather", require("./weather"));
	app.use("/api/user", require("./user"));
};
