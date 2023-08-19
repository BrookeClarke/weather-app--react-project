import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import "./index.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: "Saturday 19th August 2023 16:51pm",
            city: response.data.name,
            icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
        })
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input className="search-bar" type="search" placeholder="Search for a place..." autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img className="float-left" src={weatherData.icon} alt="{weatherData.description}" />
                            <div className="float-left">
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="units">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 3%</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "be60748992fab0f5da8162563fb21245";
        let city = "London"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }
}