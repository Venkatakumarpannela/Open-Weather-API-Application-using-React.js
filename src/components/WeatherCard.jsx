// src/components/WeatherCard.jsx
import React from 'react';
import './WeatherCard.css'; // We'll create this CSS file next

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2 className="city-name">{weather.city}, {weather.country}</h2>
      <div className="weather-main">
        <img src={weather.iconUrl} alt={weather.description} className="weather-icon" />
        <p className="temperature">{weather.temperature}°C</p>
      </div>
      <p className="weather-description">{weather.description}</p>
      <div className="weather-details">
        <div className="detail-item">
          <strong>Humidity</strong>
          <p>{weather.humidity}%</p>
        </div>
        <div className="detail-item">
          <strong>Wind Speed</strong>
          <p>{weather.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;