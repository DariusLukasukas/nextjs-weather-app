"use client";

import { useEffect, useState } from "react";

const INTERVAL = 60_000; // 1 minute

function formatTimeInTimezone(
  utcSeconds: number,
  timezoneSeconds: number,
): string {
  const d = new Date((utcSeconds + timezoneSeconds) * 1000);
  return `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}`;
}

export default function CityTime({ timezone }: { timezone: number }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = formatTimeInTimezone(now.getTime() / 1000, timezone);

  return <p className="text-muted-foreground text-xs">{formattedTime}</p>;
}
