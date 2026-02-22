import {
  getAirPollution,
  getCurrentWeather,
  getDailyForecast16Days,
  getHourlyForecast4Days,
  getUVIndex,
} from "@/actions/weather";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import TemperatureCard from "@/components/weather/temperature-card";
import { DEFAULT_WEATHER_UNITS, WeatherUnits } from "@/types/weather-units";
import { cookies } from "next/headers";

import * as motion from "motion/react-client";
import {
  GridCard,
  GridCardContent,
  GridCardHeader,
  GridCardTitle,
} from "@/components/weather/grid-card";
import WindCard from "@/components/weather/wind-card";
import FeelsLikeCard from "@/components/weather/feels-like-card";
import {
  CalendarDays,
  Droplet,
  Eye,
  Gauge,
  Map as MapIcon,
  Sun,
  Sunrise,
  Thermometer,
  Waves,
  Wind,
} from "lucide-react";
import HumidityCard from "@/components/weather/humidity-card";
import PressureCard from "@/components/weather/pressure-card";
import VisibilityCard from "@/components/weather/visibility-card";
import PrecipitationCard from "@/components/weather/precipitation-card";
import SunriseSunsetCard from "@/components/weather/sunrise-sunset-card";
import AirQualityCard from "@/components/weather/air-quality-card";
import UVIndexCard from "@/components/weather/uv-index-card";
import TenDayForecastCard from "@/components/weather/ten-day-forecast-card";
import Map from "@/components/weather/map";
import HourlyForecastCard from "@/components/weather/hourly-forecast-card";

// Cupertino, CA
const DEFAULT_LAT = 37.319321;
const DEFAULT_LON = -122.029283;

const FORECAST_HOURS = 24;
const FORECAST_DAYS = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lat?: string; lon?: string }>;
}) {
  const cookieStore = await cookies();
  // Get sidebar state from cookie store
  const sidebarOpen = cookieStore.get("SIDEBAR_STATE")?.value === "true";
  // Get weather units from cookie store
  const raw = cookieStore.get("WEATHER_UNITS")?.value;
  const units: WeatherUnits = raw ? JSON.parse(raw) : DEFAULT_WEATHER_UNITS;

  const { lat = DEFAULT_LAT, lon = DEFAULT_LON } = await searchParams;

  const [current, airPollution, uvIndex, hourlyForecast, dailyForecast] =
    await Promise.all([
      getCurrentWeather(Number(lat), Number(lon)),
      getAirPollution(Number(lat), Number(lon)),
      getUVIndex(Number(lat), Number(lon)),
      getHourlyForecast4Days(Number(lat), Number(lon), FORECAST_HOURS),
      getDailyForecast16Days(Number(lat), Number(lon), FORECAST_DAYS),
    ]);

  /*
   * Logs for debugging
   */
  // console.log("Current:", current);
  // console.log("Air Pollution:", airPollution.list[0]);
  // console.log("UV Index:", uvIndex);
  // console.log("Hourly Forecast:", hourlyForecast);
  // console.log("Daily Forecast:", dailyForecast);

  return (
    <div className="dark:bg-background flex h-screen overflow-hidden bg-zinc-100">
      <Sidebar defaultOpen={sidebarOpen} temperatureUnit={units.temperature} />

      <div className="@container flex min-h-0 flex-1 flex-col overflow-y-auto p-3 md:pl-0">
        <Header />

        <motion.main
          layout
          transition={{ type: "spring", bounce: 0, duration: 0.25 }}
          className="relative mx-auto flex w-full max-w-6xl min-w-0 flex-col items-center gap-4"
        >
          <TemperatureCard
            current={current}
            temperatureUnit={units.temperature}
          />

          <HourlyForecastCard
            hourly={hourlyForecast}
            units={units.temperature}
          />

          <div className="grid w-full auto-rows-fr grid-cols-2 gap-4 @md:grid-cols-4 @4xl:grid-cols-6">
            {/* 12 Day Forecast */}
            <GridCard className="col-span-2 row-span-3">
              <GridCardHeader>
                <GridCardTitle>
                  <CalendarDays size={16} />
                  10 Day Forecast
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent className="pt-2">
                <TenDayForecastCard
                  dailyForecast={dailyForecast}
                  temperatureUnit={units.temperature}
                />
              </GridCardContent>
            </GridCard>

            {/* Air Quality */}
            <GridCard className="col-span-2">
              <GridCardHeader>
                <GridCardTitle>Air Quality</GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <AirQualityCard airQuality={airPollution.list[0].main.aqi} />
              </GridCardContent>
            </GridCard>

            {/* Map */}
            <GridCard className="col-span-2 row-span-2 gap-2">
              <GridCardHeader>
                <GridCardTitle>
                  <MapIcon size={16} />
                  Map
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <Map lat={Number(lat)} lon={Number(lon)} />
              </GridCardContent>
            </GridCard>

            {/* Wind */}
            <GridCard className="col-span-2">
              <GridCardHeader>
                <GridCardTitle>
                  <Wind size={16} />
                  Wind
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <WindCard
                  deg={current.wind?.deg ?? 0}
                  speed={current.wind?.speed ?? 0}
                  gust={current.wind?.gust}
                  windSpeedUnit={units.windSpeed}
                />
              </GridCardContent>
            </GridCard>

            <GridCard className="aspect-square">
              <GridCardHeader>
                <GridCardTitle>
                  <Thermometer size={16} />
                  Feels Like
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <FeelsLikeCard
                  feelsLike={current.main?.feels_like ?? 0}
                  temperatureUnit={units.temperature}
                />
              </GridCardContent>
            </GridCard>

            <GridCard>
              <GridCardHeader>
                <GridCardTitle>
                  <Gauge size={16} />
                  Pressure
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <PressureCard
                  pressure={current.main.pressure}
                  pressureUnit={units.pressure}
                />
              </GridCardContent>
            </GridCard>

            <GridCard>
              <GridCardHeader>
                <GridCardTitle>
                  <Droplet size={16} />
                  Precipitation
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <PrecipitationCard
                  rain={current.rain}
                  snow={current.snow}
                  unit={units.precipitation}
                />
              </GridCardContent>
            </GridCard>

            <GridCard>
              <GridCardHeader>
                <GridCardTitle>
                  <Sunrise size={16} />
                  Sunrise
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <SunriseSunsetCard
                  sunrise={current.sys.sunrise}
                  sunset={current.sys.sunset}
                  timezone={current.timezone}
                />
              </GridCardContent>
            </GridCard>

            <GridCard>
              <GridCardHeader>
                <GridCardTitle>
                  <Eye size={16} />
                  Visibility
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <VisibilityCard
                  distance={current?.visibility ?? 0}
                  unit={units.distance}
                />
              </GridCardContent>
            </GridCard>

            <GridCard>
              <GridCardHeader>
                <GridCardTitle>
                  <Waves size={16} />
                  Humidity
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <HumidityCard humidity={current.main.humidity} />
              </GridCardContent>
            </GridCard>

            <GridCard>
              <GridCardHeader>
                <GridCardTitle>
                  <Sun size={16} />
                  UV Index
                </GridCardTitle>
              </GridCardHeader>
              <GridCardContent>
                <UVIndexCard uvIndex={uvIndex} />
              </GridCardContent>
            </GridCard>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
