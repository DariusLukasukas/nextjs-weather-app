export const getAirPollutionData = async ({
  lat,
  lon,
}: {
  lat: string
  lon: string
}) => {
  const data = await fetch(
    `${process.env.DOMAIN}/api/weather/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`,
    {
      next: { revalidate: 900 },
    }
  )

  return data.json()
}
