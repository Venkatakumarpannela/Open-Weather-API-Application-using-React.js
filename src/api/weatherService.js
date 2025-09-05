// src/api/weatherService.js
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found. Please try again.');
    }
    const data = await response.json();
    return formatWeatherData(data);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    throw error;
  }
};

const formatWeatherData = (data) => {
  const {
    name,
    sys: { country },
    main: { temp, humidity },
    wind: { speed },
    weather,
  } = data;

  const { main: description, icon } = weather[0];

  return {
    city: name,
    country,
    temperature: Math.round(temp),
    humidity,
    windSpeed: speed.toFixed(1),
    description,
    iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`,
  };
};