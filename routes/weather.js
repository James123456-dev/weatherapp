const router = require("express").Router();
const { currentWeather } = require("../controllers/weather");
const { passport } = require("../setup");
// passport.authenticate("jwt", { session: false });

router.get("/current_weather", currentWeather);

module.exports = router;
