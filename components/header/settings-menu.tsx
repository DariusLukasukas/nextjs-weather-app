"use client";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun, Settings, Contrast, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { WeatherUnits } from "@/types/weather-units";
import { getUnits } from "@/lib/weather/units";

const UNIT_OPTIONS = [
  { value: "celsius", label: "°C", ariaLabel: "Celsius" },
  { value: "fahrenheit", label: "°F", ariaLabel: "Fahrenheit" },
];

const THEME_OPTIONS = [
  {
    value: "light",
    label: <Sun className="size-4" />,
    ariaLabel: "Light",
  },
  {
    value: "dark",
    label: <Moon className="size-4" />,
    ariaLabel: "Dark",
  },
  {
    value: "system",
    label: <Contrast className="size-4" />,
    ariaLabel: "System",
  },
];

export default function SettingsMenu() {
  // Weather units
  const router = useRouter();
  const units = getUnits();

  const updateWeatherUnits = (patch: Partial<WeatherUnits>) => {
    const current = getUnits();
    const next = { ...current, ...patch };
    document.cookie = `WEATHER_UNITS=${encodeURIComponent(JSON.stringify(next))}; path=/; max-age=31536000`;
    router.refresh();
  };

  // Theme
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            size={"icon"}
            variant={"outline"}
            className="ml-auto rounded-full"
          >
            <Settings2 />
          </Button>
        }
      />
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuItem
          closeOnClick={false}
          className="focus:text-foreground focus:bg-transparent"
        >
          Temperature
          <div className="bg-secondary ml-auto flex items-center rounded-full p-1">
            {UNIT_OPTIONS.map((option) => (
              <Tooltip key={option.value}>
                <TooltipTrigger
                  render={
                    <button
                      type="button"
                      aria-label={option.ariaLabel}
                      onClick={() =>
                        updateWeatherUnits({
                          temperature:
                            option.value as WeatherUnits["temperature"],
                        })
                      }
                      className={cn(
                        "flex size-8 items-center justify-center rounded-full",
                        units.temperature === option.value && "bg-card",
                      )}
                    >
                      {option.label}
                    </button>
                  }
                />
                <TooltipContent showArrow={false}>
                  {option.ariaLabel}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="m-1.5" />

        <DropdownMenuItem
          closeOnClick={false}
          className="focus:text-foreground focus:bg-transparent"
        >
          Theme
          <div className="bg-secondary ml-auto flex items-center rounded-full p-1">
            {THEME_OPTIONS.map((option) => (
              <Tooltip key={option.value}>
                <TooltipTrigger
                  render={
                    <button
                      type="button"
                      aria-label={option.ariaLabel}
                      onClick={() => handleThemeChange(option.value)}
                      className={cn(
                        "flex size-8 items-center justify-center rounded-full",
                        theme === option.value && "bg-card",
                      )}
                    >
                      {option.label}
                    </button>
                  }
                />
                <TooltipContent showArrow={false}>
                  {option.ariaLabel}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
