export default function UVIndexCard({ uvIndex }: { uvIndex: number }) {
  const level =
    uvIndex <= 2
      ? "Low"
      : uvIndex <= 5
        ? "Moderate"
        : uvIndex <= 7
          ? "High"
          : uvIndex <= 10
            ? "Very High"
            : "Extreme";

  const maxUV = 11;
  const position = Math.min((uvIndex / maxUV) * 100, 100);

  const colors = [
    "oklch(0.75 0.2 160)", // green (low)
    "oklch(0.82 0.2 95)", // yellow (moderate)
    "oklch(0.72 0.2 50)", // orange (high)
    "oklch(0.62 0.25 30)", // red (very high)
    "oklch(0.45 0.3 310)", // purple (extreme)
  ];

  return (
    <div className="flex h-full flex-col">
      <p className="text-2xl font-medium">{level}</p>

      <div className="my-auto flex flex-col gap-2 px-2">
        <div
          className="relative h-3 w-full rounded-full"
          style={{
            background: `linear-gradient(to right, ${colors.join(", ")})`,
          }}
        >
          <div
            className="absolute top-1/2 size-4 -translate-y-1/2 rounded-full border-2 border-white bg-current shadow"
            style={{ left: `${position}%`, translate: "-50% -50%" }}
          />
        </div>
      </div>
    </div>
  );
}
