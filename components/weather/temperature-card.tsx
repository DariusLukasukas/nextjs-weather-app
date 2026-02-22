"use client";
import { convertTemp } from "@/lib/units";
import { OpenWeatherCurrentWeatherResponse } from "@/types/openweather";
import { WeatherUnits } from "@/types/weather-units";
import { useSearchParams } from "next/navigation";

const descriptionMap: Record<string, string> = {
  "clear sky": "Clear",
  "few clouds": "Mostly Clear",
  "scattered clouds": "Partly Cloudy",
  "broken clouds": "Mostly Cloudy",
  "overcast clouds": "Cloudy",
};

export default function TemperatureCard({
  current,
  temperatureUnit,
}: {
  current: OpenWeatherCurrentWeatherResponse;
  temperatureUnit: WeatherUnits["temperature"];
}) {
  const searchParams = useSearchParams();
  const displayName = searchParams.get("location") ?? current.name;

  const label =
    descriptionMap[current.weather[0].description] ??
    current.weather[0].description;

  return (
    <div className="flex flex-col items-center justify-center pb-4">
      <h2 className="text-2xl font-medium">{displayName}</h2>
      <p className="text-7xl font-bold">
        {convertTemp(current.main.temp, temperatureUnit).toFixed(0)}°
      </p>
      <p className="font-medium capitalize">{label}</p>
      <p>
        H: {convertTemp(current.main.temp_max, temperatureUnit).toFixed(0)}° L:{" "}
        {convertTemp(current.main.temp_min, temperatureUnit).toFixed(0)}°
      </p>
    </div>
  );
}
