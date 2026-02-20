import { convertWindSpeed } from "@/lib/units";
import { WeatherUnits } from "@/types/weather-units";

function degreeToDirection(deg: number): string {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(deg / 22.5) % 16;
  return directions[index];
}

export default function WindCard({
  deg,
  speed,
  gust,
  windSpeedUnit,
}: {
  deg: number;
  speed: number;
  gust?: number;
  windSpeedUnit: WeatherUnits["windSpeed"];
}) {
  return (
    <>
      <div className="flex h-full flex-1 flex-col justify-evenly">
        <p className="text-sm font-medium">
          Wind: {convertWindSpeed(speed, windSpeedUnit).toFixed(0)}{" "}
          {windSpeedUnit}
        </p>
        {gust && (
          <p className="text-sm font-medium">
            {gust
              ? `Gust: ${convertWindSpeed(gust, windSpeedUnit).toFixed(0)} ${windSpeedUnit}`
              : null}
          </p>
        )}
        <p className="text-sm font-medium">
          Direction: {deg}° {degreeToDirection(deg)}
        </p>
      </div>
      {/* Compass */}
      <div className="absolute inset-0 flex items-center justify-end p-3">
        <div className="relative aspect-square h-full rounded-full">
          {/* Tick marks */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            {Array.from({ length: 72 }).map((_, i) => {
              const angle = i * 5;
              const isMajor = angle % 30 === 0;
              const isMinor = angle % 10 === 0;
              const len = isMajor ? 6 : isMinor ? 4 : 2;

              return (
                <line
                  key={angle}
                  x1={50}
                  y1={2}
                  x2={50}
                  y2={2 + len}
                  stroke="currentColor"
                  strokeWidth={isMajor ? 1 : 0.5}
                  opacity={isMajor ? 0.8 : 0.3}
                  transform={`rotate(${angle} 50 50)`}
                />
              );
            })}
            {/* Direction arrow */}
            <g transform={`rotate(${deg + 180} 50 50)`} className="shadow">
              {/* Arrow line */}
              <line
                x1={50}
                y1={16}
                x2={50}
                y2={84}
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
              {/* Arrow tip */}
              <polygon points="50,14 46,22 54,22" fill="currentColor" />
              {/* Tail dot */}
              <circle cx={50} cy={84} r={2} fill="currentColor" />
            </g>
          </svg>
          {/* Cardinal labels */}
          <span className="text-muted-foreground bg-card absolute top-0 left-1/2 -translate-x-1/2 text-sm font-medium">
            N
          </span>
          <span className="text-muted-foreground bg-card absolute bottom-0 left-1/2 -translate-x-1/2 text-sm font-medium">
            S
          </span>
          <span className="text-muted-foreground bg-card absolute top-1/2 right-0 -translate-y-1/2 text-sm font-medium">
            E
          </span>
          <span className="text-muted-foreground bg-card absolute top-1/2 left-0 h-fit w-fit -translate-y-1/2 text-sm font-medium">
            W
          </span>
        </div>
      </div>
    </>
  );
}
