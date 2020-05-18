import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const currentWeatherApi = {
  currentWeather: id => api.get(`weather?q=Rye,uk&appid=375b5b72defecfdfccfa090d50f49db4&lang=kr`,)
};