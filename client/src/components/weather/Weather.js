import React from "react";
import PropTypes from "prop-types";

const Weather = ({ weather }) => {
	return <div>weather info</div>;
};

Weather.propTypes = {
	weather: PropTypes.object.isRequired
};

export default Weather;
