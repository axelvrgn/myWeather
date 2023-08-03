import React, { useEffect, useState } from "react";
import { PageContainer } from "../layout/Layout";
import { ArrowDownIcon, ArrowUpIcon, Icon, SearchIcon } from "@chakra-ui/icons";
import moment from "moment";

import { weatherService } from "../services/weatherService";
import { Divider } from "@chakra-ui/react";

function HomeView() {
  const [weather, setWeather] = useState<any | null>(null);
  const [location, setLocation] = useState<string>("");

  const fetchWeather = (location: string) => {
    weatherService.getForecastWeather(location).then((weatherRes) => {
      setWeather(weatherRes.data);
    });
  };

  const handleSubmitLocation = (event: React.FormEvent<HTMLFormElement>) => {
    fetchWeather(location);
  };

  return (
    <PageContainer>
      <div className="pb-4">
        <form onSubmit={handleSubmitLocation}>
          <div className="flex flex-row-reverse w-96 border rounded-full p-1">
            <input
              className="w-11/12 focus:outline-none"
              placeholder="Chercher une ville, un pays..."
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button type="button" className="w-1/12">
              <SearchIcon className="w-1/12" />
            </button>
          </div>
        </form>
      </div>
      {location && weather && (
        <div className="border p-3 rounded-lg">
          <div className="w-auto flex flex-col p-2">
            <h2 className="text-xl">
              {weather.location.name}, {weather.location.country}
            </h2>
            <p className="text-xl">{weather.current.temp_c} °C</p>
            <div className="flex items-center">
              <img src={weather.current.condition.icon} />
              <p>{weather.current.condition.text}</p>
            </div>
            <div className="flex">
              <div className="px-2 flex items-center">
                {Math.round(weather.forecast.forecastday[0].day.maxtemp_c)}°
                <ArrowUpIcon />
              </div>
              <div className="px-2 flex items-center">
                {Math.round(weather.forecast.forecastday[0].day.mintemp_c)}°
                <ArrowDownIcon />
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col p-2">
            <p className="font-semibold">Prévisions de la journée</p>
            <ul className="overflow-x-auto w-full whitespace-nowrap py-4">
              {weather.forecast.forecastday[0].hour.map(
                (weatherPerHour: any, index: number) => (
                  <li className="w-28 inline-block" key={index}>
                    <div className="flex flex-col items-center">
                      <p> {moment(weatherPerHour.time).format("HH")} h</p>
                      <img
                        src={weatherPerHour.condition.icon}
                        className="w-12 h-12"
                      />
                      <p>{Math.round(weatherPerHour.temp_c)} °C</p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

export default HomeView;
