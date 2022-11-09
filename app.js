require("dotenv").config({ path: "./.env" });
const express = require("express");
const morgan = require("morgan");
const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/public`)); //Set static/public folder

// Mount routers
app.use("/api/weather", require("./routes/weather"));
app.use("/api/auth", require("./routes/auth"));

//Mount error handler
app.use(require("./middleware/errorHandler"));

// Run server
app.set("PORT", process.env.PORT || 5000);
app.listen(
	app.get("PORT"),
	console.log(
		`The server is running in ${process.env.NODE_ENV} on port ${app.get(
			"PORT"
		)}`
	)
);
