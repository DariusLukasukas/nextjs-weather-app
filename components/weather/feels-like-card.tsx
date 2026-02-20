import { convertTemp } from "@/lib/units";
import { WeatherUnits } from "@/types/weather-units";

export default function FeelsLikeCard({
  feelsLike,
  temperatureUnit,
}: {
  feelsLike: number;
  temperatureUnit: WeatherUnits["temperature"];
}) {
  return (
    <div>
      <p className="text-2xl font-medium">
        {convertTemp(feelsLike, temperatureUnit).toFixed(0)}°
      </p>
    </div>
  );
}
