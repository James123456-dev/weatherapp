const router = require("express").Router();
const { currentWeather } = require("../controllers/weather");
const { ensureAuth } = require("../middleware");

router.use(ensureAuth);
router.get("/current_weather", currentWeather);

module.exports = router;
