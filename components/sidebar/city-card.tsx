import { convertTemp } from "@/lib/units";
import { cn } from "@/lib/utils";
import { SavedCity } from "@/types/city";
import { OpenWeatherCurrentWeatherResponse } from "@/types/openweather";
import { WeatherUnits } from "@/types/weather-units";
import CityTime from "./city-time";

interface CityCardProps {
  city: SavedCity;
  onClick: () => void;
  isActive?: boolean;
  weather: OpenWeatherCurrentWeatherResponse | null;
  temperatureUnit: WeatherUnits["temperature"];
}

export default function CityCard({
  city,
  onClick,
  isActive,
  weather,
  temperatureUnit,
}: CityCardProps) {
  const temperature = weather?.main.temp;
  const maxTemperature = weather?.main.temp_max;
  const minTemperature = weather?.main.temp_min;
  const description = weather?.weather[0].description;

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex shrink-0 flex-col gap-6 rounded-2xl border p-3 select-none",
        isActive ? "outline-2" : "",
      )}
    >
      <div className="flex flex-row items-start justify-between">
        <div>
          <p className="font-bold">{city.name}</p>
          {weather && <CityTime timezone={weather.timezone} />}
        </div>
        <p className="text-3xl font-medium">
          {convertTemp(Number(temperature), temperatureUnit).toFixed(0)}°
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-xs capitalize">{description}</p>

        <div className="flex flex-row gap-1 text-xs">
          <p>
            H: {convertTemp(Number(maxTemperature), temperatureUnit).toFixed(0)}
            °
          </p>
          <p>
            L: {convertTemp(Number(minTemperature), temperatureUnit).toFixed(0)}
            °
          </p>
        </div>
      </div>
    </div>
  );
}
