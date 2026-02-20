import { OpenWeatherWeatherMapLayer } from "@/types/openweather";
import { NextRequest, NextResponse } from "next/server";

const VALID_LAYERS: Set<string> = new Set<OpenWeatherWeatherMapLayer>([
  "clouds_new",
  "precipitation_new",
  "pressure_new",
  "wind_new",
  "temp_new",
]);

export async function GET(
  _request: NextRequest,
  {
    params,
  }: { params: Promise<{ layer: string; z: string; x: string; y: string }> },
) {
  const { layer, z, x, y } = await params;

  if (!VALID_LAYERS.has(layer)) {
    return NextResponse.json({ error: "Invalid layer" }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Weather API key is not set" },
      { status: 500 },
    );
  }

  const tileUrl = `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${apiKey}`;

  const res = await fetch(tileUrl);

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch weather tile" },
      { status: 500 },
    );
  }

  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=1800, s-maxage=1800",
    },
  });
}
