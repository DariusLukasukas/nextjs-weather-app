import { convertPrecipitation } from "@/lib/weather/units";
import { OpenWeatherRain, OpenWeatherSnow } from "@/types/openweather";
import { WeatherUnits } from "@/types/weather-units";

/**
 *
 * @rain 1h (where available) Precipitation, mm/h.
 * @snow 1h (where available) Precipitation, mm/h.
 *
 */

export default function PrecipitationCard({
  rain,
  snow,
  unit,
}: {
  rain?: OpenWeatherRain;
  snow?: OpenWeatherSnow;
  unit: WeatherUnits["precipitation"];
}) {
  const rainAmount = rain?.["1h"] ?? 0;
  const snowAmount = snow?.["1h"] ?? 0;
  const total = rainAmount + snowAmount;

  return (
    <div className="flex h-full flex-col">
      <div>
        <p className="text-2xl font-medium">
          {convertPrecipitation(total, unit).toFixed(0)} {unit}
        </p>
        <p className="text-muted-foreground text-xl">Today</p>
      </div>

      {snowAmount > 0 && (
        <p className="text-muted-foreground mt-auto text-sm">
          Snow: {convertPrecipitation(snowAmount, unit).toFixed(1)} {unit}
        </p>
      )}
      {rainAmount > 0 && (
        <p className="text-muted-foreground mt-auto text-sm">
          Rain: {convertPrecipitation(rainAmount, unit).toFixed(1)} {unit}
        </p>
      )}
    </div>
  );
}
