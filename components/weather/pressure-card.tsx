import { convertPressure } from "@/lib/units";
import { WeatherUnits } from "@/types/weather-units";

/**
 * Atmospheric pressure on the sea level, hPa
 */
export default function PressureCard({
  pressure,
  pressureUnit,
}: {
  pressure: number;
  pressureUnit: WeatherUnits["pressure"];
}) {
  return (
    <div>
      <p className="text-2xl font-medium">
        {convertPressure(pressure, pressureUnit)} {pressureUnit}
      </p>
    </div>
  );
}
