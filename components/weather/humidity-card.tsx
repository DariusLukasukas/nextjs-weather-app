/**
 * Humidity, %
 */
export default function HumidityCard({ humidity }: { humidity: number }) {
  return (
    <div className="text-2xl font-medium">
      <p>{humidity} %</p>
    </div>
  );
}
