const router = require("express").Router();
const { currentWeather } = require("../controllers/weather");

router.get("/current_weather", currentWeather);

module.exports = router;
