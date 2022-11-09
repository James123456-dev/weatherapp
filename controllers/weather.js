const { asyncHandler } = require("../middleware");
const axios = require("axios");
const { weatherConfig } = require(`../config/${process.env.NODE_ENV}.js`);
const { SuccessResponse, ErrorResponse } = require("../utils");

//@description          //Register user
//@route                //api/auth/register
//@requireAuth          //false
exports.currentWeather = asyncHandler(async (req, res, next) => {
	const { location } = req.query;

	//Ensure location is provided
	if (!location)
		return next(
			new ErrorResponse(400, "Parameter 'location' is required!")
		);

	const { apiKey } = weatherConfig;

	//Get weather data
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
	const weatherReq = await axios.get(url);
	const { main, weather, dt, sys } = weatherReq.data;

	res.json(
		new SuccessResponse({
			country: sys.country,
			temperature: main.temp,
			description: weather[0].description,
			icon: weather[0].icon,
			min_temp: main.temp_min,
			max_temp: main.temp_max,
			last_updated: dt
		})
	);
});
