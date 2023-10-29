"use client"

import { useEffect, useMemo, useState } from "react"
import { twMerge } from "tailwind-merge"

interface ClockProps {
  initial: Date
  timezone: number
  className?: string
}

export default function Clock({ initial, timezone, className }: ClockProps) {
  const [time, setTime] = useState(calculateLocalTime(initial, timezone))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateLocalTime(new Date(), timezone))
    }, 1000)

    return () => clearInterval(timer)
  }, [timezone])

  function calculateLocalTime(initialTime: Date, offsetSeconds: number): Date {
    // Calculate the local time by adjusting the initial time with the offset
    const localTime = new Date(initialTime.getTime() + offsetSeconds * 1000)
    return localTime
  }

  return (
    <div className={twMerge("tabular.nums", className)}>
      {time.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  )
}
