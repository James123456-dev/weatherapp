const express = require("express"),
  router = express.Router(),
  { getWeather } = require("../controllers/weather");

router.route("/").post(getWeather);

module.exports = router;
