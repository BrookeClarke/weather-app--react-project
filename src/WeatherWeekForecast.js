import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherWeekForecast.css";

export default function WeatherWeekForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="Forecast-Weekday">Thurs</div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="Forecast-Temperatures">
                    <span className="Forecast-Temperature-Max">19°</span>
                    <span className="Forecast-Temperature-Min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}