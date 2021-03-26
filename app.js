//Enviroment Variable
require('dotenv').config()
//Packages/Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
//Usage Settings
app.use(express.static("views"))
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//Routes
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html")
});
app.post("/", function(req, res) {
	const cityName = req.body.city;
	const cityNameDisplay = cityName.slice(0,1).toUpperCase() + cityName.slice(1).toLowerCase();
	cityNameSearched = cityNameDisplay;
	const key = process.env.API_KEY;
	const units = "metric";
	const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=" + key + "&units=" + units;
	https.get(url, function (response) {
		if (response.statusCode == 404) {
			res.render("error");
		}
		else {
			response.on("data", function(data) {
				const wData = (JSON.parse(data));
				const wCountry = wData.sys.country;
				const wCity = wData.name;
				const wCityCountry = wCity + "," + wCountry;
				const wIconName = wData.weather[0].icon;
				const wIconURL = "https://openweathermap.org/img/wn/" + wIconName + "@2x.png";
				const wIcon = "<img src='" + wIconURL + "'>";
				const wTemperature = wData.main.temp + " ℃";
				const wDescription = wData.weather[0].description;
				let today = new Date();
				let dateAndTime = today.toLocaleString();
				let myDefinitions = {
					temperature: wTemperature,
					symbol: wIconURL,
					description: wDescription,
					dateAndTime: dateAndTime,
					cityNameDisplay: wCityCountry,
					cityNameSearched: cityNameSearched
				}
				res.render('response', myDefinitions);
			})
		}
		
	})
});

app.listen(process.env.PORT || 3000, function() {
	console.log("The server is running on port 3000 locally; Please make a request.")
})