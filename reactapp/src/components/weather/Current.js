import React from "react";

export default function Current({ weatherData }) {
  return (
    <section className="weather-info">
      <div className="temperature">
        <span className="temp">48</span>
      </div>

      <div className="description">
        <div className="symbol-icon">
          <div className="unit">℃</div>
          <div className="symbol">
            <img
              src="https://openweathermap.org/img/wn/04d@2x.png"
              alt="icon"
            />
          </div>
        </div>
        <div className="desc-info">
          <div className="key">Somthing about the weather</div>
          <div className="last-updated">
            {new Date().toString().slice(0, 25)}
          </div>
        </div>
      </div>
    </section>
  );
}
