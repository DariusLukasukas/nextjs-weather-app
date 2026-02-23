# Vertex Weather

Apple Weather inspired web app integrating Mapbox and OpenWeather APIs to deliver real-time forecasts, interactive map with weather layers, and location search.

<img width="3984" height="2696" alt="CleanShot 2026-02-23 at 20 23 56@2x" src="https://github.com/user-attachments/assets/9305dd14-cc58-4b1f-8b55-cc18aed26853" />

## Features

- **Weather overview** — Current conditions, hourly and 10-day forecasts, and detailed metrics (air quality, UV, wind, pressure, precipitation, humidity, visibility, sunrise/sunset).
- **Interactive map** — Mapbox map with OpenWeather layers (clouds, precipitation, pressure, wind, temperature).
- **Locations** — Search and add cities via Mapbox. Saved locations are stored in **localStorage**.
- **Theme** — Light / dark / system (next-themes).

## Tech Stack

- **Framework** — Next.js 16, React 19
- **UI & styling** — Tailwind CSS, Base UI / shadcn, Lucide, tailwind-merge, class-variance-authority
- **Animation** — Motion
- **State** — Zustand
- **Data** — OpenWeather API, Mapbox (map + search)
- **Utils** — date-fns

## Data fetching

**OpenWeather:** The app uses several OpenWeather APIs (current weather, hourly/daily forecasts, air pollution, UV) because the free tier doesn’t include everything in one call. A [paid or student plan](https://openweathermap.org/price) (e.g. Developer) is required. OpenWeather also offers [One Call](https://openweathermap.org/api/one-call-3) and similar paid APIs that return more data in a single request, this project uses the multi-endpoint approach.

- **Weather data** — Fetched on the server in the dashboard page via [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) (`actions/weather.ts`). Current weather, hourly forecast, 10-day forecast, air pollution, and UV are requested in parallel with `Promise.all`. Responses are cached with `next: { revalidate: 3000 }` (30 minutes).
- **Map tiles** — Served through a Next.js API route (`/api/weather/[layer]/[z]/[x]/[y]`) that proxies to OpenWeather’s tile API. The route keeps `OPENWEATHER_API_KEY` on the server and returns tiles with a short cache (`Cache-Control: max-age=1800`).
- **Location search** — Uses Mapbox Search JS in the browser. The map and search box need `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` because they run client-side.

## Getting Started

First, create a .env.local file and add the following variables:

```
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
OPENWEATHER_API_KEY=your_openweather_api_key
```

Then, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The app defaults to Cupertino, CA. Use the sidebar to search and change locations.
