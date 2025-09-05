// src/App.jsx
import React, { useState, useEffect } from 'react';
import { getWeatherData } from './api/weatherService';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import Error from './components/Error';

const initialCities = ['Hyderabad', 'New York', 'London', 'Tokyo', 'Sydney'];

const App = () => {
  const [city, setCity] = useState(initialCities[0]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather(city);
  }, []); // Run only on initial mount with the default city

  const fetchWeather = async (searchCity) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const data = await getWeatherData(searchCity);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  return (
    <div className="app-container">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error message={error} />}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;