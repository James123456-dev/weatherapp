require("dotenv").config({ path: "./config/config.env" }); //init config vars
const express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  app = express(),
  getweatherData = require("./api/routes/weather");

//Middleware
// app.use(bodyParser.urlencoded({ extended: true })); //use body-parser
app.use(express.json());
app.set("view engine", "ejs"); //Set view engine
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/public`)); //Set static/public folder

app.get("/", function (req, res) {
  res.render("home");
});
app.use("/api/getdata", getweatherData);

app.listen(3000, function () {
  console.log(
    "The server is running on port 3000 locally; Please make a request."
  );
});
