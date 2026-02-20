"use server";

import { SavedCity } from "@/types/city";
import type {
  OpenWeatherAirPollutionResponse,
  OpenWeatherCurrentWeatherResponse,
  OpenWeatherDailyForecast16DaysResponse,
  OpenWeatherHourlyForecast4DaysResponse,
  OpenWeatherWeatherMap1TileParams,
} from "@/types/openweather";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

function getApiKey() {
  const key = process.env.OPENWEATHER_API_KEY;
  if (!key) throw new Error("Missing OpenWeather API Key.");
  return key;
}

/**
 * Current Weather API Request
 * @param lat
 * @param lon
 * @returns OpenWeatherCurrentWeatherResponse
 */
export async function getCurrentWeather(
  lat: number,
  lon: number,
): Promise<OpenWeatherCurrentWeatherResponse> {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    appid: getApiKey(),
    units: "metric",
  });

  const res = await fetch(`${BASE_URL}/weather?${params}`, {
    next: { revalidate: 3000, tags: ["weather"] }, // 30 minutes cache
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch weather data: ${res.statusText}`);
  }

  const data: OpenWeatherCurrentWeatherResponse = await res.json();
  return data;
}

/**
 * Hourly Forecast 4 Days API Request
 * @param lat
 * @param lon
 * @returns OpenWeatherHourlyForecast4DaysResponse
 */
export async function getHourlyForecast4Days(
  lat: number,
  lon: number,
): Promise<OpenWeatherHourlyForecast4DaysResponse> {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    appid: getApiKey(),
    units: "metric",
  });

  const res = await fetch(`${BASE_URL}/forecast/hourly?${params}`, {
    next: { revalidate: 3000 }, // 30 minutes
  });

  if (!res.ok) {
    throw new Error("Failed to fetch hourly forecast data.");
  }

  const data: OpenWeatherHourlyForecast4DaysResponse = await res.json();
  return data;
}

/**
 * Current Weather Batch API Request for multiple cities
 * @param cities Array of SavedCity objects
 * @returns Array of objects with city, weather, and error properties
 */
export async function getCurrentWeatherBatch(cities: SavedCity[]): Promise<
  Array<{
    city: SavedCity;
    weather: OpenWeatherCurrentWeatherResponse | null;
    error: string | null;
  }>
> {
  const promises = cities.map(async (city) => {
    try {
      const weather = await getCurrentWeather(city.coord.lat, city.coord.lon);
      return {
        city,
        weather,
        error: null,
      };
    } catch (error) {
      return {
        city,
        weather: null,
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch weather data.",
      };
    }
  });

  return Promise.all(promises);
}

/**
 * Air Pollution API Request for a single city
 * @param lat
 * @param lon
 * @returns OpenWeatherAirPollutionResponse
 */
export async function getAirPollution(
  lat: number,
  lon: number,
): Promise<OpenWeatherAirPollutionResponse> {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    appid: getApiKey(),
  });

  const res = await fetch(`${BASE_URL}/air_pollution?${params}`, {
    next: { revalidate: 3000 }, // 30 minutes
  });

  if (!res.ok) throw new Error("Failed to fetch air pollution data.");

  return res.json();
}

/**
 *  Open-Meteo API Request for UV Index
 * @param lat
 * @param lon
 * @returns UV index
 */
export async function getUVIndex(lat: number, lon: number): Promise<number> {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=uv_index`,
    { next: { revalidate: 3000 } }, // 30 minutes
  );

  if (!res.ok) throw new Error("Failed to fetch UV index.");
  const data = await res.json();
  return data.current.uv_index;
}

/**
 * Daily Forecast 16 Days API Request
 * @param lat
 * @param lon
 * @param days Number of days to forecast (1-16)
 * @returns OpenWeatherDailyForecast16DaysResponse
 */
export async function getDailyForecast16Days(
  lat: number,
  lon: number,
  days: number = 16,
): Promise<OpenWeatherDailyForecast16DaysResponse> {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    cnt: String(days),
    units: "metric",
    appid: getApiKey(),
  });

  const res = await fetch(`${BASE_URL}/forecast/daily?${params}`, {
    next: { revalidate: 3000 }, // 30 minutes
  });

  if (!res.ok) throw new Error("Failed to fetch daily forecast data.");

  const data: OpenWeatherDailyForecast16DaysResponse = await res.json();
  return data;
}

/**
 * Weather Map 1.0 Tile API Request
 * @param params OpenWeatherWeatherMap1TileParams
 * @return
 */
export async function getWeatherMap1Tile({
  layer,
  zoom,
  x,
  y,
}: OpenWeatherWeatherMap1TileParams): Promise<Blob> {
  const params = new URLSearchParams({
    layer,
    zoom: String(zoom),
    x: String(x),
    y: String(y),
  });

  const res = await fetch(`${BASE_URL}/map/1.0/tile/png?${params}`, {
    next: { revalidate: 3000 }, // 30 minutes
  });

  if (!res.ok) throw new Error("Failed to fetch weather map tile.");

  const blob = await res.blob();
  return blob;
}
