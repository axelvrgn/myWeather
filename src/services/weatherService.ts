import axios from "axios";

const getCurrentWeather = (search: string) => {
  return axios.get("http://api.weatherapi.com/v1/current.json", {
    params: {
      key: "fa30a15ef71944a7aff153412231006",
      q: search,
      aqi: "no",
      lang: "fr",
    },
  });
};

const getForecastWeather = (search: string) => {
  return axios.get("http://api.weatherapi.com/v1/forecast.json", {
    params: {
      key: "fa30a15ef71944a7aff153412231006",
      q: search,
      aqi: "no",
      lang: "fr",
    },
  });
};

export const weatherService = { getCurrentWeather, getForecastWeather };
