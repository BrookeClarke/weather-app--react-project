import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./index.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            city: response.data.name,
            icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
        });
    }

    function search() {
        const apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }


    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                className="search-bar"
                                type="search"
                                placeholder="Search for a place..."
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form >
                <WeatherInfo data={weatherData} />
            </div>
        );
    } else {
        search();
        return "Loading..."
    }
}