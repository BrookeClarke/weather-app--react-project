import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="London" />
      <footer>
        This project was coded by Brooke Clarke and is {" "}
        <a href='https://github.com/BrookeClarke/weather-app--react-project' target="_blank" rel="noreferrer">open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;