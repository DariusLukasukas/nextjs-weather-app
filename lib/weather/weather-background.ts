type WeatherGroup =
  | "thunderstorm"
  | "drizzle"
  | "rain"
  | "snow"
  | "atmosphere"
  | "clear"
  | "clouds";

function getWeatherGroup(id: number): WeatherGroup {
  if (id >= 200 && id <= 232) return "thunderstorm";
  if (id >= 300 && id <= 321) return "drizzle";
  if (id >= 500 && id <= 531) return "rain";
  if (id >= 600 && id <= 622) return "snow";
  if (id >= 701 && id <= 781) return "atmosphere";
  if (id === 800) return "clear";
  if (id >= 801 && id <= 804) return "clouds";
  return "clouds";
}

function isNightNow(sunrise: number, sunset: number): boolean {
  const now = Math.floor(Date.now() / 1000);
  return now < sunrise || now > sunset;
}

export function getWeatherBackground(
  weatherId: number,
  icon?: string,
  sunrise?: number,
  sunset?: number,
): string {
  const group = getWeatherGroup(weatherId);
  const isNight =
    sunrise != null && sunset != null
      ? isNightNow(sunrise, sunset)
      : (icon?.endsWith("n") ?? false);

  const backgrounds: Record<WeatherGroup, { day: string; night: string }> = {
    thunderstorm: {
      day: "bg-gradient-to-br from-slate-600 to-slate-800",
      night: "bg-gradient-to-br from-slate-800 to-slate-950",
    },
    drizzle: {
      day: "bg-gradient-to-br from-sky-400/30 to-sky-600/40",
      night: "bg-gradient-to-br from-slate-600/40 to-slate-800/50",
    },
    rain: {
      day: "bg-gradient-to-br from-sky-500/40 to-sky-700/50",
      night: "bg-gradient-to-br from-slate-600/50 to-slate-800/60",
    },
    snow: {
      day: "bg-gradient-to-br from-sky-400 to-blue-500",
      night: "bg-gradient-to-br from-slate-400/30 to-slate-600/40",
    },
    atmosphere: {
      day: "bg-gradient-to-br from-stone-300/50 to-stone-400/60",
      night: "bg-gradient-to-br from-stone-600/40 to-stone-800/50",
    },
    clear: {
      day: "bg-gradient-to-br from-sky-300 to-blue-500",
      night: "bg-gradient-to-br from-indigo-900/80 to-slate-900",
    },
    clouds: {
      day: "bg-gradient-to-br from-slate-400/40 to-slate-500/50",
      night: "bg-gradient-to-br from-slate-600/50 to-slate-800/60",
    },
  };

  const variant = isNight ? backgrounds[group].night : backgrounds[group].day;
  return variant;
}
