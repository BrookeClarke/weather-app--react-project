import React, {useState} from "react";
import Axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherWeekForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherWeekForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        )
    } else {
        let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
        Axios.get(apiUrl).then(handleResponse);

        return null;
    }
}