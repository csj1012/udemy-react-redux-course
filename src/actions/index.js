import axios from 'axios';

const API_KEY = '647668f244f16f7c0da7f98e8db479d7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// This is an action creator.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // The action creator actually makes the payload request.
  // This is handled by Redux-Promise Middleware (flowchart).
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
