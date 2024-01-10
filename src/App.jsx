import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useSpring, animated } from "react-spring";
import "./App.css";


function GetWheather() {
  const [City, SetCity] = useState('');
  const [Weather, SetWeather] = useState(null);

  const Wheather = async() => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=8ab12ca5d224531b8df784d34fe17194`
      );
      SetWeather(response.data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const fade = useSpring({
    opacity: Weather ? 1 : 0,
    from: { opacity: 0 },
  });

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <div className="centered-content">
      <h2>Weather App</h2>
      <TextField id="outlined-textarea" label="Введите название" multiline type="text" placeholder="City name..." value={City} onChange={(e) => SetCity(e.target.value)}/>
      <Button id="btn1" variant="contained" size="small" onClick={Wheather}>Get Wheather</Button>
      <hr />
      {Weather && (
        <animated.div style={fade}>
          <h3>{Weather.name}</h3>
          <p>Temperature: {kelvinToCelsius(Weather.main.temp).toFixed(2)} °C</p>
          <p>Weather: {Weather.weather[0].description}</p>
        </animated.div>
      )}
    </div>
  )
}

export default GetWheather;