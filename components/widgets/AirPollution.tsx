import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Progress } from "../ui/progress"
import { AirQualityData } from "@/lib/types"
import { cn } from "@/lib/utils"
import { ClassNameValue } from "tailwind-merge"

interface AirPollutionProps {
  airQuality: AirQualityData
  className?: ClassNameValue
}

export default function AirPollution({
  airQuality,
  className,
}: AirPollutionProps) {
  return (
    <Card
      className={cn(
        "order-2 col-span-2 flex h-48 flex-col justify-between",
        className
      )}
    >
      <CardHeader>
        <CardTitle>
          <i>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 invert dark:invert-0"
            >
              <path
                opacity="0.4"
                d="M10 3.75H11.25V8.5C11.25 8.91 11.59 9.25 12 9.25C12.41 9.25 12.75 8.91 12.75 8.5V3.75H14C14.41 3.75 14.75 3.41 14.75 3C14.75 2.59 14.41 2.25 14 2.25H10C9.59 2.25 9.25 2.59 9.25 3C9.25 3.41 9.59 3.75 10 3.75Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M14 20.25H12.75V15.5C12.75 15.09 12.41 14.75 12 14.75C11.59 14.75 11.25 15.09 11.25 15.5V20.25H10C9.59 20.25 9.25 20.59 9.25 21C9.25 21.41 9.59 21.75 10 21.75H14C14.41 21.75 14.75 21.41 14.75 21C14.75 20.59 14.41 20.25 14 20.25Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M2.82989 9.87994C2.94989 9.94994 3.07989 9.97994 3.19989 9.97994C3.45989 9.97994 3.70989 9.84993 3.84989 9.59993L4.47989 8.51994L8.59989 10.8999C8.70989 10.9699 8.83989 10.9999 8.96989 10.9999C9.22989 10.9999 9.47989 10.8699 9.61989 10.6199C9.82989 10.2599 9.69989 9.79993 9.34989 9.59993L5.23989 7.21994L5.85989 6.13994C6.06989 5.77994 5.93989 5.31993 5.58989 5.11993C5.22989 4.90993 4.76989 5.02994 4.56989 5.38994L2.56989 8.84993C2.34989 9.21993 2.46989 9.66994 2.82989 9.87994Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M21.1699 14.1202C20.8099 13.9102 20.3499 14.0302 20.1499 14.3902L19.5199 15.4702L15.3999 13.1002C15.0399 12.8902 14.5799 13.0202 14.3799 13.3702C14.1699 13.7302 14.2999 14.1902 14.6499 14.3902L18.7599 16.7702L18.1399 17.8502C17.9299 18.2102 18.0599 18.6702 18.4099 18.8702C18.5299 18.9402 18.6599 18.9702 18.7799 18.9702C19.0399 18.9702 19.2899 18.8402 19.4299 18.5902L21.4299 15.1302C21.6499 14.7802 21.5299 14.3302 21.1699 14.1202Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M18.77 7.22019L14.66 9.60019C14.3 9.81019 14.18 10.2702 14.39 10.6202C14.53 10.8602 14.78 11.0002 15.04 11.0002C15.17 11.0002 15.3 10.9702 15.41 10.9002L19.52 8.52019L20.15 9.60019C20.29 9.84019 20.54 9.98019 20.8 9.98019C20.93 9.98019 21.06 9.95019 21.17 9.88019C21.53 9.67019 21.65 9.21019 21.44 8.86019L19.44 5.40019C19.23 5.04019 18.77 4.92019 18.42 5.13019C18.06 5.34019 17.94 5.80019 18.15 6.15019L18.77 7.22019Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M5.22988 16.7802L9.33988 14.4002C9.69988 14.1902 9.81988 13.7302 9.60988 13.3802C9.39988 13.0202 8.93988 12.9002 8.58988 13.1102L4.47988 15.4902L3.84988 14.4102C3.63988 14.0502 3.17988 13.9302 2.82988 14.1402C2.46988 14.3502 2.34988 14.8102 2.55988 15.1602L4.55988 18.6202C4.69988 18.8602 4.94988 19.0002 5.20988 19.0002C5.33988 19.0002 5.46988 18.9702 5.57988 18.9002C5.93988 18.6902 6.05988 18.2302 5.84988 17.8802L5.22988 16.7802Z"
                fill="white"
              />
              <path
                d="M15.5 12C15.5 12.64 15.33 13.23 15.03 13.75C14.42 14.8 13.29 15.5 12 15.5C10.71 15.5 9.58 14.8 8.97 13.75C8.67 13.23 8.5 12.64 8.5 12C8.5 11.36 8.67 10.77 8.97 10.25C9.58 9.2 10.71 8.5 12 8.5C13.29 8.5 14.42 9.2 15.03 10.25C15.33 10.77 15.5 11.36 15.5 12Z"
                fill="white"
              />
            </svg>
          </i>
          Air pollution
        </CardTitle>
      </CardHeader>
      <CardContent className="my-auto">
        <Progress aria-label="Air pollution" value={airQuality.main.aqi * 10} />
      </CardContent>
      <CardFooter>
        <p>
          {airQuality.main.aqi < 50
            ? "Air quality is good."
            : airQuality.main.aqi < 100
            ? "Air quality is moderate."
            : airQuality.main.aqi < 150
            ? "Air quality is unhealthy for sensitive groups."
            : airQuality.main.aqi < 200
            ? "Air quality is unhealthy."
            : airQuality.main.aqi < 300
            ? "Air quality is very unhealthy."
            : "Air quality is hazardous."}
        </p>
      </CardFooter>
    </Card>
  )
}
