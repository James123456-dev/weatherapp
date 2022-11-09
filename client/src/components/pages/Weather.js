import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
	const [weather, setWeather] = useState(null);

	//Get weather data for location specified
	const getWeather = async location => {
		try {
			const res = await axios.get(
				`/weather/current_weather?location=${location}`
			);
			setWeather(JSON.stringify(res.data));
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const data = getWeather("accra");
		setWeather(data.data);
	}, []);

	return <div>{weather}</div>;
};

export default Weather;
