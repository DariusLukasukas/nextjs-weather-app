"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Layers2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { OpenWeatherWeatherMapLayer } from "@/types/openweather";

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const DEFAULT_LAYER = "precipitation_new";

const WEATHER_MAP_LAYERS: {
  value: OpenWeatherWeatherMapLayer;
  label: string;
}[] = [
  { value: "precipitation_new", label: "Precipitation" },
  { value: "clouds_new", label: "Clouds" },
  { value: "pressure_new", label: "Pressure" },
  { value: "wind_new", label: "Wind" },
  { value: "temp_new", label: "Temperature" },
];

function addWeatherLayer(map: mapboxgl.Map, layer: OpenWeatherWeatherMapLayer) {
  if (map.getSource("openweather-tiles")) {
    map.removeLayer("openweather-layer");
    map.removeSource("openweather-tiles");
  }
  map.addSource("openweather-tiles", {
    type: "raster",
    tiles: [`/api/weather/${layer}/{z}/{x}/{y}`],
    tileSize: 256,
  });
  map.addLayer({
    id: "openweather-layer",
    type: "raster",
    source: "openweather-tiles",
    paint: {
      "raster-opacity": 0.8,
      "raster-saturation": 1, // >1 = more saturated (default 1)
      "raster-brightness-min": 0.15, // lifts shadows so colors pop on white
      "raster-brightness-max": 1, // slight highlight boost
      "raster-contrast": 1, // more separation from base map
    },
  });
}

export default function Map({ lat, lon }: { lat: number; lon: number }) {
  const [layer, setLayer] = useState<OpenWeatherWeatherMapLayer>(DEFAULT_LAYER);

  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const token = MAPBOX_ACCESS_TOKEN;
    if (!token) {
      console.error("Mapbox API key is missing.");
      return;
    }

    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [lon, lat],
      zoom: 5,
      maxTileCacheSize: 100,
      refreshExpiredTiles: false,
    });

    mapRef.current = map;

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add a weather layer
    map.on("load", () => {
      addWeatherLayer(map, DEFAULT_LAYER);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  /**
   * Fly to the map to the center of the map when the lat and lon state changes
   */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const center = map.getCenter();
    if (center.lng === lon && center.lat === lat) return;
    map.flyTo({ center: [lon, lat], zoom: 5 });
  }, [lat, lon]);

  /**
   * Update weather layer when layer state changes, no re-render of the map component
   */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.getSource("openweather-tiles")) return;
    addWeatherLayer(map, layer);
  }, [layer]);

  return (
    <div className="relative size-full">
      <div
        ref={mapContainerRef}
        className="absolute inset-0 size-full rounded-xl"
      />

      {/* Layer toggle button */}
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              size={"icon"}
              aria-label="Change weather layer"
              className="text-primary outline-accent hover:bg-muted absolute top-2.5 right-12 size-[29px] rounded-sm bg-white shadow-[0_0_0_1px_#0000001a] dark:bg-white dark:text-black [&_svg:not([class*='size-'])]:size-4"
            >
              <Layers2 strokeWidth={3} />
            </Button>
          }
        />
        <DropdownMenuContent align="end" side="bottom">
          <DropdownMenuRadioGroup value={layer} onValueChange={setLayer}>
            {WEATHER_MAP_LAYERS.map((l) => (
              <DropdownMenuRadioItem key={l.value} value={l.value}>
                {l.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
