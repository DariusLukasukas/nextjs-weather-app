export default function AirQualityCard({ airQuality }: { airQuality: number }) {
  const label: Record<number, string> = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };

  const position = ((airQuality - 1) / 4) * 100;

  const colors: Record<number, string> = {
    0: "oklch(0.9 0.05 240)", // blue
    1: "oklch(0.75 0.2 160)", // green
    2: "oklch(0.8 0.2 130)", // lime
    3: "oklch(0.82 0.2 95)", // yellow
    4: "oklch(0.72 0.2 50)", // orange
    5: "oklch(0.62 0.25 30)", // red
    6: "oklch(0.45 0.3 310)", // purple
  };

  return (
    <div className="flex h-full flex-col">
      <p className="text-2xl font-medium">{label[airQuality]}</p>
      {/* Gradient bar */}
      <div className="my-auto flex flex-col gap-2 px-2">
        <div
          className="relative h-3 w-full rounded-full"
          style={{
            background: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[4]}, ${colors[5]}, ${colors[6]})`,
          }}
        >
          {/* Indicator dot */}
          <div
            className="absolute top-1/2 size-4 -translate-y-1/2 rounded-full border-2 border-white bg-current shadow"
            style={{ left: `${position}%`, translate: "-50% -50%" }}
          />
        </div>
      </div>
    </div>
  );
}
