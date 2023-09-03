import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max)
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

        return days[day];
    }
    return (
        <div>
            <div className="Forecast-Weekday">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="Forecast-Temperatures">
                <span className="Forecast-Temperature-Max">{maxTemperature()}</span>
                <span className="Forecast-Temperature-Min">{minTemperature()}</span>
            </div>
        </div>
    )
}