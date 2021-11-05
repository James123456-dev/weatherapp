import React from "react";
import Current from "./Current";
import Query from "./Query";

export default function Container() {
  return (
    <div className="weather-container">
      <Query />
      <div className="current-weather">
        <Current />
      </div>

      <div className="hourly-forcast">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias
        modi expedita, nisi praesentium ullam, qui beatae atque corporis id
        dolores facilis, nostrum quia! Corrupti quidem illo laboriosam ducimus
        sapiente.
      </div>
      {/* <div className="more-weather-info">
        <div className="forcast">hello</div>
      </div> */}
    </div>
  );
}
