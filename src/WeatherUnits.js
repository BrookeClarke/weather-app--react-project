import React, {useState} from "react";

export default function WeatherUnits(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    function showFahrenheit() {
        return (props.celsius * 9 / 5) + 32;
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

