export interface WeatherUnits {
  temperature: "celsius" | "fahrenheit";
  windSpeed: "m/s" | "km/h" | "mph" | "knots";
  pressure: "hPa" | "inHg";
  distance: "km" | "mi";
  precipitation: "mm" | "in";
}

export const DEFAULT_WEATHER_UNITS: WeatherUnits = {
  temperature: "celsius",
  windSpeed: "m/s",
  pressure: "hPa",
  distance: "km",
  precipitation: "mm",
};
