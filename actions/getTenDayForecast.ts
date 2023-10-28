export const getTenDayForecast = async ({
  lat,
  lon,
}: {
  lat: string
  lon: string
}) => {
  const data = await fetch(
    `${process.env.DOMAIN}/api/weather/daily_forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`,
    {
      next: { revalidate: 900 },
    }
  )

  return data.json()
}
