"use client";

import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type {
  GeocodingResponse,
  GeocodingFeature,
} from "@mapbox/search-js-core";
import useDebounce from "@/hooks/use-debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_CITIES } from "@/lib/constants/default-cities";
import SuggestionItem from "./suggestion-item";

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

export default function LocationSearch({
  onFocusChange,
}: {
  onFocusChange: (isFocused: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<GeocodingFeature[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const debouncedQuery = useDebounce(query, 500);

  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (debouncedQuery.length < 3) {
      setSuggestions([]);
      return;
    }

    // Abort previous request if still running
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const params = new URLSearchParams({
      q: debouncedQuery,
      access_token: MAPBOX_API_KEY,
      limit: "5",
      types: "place",
    });

    fetch(`https://api.mapbox.com/search/geocode/v6/forward?${params}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json() as Promise<GeocodingResponse>;
      })
      .then((data) => {
        setSuggestions(data.features || []);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Geocoding error:", error);
          setSuggestions([]);
        }
      });

    return () => controller.abort();
  }, [debouncedQuery]);

  const handleSelectSuggestion = (feature: GeocodingFeature) => {
    const [lon, lat] = feature.geometry.coordinates;

    const params = new URLSearchParams(searchParams.toString());
    params.set("lat", lat.toString());
    params.set("lon", lon.toString());
    params.set("location", feature.properties?.name || "");
    params.set("country", feature.properties?.context?.country?.name || "");

    router.push(`?${params.toString()}`);

    setQuery("");
    setSuggestions([]);
    setIsFocused(false);

    inputRef.current?.blur();
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocusChange(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocusChange(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full focus:outline-none">
        <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />

        <input
          type="text"
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search"
          className="w-full rounded-full border px-4 py-2 pl-8 text-sm focus:outline-none"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>

      {isFocused && (
        <>
          {suggestions.length === 0 && (
            <p
              className="text-muted-foreground px-2 pt-1 text-xs uppercase"
              onMouseDown={(e) => e.preventDefault()}
            >
              Suggested
            </p>
          )}
          <ul className="flex flex-col">
            {(suggestions.length > 0 ? suggestions : DEFAULT_CITIES).map(
              (feature) => (
                <SuggestionItem
                  key={feature.id}
                  feature={feature}
                  onSelect={handleSelectSuggestion}
                />
              ),
            )}
          </ul>
        </>
      )}
    </div>
  );
}
