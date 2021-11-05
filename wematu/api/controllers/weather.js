const axios = require("axios");
exports.getWeather = async (req, res, next) => {
  console.log(req.body);
  const url = `${process.env.OPENWEATHER_URI}&q=${req.body.city}`;
  console.log(url);

  try {
    const response = await axios.get(url);

    res.status(response.status).json({
      success: true,
      data: {
        queryDisplay: `${response.data.name},${response.data.sys.country}`,
        symbol: `<img src='https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png'>`,
        temperature: `${response.data.main.temp} ℃`,
        description: response.data.weather[0].description,
        dateAndTime: new Date().toLocaleString(),
      },
    });
  } catch (error) {
    throw "error";
  }
};
