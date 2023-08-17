import React from "react";
import "./Weather.css";
import "./index.css";

export default function Weather() {
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
            <h1>London</h1>
            <ul>
                <li>Thursday 17th August 2023 20:21pm</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div>Hello from Weather</div>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img className="float-left" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" />
                        <div className="float-left">
                        <span className="temperature">18</span>
                        <span className="units">°C</span>
                </div>
</div>
</div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 3%</li>
                        <li>Humidity: 86%</li>
                        <li>Wind: 11 mph</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}