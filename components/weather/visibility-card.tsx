/**
 *
 * @param Distance, meter. The maximum value of the visibility is 10 km
 *
 */

import { convertDistance } from "@/lib/weather/units";
import { WeatherUnits } from "@/types/weather-units";

export default function VisibilityCard({
  distance,
  unit,
}: {
  distance: number;
  unit: WeatherUnits["distance"];
}) {
  return (
    <div>
      <p className="text-2xl font-medium">
        {convertDistance(distance, unit)} {unit}
      </p>
    </div>
  );
}
