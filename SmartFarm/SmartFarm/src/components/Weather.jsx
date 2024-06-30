import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:3030/current');
        setWeather(response.data);
      } catch (error) {
        console.error('Failed to fetch weather:', error);
        alert('Failed to fetch weather');
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Current Weather</h1>
      {weather ? (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.windSpeed} km/h</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
