import { DEFAULT_WEATHER_UNITS, WeatherUnits } from "@/types/weather-units";

export function getUnits(): WeatherUnits {
  if (typeof document === "undefined") return DEFAULT_WEATHER_UNITS;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith("WEATHER_UNITS="));

  if (!match) return DEFAULT_WEATHER_UNITS;
  try {
    return JSON.parse(decodeURIComponent(match.split("=").slice(1).join("=")));
  } catch {
    return DEFAULT_WEATHER_UNITS;
  }
}

export function convertTemp(
  celsius: number,
  unit: WeatherUnits["temperature"],
): number {
  if (unit === "fahrenheit") return (celsius * 9) / 5 + 32;
  return celsius;
}

export function convertWindSpeed(
  ms: number,
  unit: WeatherUnits["windSpeed"],
): number {
  switch (unit) {
    case "km/h":
      return ms * 3.6;
    case "mph":
      return ms * 2.237;
    case "knots":
      return ms * 1.944;
    default:
      return ms; // m/s
  }
}

export function convertPressure(
  hPa: number,
  unit: WeatherUnits["pressure"],
): number {
  switch (unit) {
    case "inHg":
      return hPa * 0.02953;
    default:
      return hPa;
  }
}

export function convertDistance(
  meters: number,
  unit: WeatherUnits["distance"],
): number {
  const km = meters / 1000;
  if (unit === "mi") return km / 1.609;
  return km;
}

export function convertPrecipitation(
  mm: number,
  unit: WeatherUnits["precipitation"],
): number {
  if (unit === "in") return mm / 25.4;
  return mm;
}
