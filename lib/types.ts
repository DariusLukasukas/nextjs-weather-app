type Coordinates = {
  lon: string
  lat: string
}
export type Location = {
  city: string
  coord: Coordinates
}

export type OpenWeatherData = {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export type HourlyForecastData = {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  visibility: number
  pop: number
  rain?: {
    "1h": number
  }
  sys: {
    pod: "d" | "n"
  }
  dt_txt: string
}

export type HourlyForecastResponse = {
  cod: string
  message: number
  cnt: number
  list: HourlyForecastData[]
  city: City
}

export type AirQualityData = {
  dt: number
  main: {
    aqi: 1 | 2 | 3 | 4 | 5
  }
  components: {
    co: number // Concentration of CO (Carbon monoxide), μg/m3
    no: number // Concentration of NO (Nitrogen monoxide), μg/m3
    no2: number // Concentration of NO2 (Nitrogen dioxide), μg/m3
    o3: number // Concentration of O3 (Ozone), μg/m3
    so2: number // Concentration of SO2 (Sulphur dioxide), μg/m3
    pm2_5: number // Concentration of PM2.5 (Fine particles matter), μg/m3
    pm10: number // Concentration of PM10 (Coarse particulate matter), μg/m3
    nh3: number // Concentration of NH3 (Ammonia), μg/m3
  }
}

export type AirPollutionResponse = {
  coord: Coordinates
  list: AirQualityData[]
}

type DailyUnits = {
  time: string
  uv_index_max: string
}

type DailyData = {
  time: string[]
  uv_index_max: number[]
}

export type UVIndexResponse = {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  daily_units: DailyUnits
  daily: DailyData
}

export type City = {
  id: number
  name: string
  coord: {
    lon: number
    lat: number
  }
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

type Temperature = {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

type FeelsLike = {
  day: number
  night: number
  eve: number
  morn: number
}

export type ForecastData = {
  dt: number
  sunrise: number
  sunset: number
  temp: Temperature
  feels_like: FeelsLike
  pressure: number
  humidity: number
  weather: Weather[]
  speed: number
  deg: number
  gust: number
  clouds: number
  pop: number
  rain?: number
}

export type TenDayForecastData = {
  city: City
  cod: string
  message: number
  cnt: number
  list: ForecastData[]
}
