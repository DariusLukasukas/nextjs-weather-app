"use client";

import { OpenWeatherHourlyForecast4DaysResponse } from "@/types/openweather";
import { format } from "date-fns";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WeatherUnits } from "@/types/weather-units";
import { convertTemp } from "@/lib/units";
import { getWeatherEmoji } from "@/lib/weather-emoji";

const SCROLL_STEP = 400;

export default function HourlyForecastCard({
  hourly,
  units,
}: {
  hourly: OpenWeatherHourlyForecast4DaysResponse;
  units: WeatherUnits["temperature"];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const hours = hourly.list;
  const cityTimezone = hourly.city.timezone;

  const formatHourInLocation = (dt: number) => {
    const localMs = (dt + cityTimezone) * 1000;
    const hours = new Date(localMs).getUTCHours();
    return String(hours).padStart(2, "0");
  };

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    // Debug log
    // console.log("Scroll state:", { scrollLeft, scrollWidth, clientWidth });

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);

    return () => ro.disconnect();
  }, [hours, updateScrollState]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const step = direction === "left" ? -SCROLL_STEP : SCROLL_STEP;
    el.scrollBy({ left: step, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-card relative flex w-full min-w-0 flex-col rounded-2xl p-3">
      {/* Left */}
      {canScrollLeft && (
        <button
          aria-label="Scroll left"
          disabled={!canScrollLeft}
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-6 z-10 h-full -translate-y-1/2 transition duration-300 ease-in-out hover:cursor-pointer disabled:pointer-events-none"
        >
          <ChevronLeft />
        </button>
      )}

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="no-scrollbar flex snap-x snap-mandatory flex-row justify-evenly gap-6 overflow-x-scroll overflow-y-hidden overscroll-none scroll-smooth select-none"
      >
        {hours.map((hour, i) => (
          <motion.div
            key={hour.dt}
            transition={{ duration: 0.2, delay: i * 0.02 }}
            className="flex min-w-10 snap-center flex-col items-center gap-4"
          >
            <p>{formatHourInLocation(hour.dt)}</p>
            <span>
              {getWeatherEmoji(hour.weather[0].id, hour.weather[0].icon)}
            </span>
            <p>{convertTemp(hour.main.temp, units).toFixed(0)}°</p>
          </motion.div>
        ))}
      </div>

      {/* Right */}
      {canScrollRight && (
        <button
          aria-label="Scroll right"
          disabled={!canScrollRight}
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-6 z-10 h-full -translate-y-1/2 transition duration-300 ease-in-out hover:cursor-pointer disabled:pointer-events-none"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
}
