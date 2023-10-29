export function convertToDate(
  timezone: number,
  dt: number,
  weekdayFormat: "short" | "long"
): string {
  let utc_time = new Date(dt * 1000)
  let local_time = new Date(utc_time.getTime() + timezone * 1000)

  const options = { weekday: weekdayFormat }
  const dateFormatter = new Intl.DateTimeFormat("UTC", options)

  return dateFormatter.format(local_time)
}

export function formatSunTimeWithAMPM(
  timestamp: number,
  timezoneOffset: number
): string {
  const date = new Date((timestamp + timezoneOffset) * 1000)
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date)
  return formattedTime
}
