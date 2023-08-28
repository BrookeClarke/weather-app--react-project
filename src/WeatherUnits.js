import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature"> {Math.round(props.celsius)} </span>
        <span>°C | </span>{" "}
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature"> {Math.round(fahrenheit())} </span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
        </span>{" "}
        <span className="units">| °F</span>
      </div>
    );
  }
}