export default function SunriseSunsetCard({
  sunrise,
  sunset,
  timezone,
}: {
  sunrise: number;
  sunset: number;
  timezone: number;
}) {
  const formatTime = (unix: number) => {
    const localMs = (unix + timezone) * 1000;
    const date = new Date(localMs);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="flex h-full flex-col">
      <p className="text-2xl font-medium">{formatTime(sunrise)}</p>
      <p className="text-muted-foreground mt-auto text-sm">
        Sunset: {formatTime(sunset)}
      </p>
    </div>
  );
}
