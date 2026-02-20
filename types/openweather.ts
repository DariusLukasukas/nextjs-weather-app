/** Coordinates - used in current weather, forecast, etc. */
export interface OpenWeatherCoord {
  lon: number;
  lat: number;
}

/** Single weather condition (id, main, description, icon) */
export interface OpenWeatherWeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

/** Main temp/pressure/humidity block */
export interface OpenWeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

/** Wind */
export interface OpenWeatherWind {
  speed: number;
  deg: number;
  gust?: number;
}

/** Clouds */
export interface OpenWeatherClouds {
  all: number;
}

/** Rain (only present when applicable) */
export interface OpenWeatherRain {
  "1h"?: number;
  "3h"?: number;
}

/** Snow (only present when applicable) */
export interface OpenWeatherSnow {
  "1h"?: number;
  "3h"?: number;
}

/** Sys (country, sunrise, sunset, etc.) */
export interface OpenWeatherSys {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
}

/**
 * Response from Current Weather API
 * */
export interface OpenWeatherCurrentWeatherResponse {
  coord: OpenWeatherCoord;
  weather: OpenWeatherWeatherCondition[];
  base: string;
  main: OpenWeatherMain;
  visibility?: number;
  wind?: OpenWeatherWind;
  rain?: OpenWeatherRain;
  snow?: OpenWeatherSnow;
  clouds?: OpenWeatherClouds;
  dt: number;
  sys: OpenWeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

/**
 * List item (each hour) in hourly forecast response
 * */
export interface OpenWeatherHourlyForecastListItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level?: number;
    grnd_level?: number;
    humidity: number;
    temp_kf: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  visibility?: number;
  pop: number;
  rain?: { "1h"?: number };
  snow?: { "1h"?: number };
  sys: {
    pod: "d" | "n";
  };
  dt_txt: string;
}

/**
 * City block in hourly forecast response
 * */
export interface OpenWeatherHourlyForecastCity {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population?: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

/**
 * Response from Hourly Forecast 4 Days API
 * */
export interface OpenWeatherHourlyForecast4DaysResponse {
  cod: string;
  message: number;
  cnt: number;
  list: OpenWeatherHourlyForecastListItem[];
  city: OpenWeatherHourlyForecastCity;
}

/**
 * OpenWeather Air Pollution API
 */
export interface OpenWeatherAirPollutionResponse {
  list: [
    {
      main: { aqi: 1 | 2 | 3 | 4 | 5 };
      components: {
        co: number;
        no: number;
        no2: number;
        o3: number;
        so2: number;
        pm2_5: number;
        pm10: number;
        nh3: number;
      };
    },
  ];
}

/** Daily temperature block (temps at different times of day) */
export interface OpenWeatherDailyTemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

/** Daily feels-like block (human-perceived temps at different times of day) */
export interface OpenWeatherDailyFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

/** List item (each day) in daily forecast response */
export interface OpenWeatherDailyForecastListItem {
  dt: number;
  temp: OpenWeatherDailyTemp;
  feels_like: OpenWeatherDailyFeelsLike;
  pressure: number;
  humidity: number;
  weather: OpenWeatherWeatherCondition[];
  speed: number;
  deg: number;
  gust?: number;
  clouds: number;
  rain?: number;
  snow?: number;
  pop: number;
}

/** City block in daily forecast response */
export interface OpenWeatherDailyForecastCity {
  id: number;
  name: string;
  coord: OpenWeatherCoord;
  country: string;
  population?: number;
  timezone: number;
}

/**
 * Daily Forecast 16 Days API
 */
export interface OpenWeatherDailyForecast16DaysResponse {
  cod: string;
  message: number;
  cnt: number;
  list: OpenWeatherDailyForecastListItem[];
  city: OpenWeatherDailyForecastCity;
}

/** Weather Map Layer */
export type OpenWeatherWeatherMapLayer =
  | "clouds_new"
  | "precipitation_new"
  | "pressure_new"
  | "wind_new"
  | "temp_new";

/** Weather Map 1.0 Tile Params */
export interface OpenWeatherWeatherMap1TileParams {
  layer: OpenWeatherWeatherMapLayer;
  zoom: number; // 0-18
  x: number;
  y: number;
}
