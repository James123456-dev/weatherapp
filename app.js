require("dotenv").config({ path: "./.env" });
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const {
	db: { connectDB }
} = require("./setup");

// Init app
const app = express();
connectDB();

//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Mount routers
require("./routes")(app);

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
