import { AirQualityData, City, HourlyForecastData } from "@/lib/types"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Progress } from "../ui/progress"
import AirPollution from "./AirPollution"
import Compass from "../ui/compass"
import { formatSunTimeWithAMPM } from "@/lib/dateUtils"

interface WeatherWidgetsProps {
  data: HourlyForecastData
  airQuality: AirQualityData
  uvIndexForToday: number
  city: City
}

export default function WeatherWidgets({
  data,
  airQuality,
  uvIndexForToday,
  city,
}: WeatherWidgetsProps) {
  console.log(data)
  return (
    <>
      <AirPollution airQuality={airQuality} className="order-2 md:order-1" />
      <Card className="order-3 flex h-48 flex-col justify-between lg:order-2">
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
                  d="M18.4802 12.25C18.7602 12.25 19.0002 12.01 18.9802 11.73C18.7102 8.11 15.6902 5.25 12.0002 5.25C8.31019 5.25 5.29021 8.1 5.02021 11.73C5.00021 12.01 5.24021 12.25 5.52021 12.25H18.4802Z"
                  fill="white"
                />
                <path
                  d="M22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08002 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.03998 11.45 3.03998 12C3.03998 12.55 2.63002 13 2.08002 13ZM19.01 5.99001C18.75 5.99001 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.67999 18.3 4.28999L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18001 19.84 5.57001L19.71 5.7C19.52 5.89 19.27 5.99001 19.01 5.99001ZM4.98999 5.99001C4.72999 5.99001 4.48003 5.89 4.28003 5.7L4.15002 5.57001C3.76002 5.18001 3.76002 4.55 4.15002 4.16C4.54002 3.77 5.17 3.77 5.56 4.16L5.69 4.28999C6.08 4.67999 6.08 5.31 5.69 5.7C5.5 5.89 5.23999 5.99001 4.98999 5.99001ZM12 3.03999C11.45 3.03999 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.03999 12 3.03999Z"
                  fill="white"
                />
                <path
                  opacity="0.4"
                  d="M20 15.75H4C3.59 15.75 3.25 15.41 3.25 15C3.25 14.59 3.59 14.25 4 14.25H20C20.41 14.25 20.75 14.59 20.75 15C20.75 15.41 20.41 15.75 20 15.75Z"
                  fill="white"
                />
                <path
                  opacity="0.4"
                  d="M18 18.75H6C5.59 18.75 5.25 18.41 5.25 18C5.25 17.59 5.59 17.25 6 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z"
                  fill="white"
                />
                <path
                  opacity="0.4"
                  d="M15 21.75H9C8.59 21.75 8.25 21.41 8.25 21C8.25 20.59 8.59 20.25 9 20.25H15C15.41 20.25 15.75 20.59 15.75 21C15.75 21.41 15.41 21.75 15 21.75Z"
                  fill="white"
                />
              </svg>
            </i>
            Sunset
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{formatSunTimeWithAMPM(city.sunset, city.timezone)}</p>
        </CardContent>
        <CardFooter>
          <p>Sunrise: {formatSunTimeWithAMPM(city.sunrise, city.timezone)}</p>
        </CardFooter>
      </Card>
      <Card className="order-4 h-48 xl:order-3">
        <CardHeader>
          <CardTitle>
            <i>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 stroke-black dark:stroke-white"
              >
                <path
                  d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 9.00012H9.31C10.8 9.00012 12 7.79012 12 6.31012C12 4.82012 10.79 3.62012 9.31 3.62012C7.82 3.62012 6.62 4.83012 6.62 6.31012V6.69012"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
            Wind
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center p-0">
          <Compass speed={data.wind.speed} deg={data.wind.deg} />
        </CardContent>
      </Card>
      <Card className="order-5 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle>
            <i>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 stroke-black dark:stroke-white"
              >
                <path
                  d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
            UV Index
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            {Math.round(uvIndexForToday)}
            <br></br>
            {uvIndexForToday <= 2
              ? "Low"
              : uvIndexForToday <= 5
              ? "Moderate"
              : uvIndexForToday <= 7
              ? "High"
              : "Very High"}
          </p>
          <Progress aria-label="UV Index" value={uvIndexForToday * 10} />
        </CardContent>
        <CardFooter>
          <p>
            {uvIndexForToday <= 2
              ? "No protection needed."
              : uvIndexForToday <= 5
              ? "Wear sunscreen."
              : "Take precautions."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-6 flex h-48 flex-col justify-between">
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
                  d="M16.6102 19.9999C17.9502 20.0099 19.2402 19.5099 20.2302 18.6099C23.5002 15.7499 21.7502 10.0099 17.4402 9.46995C15.9002 0.129949 2.43022 3.66995 5.62022 12.5599"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.27986 12.9698C6.74986 12.6998 6.15986 12.5598 5.56986 12.5698C0.909864 12.8998 0.919864 19.6798 5.56986 20.0098"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8198 9.88998C16.3398 9.62998 16.8998 9.48998 17.4798 9.47998"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M9.97022 20L7.97021 22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M13.9702 20L11.9702 22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M13.9702 16L11.9702 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M9.97022 16L7.97021 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
            Precipitation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {data.rain?.["1h"] || 0}mm <br></br>in the last 3h
          </p>
        </CardContent>
        <CardFooter>
          <p>
            {data.rain?.["1h"] !== undefined
              ? data.rain["1h"] <= 0.1
                ? "Light rain or drizzle. An umbrella may come in handy."
                : data.rain["1h"] <= 2.5
                ? "Moderate rain. You might need an umbrella or raincoat."
                : "Heavy rain. Prepare for wet weather."
              : "Conditions are dry."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-7 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
              </svg>
            </i>
            Feels like
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{Math.floor(data.main.feels_like)}&deg;</p>
        </CardContent>
        <CardFooter>
          <p>
            {data.main.feels_like < data.main.temp
              ? "Feels colder than the actual temperature."
              : data.main.feels_like > data.main.temp
              ? "Feels warmer than the actual temperature."
              : "Feels like the actual temperature."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-8 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle>
            <i>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-black dark:fill-white"
              >
                <path d="M16.59 7.41L6.30996 17.69C5.82996 18.17 5.00996 18.06 4.71996 17.45C4.19996 16.38 3.89996 15.17 3.89996 13.9C3.87996 8.38 9.47996 3.66 11.38 2.21C11.75 1.93 12.25 1.93 12.61 2.21C13.48 2.87 15.11 4.24 16.64 6.04C16.98 6.44 16.96 7.04 16.59 7.41Z" />
                <path
                  opacity="0.4"
                  d="M20.1 13.9098C20.1 18.3698 16.47 21.9998 12 21.9998C10.21 21.9998 8.53996 21.4198 7.18996 20.4198C6.69996 20.0598 6.65996 19.3398 7.08996 18.9098L17.16 8.83977C17.63 8.36977 18.42 8.46978 18.74 9.04978C19.56 10.5598 20.11 12.1998 20.1 13.9098Z"
                />
              </svg>
            </i>
            Humidity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>74&deg;</p>
        </CardContent>
        <CardFooter>
          <p>
            {data.main.humidity < 40
              ? "Low humidity. It might feel dry."
              : data.main.humidity < 70
              ? "Moderate humidity. Comfortable conditions."
              : "High humidity. It might feel humid and uncomfortable."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-9 flex h-48 flex-col justify-between">
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
                  d="M21.25 9.15018C18.94 5.52017 15.56 3.43018 12 3.43018C10.22 3.43018 8.49 3.95018 6.91 4.92018C5.33 5.90018 3.91 7.33017 2.75 9.15018C1.75 10.7202 1.75 13.2702 2.75 14.8402C5.06 18.4802 8.44 20.5602 12 20.5602C13.78 20.5602 15.51 20.0402 17.09 19.0702C18.67 18.0902 20.09 16.6602 21.25 14.8402C22.25 13.2802 22.25 10.7202 21.25 9.15018ZM12 16.0402C9.76 16.0402 7.96 14.2302 7.96 12.0002C7.96 9.77018 9.76 7.96018 12 7.96018C14.24 7.96018 16.04 9.77018 16.04 12.0002C16.04 14.2302 14.24 16.0402 12 16.0402Z"
                  fill="white"
                />
                <path
                  d="M11.9999 9.14014C10.4299 9.14014 9.1499 10.4201 9.1499 12.0001C9.1499 13.5701 10.4299 14.8501 11.9999 14.8501C13.5699 14.8501 14.8599 13.5701 14.8599 12.0001C14.8599 10.4301 13.5699 9.14014 11.9999 9.14014Z"
                  fill="white"
                />
              </svg>
            </i>
            Visibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.visibility / 1000} km</p>
        </CardContent>
        <CardFooter>
          <p>
            {data.visibility >= 10
              ? "It's perfectly clear right now."
              : data.visibility >= 5
              ? "Good visibility."
              : "Poor visibility. Exercise caution while driving or moving around."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-10 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
            </i>
            Pressure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.main.pressure} hPa</p>
        </CardContent>
        <CardFooter>
          <p>
            {data.main.pressure < 1000
              ? "Low pressure. Expect changes in the weather."
              : data.main.pressure >= 1000 && data.main.pressure <= 1010
              ? "Normal pressure. Typical weather conditions."
              : "High pressure. Expect stable and clear weather."}
          </p>
        </CardFooter>
      </Card>
    </>
  )
}
