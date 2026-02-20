"use client";
import { GeocodingFeature } from "@mapbox/search-js-core";

export default function SuggestionItem({
  feature,
  onSelect,
}: {
  feature: GeocodingFeature;
  onSelect: (feature: GeocodingFeature) => void;
}) {
  return (
    <li>
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => onSelect(feature)}
        className="hover:bg-accent w-full truncate rounded-md p-2 text-left text-sm"
      >
        <span>{feature.properties?.name}</span>
        <span className="text-muted-foreground text-xs">
          {", "}
          {feature.properties?.place_formatted}
        </span>
      </button>
    </li>
  );
}
