import { OpenWeatherDailyForecast16DaysResponse } from "@/types/openweather";
import { WeatherUnits } from "@/types/weather-units";
import { convertTemp } from "@/lib/units";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

const TEMP_COLOR_STOPS: [number, number, number, number][] = [
  [-20, 0.65, 0.1, 250], // deep blue
  [-10, 0.62, 0.12, 240], // blue
  [0, 0.68, 0.11, 200], // cyan
  [10, 0.72, 0.17, 145], // green
  [20, 0.84, 0.18, 95], // yellow
  [30, 0.72, 0.18, 55], // orange
  [40, 0.62, 0.22, 25], // red
];
function tempToColor(tempC: number): string {
  const stops = TEMP_COLOR_STOPS;
  if (tempC <= stops[0][0]) {
    const [, l, c, h] = stops[0];
    return `oklch(${l} ${c} ${h})`;
  }
  if (tempC >= stops[stops.length - 1][0]) {
    const [, l, c, h] = stops[stops.length - 1];
    return `oklch(${l} ${c} ${h})`;
  }

  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, l0, c0, h0] = stops[i];
    const [t1, l1, c1, h1] = stops[i + 1];
    if (tempC >= t0 && tempC <= t1) {
      const ratio = (tempC - t0) / (t1 - t0);
      const l = lerp(l0, l1, ratio);
      const c = lerp(c0, c1, ratio);
      const h = lerp(h0, h1, ratio);
      return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`;
    }
  }

  const [, l, c, h] = stops[stops.length - 1];
  return `oklch(${l} ${c} ${h})`;
}
export default function TenDayForecastCard({
  dailyForecast,
  temperatureUnit,
}: {
  dailyForecast: OpenWeatherDailyForecast16DaysResponse;
  temperatureUnit: WeatherUnits["temperature"];
}) {
  const days = dailyForecast.list;

  const globalMin = Math.min(
    ...days.map((d) => convertTemp(d.temp.min, temperatureUnit)),
  );
  const globalMax = Math.max(
    ...days.map((d) => convertTemp(d.temp.max, temperatureUnit)),
  );
  const globalRange = globalMax - globalMin;
  const cityTimezone = dailyForecast.city.timezone;

  return (
    <div className="flex h-full flex-col justify-between">
      {days.map((day, i) => {
        const cityDate = new Date((day.dt + cityTimezone) * 1000);
        const label = i === 0 ? "Today" : DAY_NAMES[cityDate.getUTCDay()];

        const low = convertTemp(day.temp.min, temperatureUnit);
        const high = convertTemp(day.temp.max, temperatureUnit);

        const lowColor = tempToColor(day.temp.min);
        const midColor = tempToColor((day.temp.min + day.temp.max) / 2);
        const highColor = tempToColor(day.temp.max);

        const leftPercent = ((low - globalMin) / globalRange) * 100;
        const widthPercent = ((high - low) / globalRange) * 100;

        return (
          <div
            key={day.dt}
            className="grid grid-cols-[3rem_2rem_1fr_2rem] items-center gap-2 py-2"
          >
            <span className="text-sm font-medium">{label}</span>
            <span className="text-muted-foreground text-right text-sm">
              {Math.round(low)}°
            </span>

            <div className="bg-secondary relative h-1.5 rounded-full">
              <div
                className="absolute inset-y-0 rounded-full"
                style={{
                  left: `${leftPercent}%`,
                  width: `${widthPercent}%`,
                  background: `linear-gradient(to right, ${lowColor}, ${midColor}, ${highColor})`,
                }}
              />
            </div>

            <span className="text-right text-sm font-medium">
              {Math.round(high)}°
            </span>
          </div>
        );
      })}
    </div>
  );
}
