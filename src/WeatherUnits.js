import React, {useState} from "react";

export default function WeatherUnits(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        setUnit("fahrenheit");
        return (props.celsius * 9 / 5) + 32;
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    if (unit === "celsius") {
        return (
            <div className="weatherTemperature">
                <span className="temperature">
                    {Math.round(props.celsius)}
                </span>
                <span className="units">
                    <a href="/" onClick={showCelsius}> °C
                    </a> |
                    <a href="/" onClick={showFahrenheit}> °F
                    </a></span>
            </div>
        );
    }
}

