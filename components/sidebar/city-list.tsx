"use client";

import { useRouter, useSearchParams } from "next/navigation";
import CityCard from "./city-card";
import { useCitiesStore } from "@/lib/store/use-cities-store";
import { SavedCity } from "@/types/city";
import { useEffect, useState } from "react";
import { getCurrentWeatherBatch } from "@/actions/weather";
import { OpenWeatherCurrentWeatherResponse } from "@/types/openweather";
import { AnimatePresence, motion } from "motion/react";
import { WeatherUnits } from "@/types/weather-units";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { Trash2 } from "lucide-react";

export default function CityList({
  temperatureUnit,
}: {
  temperatureUnit: WeatherUnits["temperature"];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { cities, removeCity } = useCitiesStore();

  const [weatherData, setWeatherData] = useState<
    Array<{
      city: SavedCity;
      weather: OpenWeatherCurrentWeatherResponse | null;
      error: string | null;
    }>
  >([]);

  const handleCityClick = (city: SavedCity) => {
    const currentLat = searchParams.get("lat");
    const currentLon = searchParams.get("lon");

    if (
      currentLat === city.coord.lat.toString() &&
      currentLon === city.coord.lon.toString()
    ) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set("lat", city.coord.lat.toString());
    params.set("lon", city.coord.lon.toString());
    params.set("location", city.name);
    params.set("country", city.country);
    router.push(`/?${params.toString()}`);
  };

  const handleDelete = (city: SavedCity) => {
    removeCity(city.name, city.country);
  };

  useEffect(() => {
    if (cities.length === 0) {
      setWeatherData([]);
      return;
    }

    let stale = false;

    getCurrentWeatherBatch(cities)
      .then((result) => {
        if (!stale) setWeatherData(result);
      })
      .catch((error) => {
        if (!stale) {
          console.error("Failed to fetch weather batch", error);
          setWeatherData(
            cities.map((city) => ({
              city,
              weather: null,
              error: error.message,
            })),
          );
        }
      });

    return () => {
      stale = true;
    };
  }, [cities]);

  return (
    <div className="flex flex-col gap-2">
      <AnimatePresence>
        {weatherData.map(({ city, weather, error }) => {
          if (error) {
            console.error(`Weather failed for ${city.name}:`, error);
            return null;
          }

          const isActive =
            searchParams.get("lat") === city.coord.lat.toString() &&
            searchParams.get("lon") === city.coord.lon.toString();

          return (
            <motion.div
              layout
              key={`${city.name}-${city.country}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
              <ContextMenu>
                <ContextMenuTrigger>
                  <CityCard
                    city={city}
                    onClick={() => handleCityClick(city)}
                    isActive={isActive}
                    weather={weather}
                    temperatureUnit={temperatureUnit}
                  />
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem
                    variant="destructive"
                    onClick={() => handleDelete(city)}
                  >
                    <Trash2 />
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
