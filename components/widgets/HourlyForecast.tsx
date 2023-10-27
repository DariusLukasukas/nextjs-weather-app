"use client"
import { HourlyForecastData } from "@/lib/types"
import { Card } from "../ui/card"
import { useRef } from "react"
import { useDraggable } from "react-use-draggable-scroll"
import IconComponent from "../ui/icon-component"

interface HourlyForecastProps {
  data: HourlyForecastData[]
}

export default function HourlyForecast({ data }: HourlyForecastProps) {
  function extractHoursFromDate(dt: number): number {
    const date = new Date(dt * 1000)
    return date.getHours()
  }
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref, {
    safeDisplacement: 2,
  })

  return (
    <>
      <Card
        ref={ref}
        {...events}
        tabIndex={0}
        className="order-first col-span-2 flex h-48 cursor-grab touch-auto touch-pan-x select-none scroll-px-0.5 flex-row items-center justify-between gap-12 overflow-hidden overscroll-contain scroll-smooth p-6 ring-offset-background transition-colors scrollbar-hide hover:overflow-x-auto focus:scroll-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:order-2 lg:order-3"
      >
        {data.slice(0, 12).map((item: HourlyForecastData, i) => (
          <div key={item.dt} className="flex h-full flex-col justify-between">
            <div className="flex justify-center text-sm text-neutral-600 dark:text-neutral-400">
              {i === 0 ? "Now" : extractHoursFromDate(item.dt)}
            </div>
            <div className="flex h-full items-center justify-center">
              <IconComponent
                weatherCode={item.weather[0].id}
                x={item.sys.pod}
                className="h-8 w-8"
              />
            </div>
            <div className="flex justify-center">
              {Math.floor(item.main.temp)}&deg;
            </div>
          </div>
        ))}
      </Card>
    </>
  )
}
